import React from 'react';
import { LiteraryWork, Landmark } from '../types';
import { Bookmark, X, BookOpen, Trash2, ArrowRight } from 'lucide-react';

interface FavoritesModalProps {
  favoriteIds: string[];
  works: LiteraryWork[];
  landmarks: Landmark[];
  onClose: () => void;
  onOpenWork: (work: LiteraryWork) => void;
  onRemoveFavorite: (workId: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  favoriteIds,
  works,
  landmarks,
  onClose,
  onOpenWork,
  onRemoveFavorite,
}) => {
  const favoriteWorks = works.filter((w) => favoriteIds.includes(w.id));
  const landmarkMap = new Map(landmarks.map((l) => [l.id, l]));

  return (
    <div className="fixed inset-0 z-[650] flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#FAF7F0] rounded-2xl shadow-2xl border border-stone-300 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fav-title"
      >
        {/* Header */}
        <div className="px-5 py-4 bg-[#8B1E1E] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 fill-current text-amber-300" />
            <h3 id="fav-title" className="font-serif-title text-lg font-bold">
              Tác phẩm đã lưu yêu thích ({favoriteWorks.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {favoriteWorks.length === 0 ? (
            <div className="text-center py-12 text-stone-500 space-y-2">
              <Bookmark className="w-10 h-10 mx-auto text-stone-300" />
              <p className="font-medium text-sm">Chưa có tác phẩm nào được lưu</p>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                Nhấn vào biểu tượng dấu trang tại các thẻ tác phẩm để lưu lại vào bộ nhớ trình duyệt để đọc lại sau mà không cần đăng nhập.
              </p>
            </div>
          ) : (
            favoriteWorks.map((work) => {
              const landmark = landmarkMap.get(work.landmarkId);
              return (
                <div
                  key={work.id}
                  className="p-4 bg-white rounded-xl border border-stone-200 hover:border-[#8B1E1E]/40 shadow-xs transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                        {landmark?.name || work.landmarkId}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">
                        {work.genre}
                      </span>
                    </div>
                    <h4
                      onClick={() => onOpenWork(work)}
                      className="font-serif-title font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors cursor-pointer text-sm"
                    >
                      {work.title}
                    </h4>
                    <p className="text-xs text-stone-500">
                      Tác giả: {work.author} ({work.period})
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onOpenWork(work)}
                      className="p-2 bg-stone-100 hover:bg-[#8B1E1E] hover:text-white text-stone-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                      title="Mở bài đọc"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveFavorite(work.id)}
                      className="p-2 text-stone-400 hover:text-rose-600 rounded-lg transition-colors cursor-pointer"
                      title="Xóa khỏi mục yêu thích"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-[#F2ECE1] border-t border-stone-200 text-right shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
