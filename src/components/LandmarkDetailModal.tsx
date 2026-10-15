import React, { useState } from 'react';
import { Landmark, LiteraryWork } from '../types';
import {
  X,
  Compass,
  MapPin,
  BookOpen,
  Calendar,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Bookmark,
  Share2,
  ChevronRight,
  Info
} from 'lucide-react';

interface LandmarkDetailModalProps {
  landmark: Landmark;
  works: LiteraryWork[];
  onClose: () => void;
  onOpenWork: (work: LiteraryWork) => void;
  isExplored: boolean;
  onToggleExplored: (landmarkId: string) => void;
}

type TabType = 'history' | 'literature' | 'architecture' | 'facts';

export const LandmarkDetailModal: React.FC<LandmarkDetailModalProps> = ({
  landmark,
  works,
  onClose,
  onOpenWork,
  isExplored,
  onToggleExplored,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('history');

  const landmarkWorks = works.filter((w) => w.landmarkId === landmark.id);
  const directWorks = landmarkWorks.filter((w) => w.connectionType === 'direct');
  const thematicWorks = landmarkWorks.filter((w) => w.connectionType === 'thematic');

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FAF7F0] rounded-2xl shadow-2xl border border-stone-300 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-landmark-title"
      >
        {/* Header with Lacquer & Gold styling */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-[#7D1E1E] via-[#942828] to-[#611616] text-white shrink-0 border-b border-amber-900/40">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-200 border border-amber-400/30">
                  <Compass className="w-3.5 h-3.5" />
                  {landmark.titleDirection} (Trấn {landmark.direction})
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-400/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Di tích Quốc gia Đặc biệt
                </span>
              </div>
              <h2 id="modal-landmark-title" className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                {landmark.name}
              </h2>
              <p className="text-amber-100/90 text-sm mt-0.5 font-medium">
                Thờ phụng: {landmark.deity}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleExplored(landmark.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  isExplored
                    ? 'bg-emerald-600 text-white border-emerald-400'
                    : 'bg-white/10 hover:bg-white/20 text-stone-200 border-white/20'
                }`}
                title="Đánh dấu trạng thái khám phá"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {isExplored ? 'Đã khám phá' : 'Đánh dấu đã học'}
                </span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-stone-300 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Quote bar */}
          <div className="mt-3 text-xs italic text-amber-200/90 border-l-2 border-amber-400/60 pl-3">
            {landmark.shortQuote}
          </div>

          {/* Address & Verified location note */}
          <div className="mt-3 flex items-center gap-2 text-xs text-stone-200/90 flex-wrap">
            <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="truncate">{landmark.address}</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-black/25 text-amber-200">
              {landmark.locationVerificationStatus}
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 bg-[#F2ECE1] px-4 pt-2 gap-1 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'history'
                ? 'border-[#942828] text-[#942828] bg-[#FAF7F0] rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            Lịch sử & Thần tích
          </button>
          <button
            onClick={() => setActiveTab('literature')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'literature'
                ? 'border-[#942828] text-[#942828] bg-[#FAF7F0] rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Văn học gắn liền ({landmarkWorks.length})
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-[#942828] text-[#942828] bg-[#FAF7F0] rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Kiến trúc & Lễ hội
          </button>
          <button
            onClick={() => setActiveTab('facts')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'facts'
                ? 'border-[#942828] text-[#942828] bg-[#FAF7F0] rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Bạn có biết & Nguồn
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-[#2C241E]">
          {/* TAB 1: HISTORY & ROLE */}
          {activeTab === 'history' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Role Summary Callout */}
              <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200/80 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-200/60 rounded-lg text-amber-900 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-950 text-sm">Vai trò trong Thăng Long Tứ Trấn:</h4>
                    <p className="text-stone-700 text-sm mt-1 leading-relaxed">
                      {landmark.roleSummary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Detailed Historical Origin */}
              <div>
                <h3 className="font-serif-title text-lg font-bold text-[#8B1E1E] mb-2 flex items-center gap-2">
                  <span>Lịch sử hình thành và nhân vật tín ngưỡng</span>
                </h3>
                <div className="prose prose-stone text-stone-800 text-sm leading-relaxed space-y-3">
                  {landmark.historicalOrigin.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Coordinates info card */}
              <div className="bg-stone-100 p-3.5 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
                <div className="font-medium text-stone-900">Thông tin địa lý & Định vị chính xác:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-600">
                  <div>Vĩ độ: <code className="font-mono bg-white px-1 py-0.5 rounded border border-stone-200">{landmark.coordinates[0]}° N</code></div>
                  <div>Kinh độ: <code className="font-mono bg-white px-1 py-0.5 rounded border border-stone-200">{landmark.coordinates[1]}° E</code></div>
                </div>
                <p className="text-[11px] text-stone-500 italic mt-1">
                  * Dữ liệu vị trí được đối chiếu thực địa và xác nhận theo Cục Di sản Văn hóa Việt Nam.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: LITERATURE */}
          {activeTab === 'literature' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-stone-100/90 p-3.5 rounded-xl border border-stone-200 text-xs text-stone-700 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                <p>
                  Mục này phân loại rõ: <strong>(1) Tác phẩm có liên hệ trực tiếp</strong> được văn bản cổ thư và nguồn học thuật xác nhận; 
                  và <strong>(2) Tác phẩm có liên hệ theo chủ đề hoặc cảm hứng</strong> không gian Thăng Long xưa. Nhấn vào tác phẩm để mở chế độ đọc chuyên sâu.
                </p>
              </div>

              {landmarkWorks.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-xl border border-dashed border-stone-300 text-stone-500">
                  <BookOpen className="w-10 h-10 mx-auto text-stone-400 mb-2" />
                  <p className="font-medium">Chưa có tác phẩm được xác minh trong danh mục</p>
                  <p className="text-xs text-stone-400 mt-1">Hồ sơ văn học đang được ban biên tập tiếp tục khảo cứu và bổ sung theo tiêu chuẩn học thuật.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* DIRECT WORKS */}
                  {directWorks.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                        <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                          Tác phẩm có liên hệ trực tiếp ({directWorks.length})
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {directWorks.map((work) => (
                          <div
                            key={work.id}
                            className="bg-white rounded-xl p-4 border border-stone-200 hover:border-[#8B1E1E]/50 shadow-xs hover:shadow-md transition-all group"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                                    Liên hệ trực tiếp
                                  </span>
                                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                                    {work.genre}
                                  </span>
                                  <span className="text-[11px] text-stone-500">
                                    {work.period}
                                  </span>
                                </div>
                                <h5 className="font-serif-title text-base font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors">
                                  {work.title}
                                </h5>
                                <p className="text-xs text-stone-600 mt-0.5">
                                  Tác giả: <strong className="font-semibold text-stone-800">{work.author}</strong> {work.authorLifespan && `(${work.authorLifespan})`}
                                </p>
                              </div>

                              <button
                                onClick={() => onOpenWork(work)}
                                className="shrink-0 flex items-center gap-1 px-3 py-2 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-xs font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
                              >
                                <span>Đọc tác phẩm</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <p className="text-xs text-stone-700 mt-2.5 leading-relaxed bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                              <span className="font-semibold text-stone-800">Mối liên hệ:</span> {work.connectionExplanation}
                            </p>

                            <div className="mt-3 text-xs text-stone-500 italic line-clamp-2">
                              "{work.content.bodyText.slice(0, 150)}..."
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* THEMATIC WORKS */}
                  {thematicWorks.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider">
                          Tác phẩm liên hệ theo chủ đề, bối cảnh & cảm hứng ({thematicWorks.length})
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {thematicWorks.map((work) => (
                          <div
                            key={work.id}
                            className="bg-white rounded-xl p-4 border border-stone-200 hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all group"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
                                    Liên hệ chủ đề & cảm hứng
                                  </span>
                                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                                    {work.genre}
                                  </span>
                                  <span className="text-[11px] text-stone-500">
                                    {work.period}
                                  </span>
                                </div>
                                <h5 className="font-serif-title text-base font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                                  {work.title}
                                </h5>
                                <p className="text-xs text-stone-600 mt-0.5">
                                  Tác giả: <strong className="font-semibold text-stone-800">{work.author}</strong> {work.authorLifespan && `(${work.authorLifespan})`}
                                </p>
                              </div>

                              <button
                                onClick={() => onOpenWork(work)}
                                className="shrink-0 flex items-center gap-1 px-3 py-2 bg-[#A85A20] hover:bg-[#8F4B16] text-white text-xs font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
                              >
                                <span>Đọc tác phẩm</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <p className="text-xs text-stone-700 mt-2.5 leading-relaxed bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                              <span className="font-semibold text-stone-800">Lý do đưa vào danh mục:</span> {work.connectionExplanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ARCHITECTURE & FESTIVALS */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="font-serif-title text-lg font-bold text-[#8B1E1E] mb-2 flex items-center gap-2">
                  <span>Đặc điểm kiến trúc & Cổ vật tiêu biểu</span>
                </h3>
                <div className="prose prose-stone text-stone-800 text-sm leading-relaxed space-y-2">
                  <p>{landmark.architecture}</p>
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <h4 className="font-serif-title text-base font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8B1E1E]" />
                  <span>Lễ hội truyền thống & Phong tục tế lễ</span>
                </h4>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {landmark.festivalAndCustoms}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: FACTS & SOURCES */}
          {activeTab === 'facts' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Fun Facts */}
              <div>
                <h3 className="font-serif-title text-lg font-bold text-[#8B1E1E] mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <span>Bạn có biết? (Thông tin đã được kiểm chứng)</span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {landmark.didYouKnow.map((fact, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-stone-700 text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Sources */}
              <div className="pt-4 border-t border-stone-200">
                <h4 className="font-serif-title text-base font-bold text-stone-900 mb-2.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Nguồn tham khảo đã kiểm chứng</span>
                </h4>
                <div className="space-y-2">
                  {landmark.sources.map((source, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-700 flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="font-semibold text-stone-900">{source.title}</div>
                        <div className="text-stone-600 mt-0.5">
                          Tác giả / Đơn vị: {source.authorOrOrg} {source.year && `(${source.year})`}
                        </div>
                        {source.notes && (
                          <div className="text-stone-500 italic mt-0.5">Ghi chú: {source.notes}</div>
                        )}
                      </div>
                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 flex items-center gap-1 text-[#8B1E1E] hover:underline font-medium"
                        >
                          <span>Liên kết</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3.5 bg-[#F2ECE1] border-t border-stone-200 flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-stone-600">
            Trấn {landmark.direction} Thăng Long • Hồ sơ Di sản Văn hóa số
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Quay lại bản đồ
          </button>
        </div>
      </div>
    </div>
  );
};
