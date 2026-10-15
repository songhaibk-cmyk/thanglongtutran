import React, { useState } from 'react';
import { LiteraryWork, Landmark } from '../types';
import {
  X,
  ArrowLeft,
  Bookmark,
  Share2,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  ExternalLink,
  Check,
  Type,
  FileText,
  MapPin,
  Compass
} from 'lucide-react';

interface WorkReaderModalProps {
  work: LiteraryWork;
  landmark?: Landmark;
  onClose: () => void;
  onBackToLandmark?: () => void;
  isFavorite: boolean;
  onToggleFavorite: (workId: string) => void;
}

export const WorkReaderModal: React.FC<WorkReaderModalProps> = ({
  work,
  landmark,
  onClose,
  onBackToLandmark,
  isFavorite,
  onToggleFavorite,
}) => {
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [showOriginalHan, setShowOriginalHan] = useState(false);
  const [copied, setCopied] = useState(false);

  const fontSizeClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose',
  }[fontSize];

  const handleCopyCitation = () => {
    const citation = `"${work.title}" - Tác giả: ${work.author} (${work.period}). Hồ sơ văn học Thăng Long Tứ Trấn.`;
    navigator.clipboard?.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[700] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[95vh] flex flex-col bg-[#FDFBF7] rounded-2xl shadow-2xl border border-stone-300 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reader-title"
      >
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#F4EFE6] border-b border-stone-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {onBackToLandmark && landmark && (
              <button
                onClick={onBackToLandmark}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-stone-700 hover:text-[#8B1E1E] hover:bg-stone-200/60 rounded-lg transition-colors cursor-pointer"
                title={`Quay lại ${landmark.name}`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Về {landmark.name}</span>
              </button>
            )}

            <span className="text-xs text-stone-500 hidden md:inline">|</span>

            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                work.connectionType === 'direct'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              {work.connectionType === 'direct' ? 'Liên hệ trực tiếp' : 'Liên hệ chủ đề & cảm hứng'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font size control */}
            <div className="flex items-center bg-white border border-stone-300 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 rounded cursor-pointer font-serif ${
                  fontSize === 'sm' ? 'bg-stone-200 text-stone-900 font-bold' : 'text-stone-600'
                }`}
                title="Cỡ chữ nhỏ"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 rounded cursor-pointer font-serif ${
                  fontSize === 'base' ? 'bg-stone-200 text-stone-900 font-bold' : 'text-stone-600'
                }`}
                title="Cỡ chữ tiêu chuẩn"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 rounded cursor-pointer font-serif ${
                  fontSize === 'lg' ? 'bg-stone-200 text-stone-900 font-bold' : 'text-stone-600'
                }`}
                title="Cỡ chữ lớn"
              >
                A+
              </button>
            </div>

            {/* Favorite button */}
            <button
              onClick={() => onToggleFavorite(work.id)}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                isFavorite
                  ? 'bg-rose-50 border-rose-300 text-rose-600'
                  : 'bg-white border-stone-300 text-stone-600 hover:text-stone-900'
              }`}
              title={isFavorite ? 'Bỏ lưu yêu thích' : 'Lưu vào tác phẩm yêu thích'}
              aria-label="Lưu tác phẩm yêu thích"
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Citation copy button */}
            <button
              onClick={handleCopyCitation}
              className="p-2 bg-white border border-stone-300 text-stone-600 hover:text-stone-900 rounded-lg transition-colors cursor-pointer"
              title="Sao chép trích dẫn thư mục"
              aria-label="Sao chép trích dẫn"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer ml-1"
              aria-label="Đóng bài đọc"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reader Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-10 py-8 space-y-8 text-[#2C241E]">
          {/* Header of Work */}
          <div className="border-b border-stone-200/80 pb-6 text-center max-w-2xl mx-auto">
            {landmark && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-stone-100 text-stone-700 text-xs font-medium">
                <Compass className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span>Gắn với {landmark.name} ({landmark.titleDirection})</span>
              </div>
            )}

            <h1 id="reader-title" className="font-serif-title text-2xl sm:text-3xl font-bold text-[#8B1E1E] leading-snug">
              {work.title}
            </h1>

            <div className="flex items-center justify-center gap-3 mt-3 text-sm text-stone-600 flex-wrap">
              <span>Tác giả: <strong className="text-stone-900">{work.author}</strong> {work.authorLifespan && `(${work.authorLifespan})`}</span>
              <span>•</span>
              <span className="font-medium">{work.genre}</span>
              <span>•</span>
              <span>{work.period}</span>
            </div>

            {/* Connection Explanation Callout */}
            <div className="mt-5 p-3.5 bg-amber-50/90 rounded-xl border border-amber-200/80 text-xs text-stone-800 text-left">
              <span className="font-semibold text-amber-950">Mối liên hệ & Lý do xuất hiện trong danh mục: </span>
              {work.connectionExplanation}
            </div>
          </div>

          {/* Reading Container (Paper / Dó Paper feel) */}
          <div className="bg-[#FAF7EE] p-6 sm:p-8 rounded-2xl border border-stone-300/80 shadow-xs max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 pb-2">
              <span className="font-semibold tracking-wider uppercase flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#8B1E1E]" />
                Văn bản tác phẩm
              </span>
              {work.content.originalText && (
                <button
                  onClick={() => setShowOriginalHan(!showOriginalHan)}
                  className="text-[#8B1E1E] hover:underline cursor-pointer font-medium"
                >
                  {showOriginalHan ? 'Ẩn nguyên tác chữ Hán' : 'Xem nguyên tác chữ Hán'}
                </button>
              )}
            </div>

            {/* Han / Nom text if toggled */}
            {showOriginalHan && work.content.originalText && (
              <div className="p-4 bg-stone-100 rounded-xl border border-stone-200 text-stone-800 text-sm font-serif space-y-2">
                <div className="font-bold text-xs text-stone-600 tracking-wider">NGUYÊN TÁC HÁN VĂN:</div>
                <p className="leading-relaxed whitespace-pre-line">{work.content.originalText}</p>
                {work.content.transcription && (
                  <>
                    <div className="font-bold text-xs text-stone-600 tracking-wider pt-2 border-t border-stone-200">PHIÊN ÂM HÁN VIỆT:</div>
                    <p className="italic text-stone-700 whitespace-pre-line">{work.content.transcription}</p>
                  </>
                )}
              </div>
            )}

            {/* Vietnamese Main Text */}
            <div className={`font-serif text-stone-900 whitespace-pre-line ${fontSizeClass}`}>
              {work.content.bodyText}
            </div>

            {/* Excerpt Notice */}
            {work.content.isExcerpt && work.content.excerptNotice && (
              <div className="text-xs text-stone-500 italic pt-2 border-t border-stone-200">
                * {work.content.excerptNotice}
              </div>
            )}

            {/* Copyright status note */}
            <div className="text-[11px] text-stone-500 pt-1">
              {work.isPublicDomain ? (
                <span className="text-emerald-700 font-medium">
                  ✓ Tác phẩm thuộc phạm vi công cộng (Public Domain). Được khảo lục và trích dịch từ thư tịch cổ.
                </span>
              ) : (
                <span className="text-stone-600">
                  {work.copyrightNotice || 'Trích đoạn hợp pháp phục vụ mục đích nghiên cứu, học tập văn hóa.'}
                </span>
              )}
            </div>
          </div>

          {/* Literary Analysis Section */}
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif-title text-xl font-bold text-[#8B1E1E] flex items-center gap-2 border-b border-stone-200 pb-2">
              <BookOpen className="w-5 h-5" />
              <span>Kiến thức văn học liên quan</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                <h3 className="font-bold text-xs uppercase tracking-wider text-stone-700 mb-1.5">
                  1. Hoàn cảnh sáng tác
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {work.literaryAnalysis.historicalContext}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                <h3 className="font-bold text-xs uppercase tracking-wider text-stone-700 mb-1.5">
                  2. Đề tài & Chủ đề
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {work.literaryAnalysis.themeAndTopic}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                <h3 className="font-bold text-xs uppercase tracking-wider text-stone-700 mb-1.5">
                  3. Hình tượng & Nhân vật
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {work.literaryAnalysis.artisticImagery}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                <h3 className="font-bold text-xs uppercase tracking-wider text-stone-700 mb-1.5">
                  4. Đặc sắc nghệ thuật & Giá trị
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {work.literaryAnalysis.contentAndArtValue}
                </p>
              </div>
            </div>
          </div>

          {/* Study & Discussion Questions for Students/Teachers */}
          {work.studyQuestions.length > 0 && (
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif-title text-lg font-bold text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-700" />
                <span>Câu hỏi gợi ý đọc hiểu & thảo luận</span>
              </h2>

              <div className="space-y-2.5">
                {work.studyQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-start gap-3"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Literature Sources */}
          <div className="max-w-2xl mx-auto pt-4 border-t border-stone-200">
            <h3 className="font-serif-title text-sm font-bold text-stone-800 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Nguồn thư tịch & Tài liệu tham khảo</span>
            </h3>
            <div className="space-y-2">
              {work.sources.map((s, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-stone-100 text-xs text-stone-700 flex items-start justify-between gap-2 border border-stone-200"
                >
                  <div>
                    <span className="font-semibold text-stone-900">{s.title}</span>
                    <span className="text-stone-500"> — {s.authorOrOrg} {s.year && `(${s.year})`}</span>
                    {s.notes && <div className="text-[11px] text-stone-500 italic mt-0.5">{s.notes}</div>}
                  </div>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#8B1E1E] hover:underline shrink-0 flex items-center gap-1 font-medium"
                    >
                      <span>Xem nguồn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-5 py-3 bg-[#F4EFE6] border-t border-stone-200 flex items-center justify-between shrink-0">
          <div className="text-xs text-stone-600">
            Học phần Văn học & Lịch sử Thăng Long – Hà Nội
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Đóng trang đọc
          </button>
        </div>
      </div>
    </div>
  );
};
