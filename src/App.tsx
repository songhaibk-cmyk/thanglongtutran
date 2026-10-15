import React, { useState, useEffect } from 'react';
import { LANDMARKS } from './data/landmarks';
import { LITERARY_WORKS } from './data/literaryWorks';
import { QUIZ_QUESTIONS } from './data/quizzes';
import { Landmark, LiteraryWork } from './types';

import { Navbar, ActiveView } from './components/Navbar';
import { InteractiveMap } from './components/InteractiveMap';
import { LandmarkQuickStrip } from './components/LandmarkQuickStrip';
import { LandmarkDetailModal } from './components/LandmarkDetailModal';
import { WorkReaderModal } from './components/WorkReaderModal';
import { LiteratureCatalog } from './components/LiteratureCatalog';
import { QuizSection } from './components/QuizSection';
import { FavoritesModal } from './components/FavoritesModal';
import { AboutModal } from './components/AboutModal';

import {
  Compass,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Bookmark,
  Landmark as LandmarkIcon,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('map');
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null);
  const [selectedWorkForReader, setSelectedWorkForReader] = useState<LiteraryWork | null>(null);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  // Local storage for explored landmarks
  const [exploredIds, setExploredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('thanglong_explored_landmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Local storage for favorite works
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('thanglong_favorite_works');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('thanglong_explored_landmarks', JSON.stringify(exploredIds));
    } catch {
      // ignore in incognito or restricted storage
    }
  }, [exploredIds]);

  useEffect(() => {
    try {
      localStorage.setItem('thanglong_favorite_works', JSON.stringify(favoriteIds));
    } catch {
      // ignore
    }
  }, [favoriteIds]);

  const handleToggleExplored = (landmarkId: string) => {
    setExploredIds((prev) =>
      prev.includes(landmarkId) ? prev.filter((id) => id !== landmarkId) : [...prev, landmarkId]
    );
  };

  const handleToggleFavorite = (workId: string) => {
    setFavoriteIds((prev) =>
      prev.includes(workId) ? prev.filter((id) => id !== workId) : [...prev, workId]
    );
  };

  const handleSelectLandmarkFromMap = (landmark: Landmark) => {
    setSelectedLandmark(landmark);
    // Mark as explored automatically when opened
    if (!exploredIds.includes(landmark.id)) {
      setExploredIds((prev) => [...prev, landmark.id]);
    }
  };

  const handleOpenWork = (work: LiteraryWork) => {
    setSelectedWorkForReader(work);
  };

  const handleLocateLandmarkOnMap = (landmarkId: string) => {
    const target = LANDMARKS.find((l) => l.id === landmarkId);
    if (target) {
      setActiveView('map');
      setSelectedLandmark(target);
      if (!exploredIds.includes(target.id)) {
        setExploredIds((prev) => [...prev, target.id]);
      }
    }
  };

  // Associated landmark for reader modal
  const readerLandmark = selectedWorkForReader
    ? LANDMARKS.find((l) => l.id === selectedWorkForReader.landmarkId)
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#2C241E]">
      {/* Top Navbar */}
      <Navbar
        activeView={activeView}
        onChangeView={setActiveView}
        exploredCount={exploredIds.length}
        totalLandmarks={LANDMARKS.length}
        favoritesCount={favoriteIds.length}
        onOpenFavorites={() => setShowFavoritesModal(true)}
        onOpenAbout={() => setShowAboutModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* VIEW 1: INTERACTIVE MAP & EXPLORER */}
        {activeView === 'map' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Introduction Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#8B1E1E] via-[#942828] to-[#611616] text-white p-6 sm:p-8 shadow-md border border-amber-900/30">
              <div className="relative z-10 max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold border border-amber-400/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Di tích Quốc gia Đặc biệt • Thăng Long Tứ Trấn
                </div>
                <h2 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight">
                  Khám phá Văn hóa & Văn học trên Bản đồ Tứ Trấn Hà Nội
                </h2>
                <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
                  Trải nghiệm tương tác kết nối bốn ngôi đền thiêng trấn giữ bốn phương Đông – Tây – Nam – Bắc của kinh thành Thăng Long với kho tàng thần tích, ca dao, thi ca và văn bia Hán Nôm ngàn năm tuổi.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs flex-wrap">
                  <span className="flex items-center gap-1 text-emerald-300 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Đã xác minh nguồn gốc học thuật
                  </span>
                  <span>•</span>
                  <span className="text-amber-200">
                    {exploredIds.length}/{LANDMARKS.length} địa danh đã khám phá
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="space-y-4">
              <InteractiveMap
                landmarks={LANDMARKS}
                selectedLandmarkId={selectedLandmark?.id || null}
                onSelectLandmark={handleSelectLandmarkFromMap}
                exploredIds={exploredIds}
              />

              {/* 4 Sacred Guardians Quick Strip */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-600 px-1">
                  <span className="font-semibold text-stone-800">
                    Chọn địa danh Tứ Trấn để xem hồ sơ lịch sử & văn học:
                  </span>
                  <span className="text-stone-500 hidden sm:inline">
                    (Nhấn vào thẻ hoặc ghim trên bản đồ)
                  </span>
                </div>
                <LandmarkQuickStrip
                  landmarks={LANDMARKS}
                  selectedLandmarkId={selectedLandmark?.id || null}
                  onSelectLandmark={handleSelectLandmarkFromMap}
                  exploredIds={exploredIds}
                />
              </div>
            </div>

            {/* Quick Literary Highlights Section */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#8B1E1E] flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Dấu ấn Văn học Tiêu biểu gắn với Tứ Trấn</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Các áng thi ca, văn bia và thần tích cổ truyền được trích lục từ thư tịch chính thống
                  </p>
                </div>
                <button
                  onClick={() => setActiveView('literature')}
                  className="flex items-center gap-1 text-xs font-semibold text-[#8B1E1E] hover:underline cursor-pointer"
                >
                  <span>Xem toàn bộ ({LITERARY_WORKS.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {LITERARY_WORKS.slice(0, 4).map((work) => {
                  const landmark = LANDMARKS.find((l) => l.id === work.landmarkId);
                  const isFav = favoriteIds.includes(work.id);

                  return (
                    <div
                      key={work.id}
                      className="bg-white rounded-xl p-4 border border-stone-200 hover:border-[#8B1E1E]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                              work.connectionType === 'direct'
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                : 'bg-amber-50 text-amber-900 border border-amber-200'
                            }`}
                          >
                            {work.connectionType === 'direct' ? 'Trực tiếp' : 'Cảm hứng'}
                          </span>

                          <button
                            onClick={() => handleToggleFavorite(work.id)}
                            className="p-1 text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                            title="Lưu yêu thích"
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-600 text-rose-600' : ''}`} />
                          </button>
                        </div>

                        <h4
                          onClick={() => handleOpenWork(work)}
                          className="font-serif-title font-bold text-sm text-stone-900 group-hover:text-[#8B1E1E] transition-colors cursor-pointer line-clamp-2"
                        >
                          {work.title}
                        </h4>

                        <p className="text-[11px] text-stone-500">
                          {work.author} • {landmark?.name}
                        </p>

                        <p className="text-xs text-stone-600 italic line-clamp-2 font-serif bg-stone-50 p-2 rounded">
                          "{work.content.bodyText}"
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-[10px] text-stone-400">{work.genre}</span>
                        <button
                          onClick={() => handleOpenWork(work)}
                          className="text-xs font-semibold text-[#8B1E1E] hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <span>Đọc tiếp</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Educational Banner for Students & Teachers */}
            <div className="p-5 bg-[#FAF3E6] rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-200 rounded-xl text-amber-900 shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-stone-900 text-sm sm:text-base">
                    Bạn đã sẵn sàng kiểm tra kiến thức về Thăng Long Tứ Trấn?
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Thử sức với bộ 8 câu hỏi trắc nghiệm đố vui có giải thích cặn kẽ và trích nguồn thư tịch.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveView('quiz')}
                className="shrink-0 px-4 py-2.5 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Làm bài đố vui ngay
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: LITERATURE CATALOG */}
        {activeView === 'literature' && (
          <div className="animate-fadeIn">
            <LiteratureCatalog
              works={LITERARY_WORKS}
              landmarks={LANDMARKS}
              favorites={favoriteIds}
              onToggleFavorite={handleToggleFavorite}
              onOpenWork={handleOpenWork}
              onLocateLandmarkOnMap={handleLocateLandmarkOnMap}
            />
          </div>
        )}

        {/* VIEW 3: MINI QUIZ */}
        {activeView === 'quiz' && (
          <div className="animate-fadeIn">
            <QuizSection
              questions={QUIZ_QUESTIONS}
              landmarks={LANDMARKS}
              onExploreLandmark={handleLocateLandmarkOnMap}
            />
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="mt-12 bg-[#F2ECE1] border-t border-stone-300 py-8 text-stone-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-serif-title text-sm font-bold text-[#8B1E1E]">
                Dấu ấn Thăng Long – Văn học trên bản đồ
              </div>
              <p className="text-stone-500 text-[11px]">
                Ứng dụng học tập phi thương mại phục vụ học sinh, giáo viên và người yêu mến lịch sử – văn hóa Hà Nội.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAboutModal(true)}
                className="text-[#8B1E1E] hover:underline cursor-pointer font-medium"
              >
                Tiêu chuẩn xác minh dữ liệu
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveView('map')}
                className="text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                Bản đồ Tứ Trấn
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveView('literature')}
                className="text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                Kho tàng tác phẩm
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 text-center sm:text-left text-[11px] text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              Nguồn tư liệu: Cục Di sản văn hóa, Viện Nghiên cứu Hán Nôm, Đại Việt Sử Ký Toàn Thư, Việt Điện U Linh Tập.
            </div>
            <div>
              Thăng Long Tứ Trấn • Di tích Quốc gia Đặc biệt (2022)
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: LANDMARK DETAIL MODAL */}
      {selectedLandmark && (
        <LandmarkDetailModal
          landmark={selectedLandmark}
          works={LITERARY_WORKS}
          onClose={() => setSelectedLandmark(null)}
          onOpenWork={handleOpenWork}
          isExplored={exploredIds.includes(selectedLandmark.id)}
          onToggleExplored={handleToggleExplored}
        />
      )}

      {/* MODAL 2: WORK READER MODAL */}
      {selectedWorkForReader && (
        <WorkReaderModal
          work={selectedWorkForReader}
          landmark={readerLandmark}
          onClose={() => setSelectedWorkForReader(null)}
          onBackToLandmark={
            readerLandmark
              ? () => {
                  setSelectedWorkForReader(null);
                  setSelectedLandmark(readerLandmark);
                }
              : undefined
          }
          isFavorite={favoriteIds.includes(selectedWorkForReader.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* MODAL 3: FAVORITES MODAL */}
      {showFavoritesModal && (
        <FavoritesModal
          favoriteIds={favoriteIds}
          works={LITERARY_WORKS}
          landmarks={LANDMARKS}
          onClose={() => setShowFavoritesModal(false)}
          onOpenWork={(work) => {
            setShowFavoritesModal(false);
            handleOpenWork(work);
          }}
          onRemoveFavorite={handleToggleFavorite}
        />
      )}

      {/* MODAL 4: ABOUT / METHODOLOGY MODAL */}
      {showAboutModal && <AboutModal onClose={() => setShowAboutModal(false)} />}
    </div>
  );
}
