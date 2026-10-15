import React, { useState, useMemo } from 'react';
import { LiteraryWork, Landmark, LiteraryGenre, LiteraryPeriod, ConnectionType } from '../types';
import {
  Search,
  Filter,
  BookOpen,
  Bookmark,
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  RotateCcw
} from 'lucide-react';

interface LiteratureCatalogProps {
  works: LiteraryWork[];
  landmarks: Landmark[];
  favorites: string[];
  onToggleFavorite: (workId: string) => void;
  onOpenWork: (work: LiteraryWork) => void;
  onLocateLandmarkOnMap: (landmarkId: string) => void;
}

export const LiteratureCatalog: React.FC<LiteratureCatalogProps> = ({
  works,
  landmarks,
  favorites,
  onToggleFavorite,
  onOpenWork,
  onLocateLandmarkOnMap,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLandmarkFilter, setSelectedLandmarkFilter] = useState<string>('all');
  const [selectedGenreFilter, setSelectedGenreFilter] = useState<string>('all');
  const [selectedPeriodFilter, setSelectedPeriodFilter] = useState<string>('all');
  const [selectedConnectionFilter, setSelectedConnectionFilter] = useState<string>('all');

  const landmarkMap = useMemo(() => {
    const map = new Map<string, Landmark>();
    landmarks.forEach((l) => map.set(l.id, l));
    return map;
  }, [landmarks]);

  const genres: LiteraryGenre[] = [
    'Ca dao - Dân ca',
    'Thần tích - Truyền kỳ',
    'Văn bia Hán Nôm',
    'Thơ trung đại',
    'Tùy bút - Ghi chép',
  ];

  const periods: LiteraryPeriod[] = [
    'Dân gian truyền khẩu',
    'Thời Lý - Trần',
    'Thời Lê - Tây Sơn',
    'Thời Nguyễn',
  ];

  // Filtering
  const filteredWorks = useMemo(() => {
    return works.filter((w) => {
      // Landmark filter
      if (selectedLandmarkFilter !== 'all' && w.landmarkId !== selectedLandmarkFilter) {
        return false;
      }
      // Genre filter
      if (selectedGenreFilter !== 'all' && w.genre !== selectedGenreFilter) {
        return false;
      }
      // Period filter
      if (selectedPeriodFilter !== 'all' && w.period !== selectedPeriodFilter) {
        return false;
      }
      // Connection filter
      if (selectedConnectionFilter !== 'all' && w.connectionType !== selectedConnectionFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const landmarkName = landmarkMap.get(w.landmarkId)?.name.toLowerCase() || '';
        const matchTitle = w.title.toLowerCase().includes(q);
        const matchAuthor = w.author.toLowerCase().includes(q);
        const matchContent = w.content.bodyText.toLowerCase().includes(q);
        const matchExplanation = w.connectionExplanation.toLowerCase().includes(q);
        const matchLandmark = landmarkName.includes(q);
        if (!matchTitle && !matchAuthor && !matchContent && !matchExplanation && !matchLandmark) {
          return false;
        }
      }
      return true;
    });
  }, [
    works,
    selectedLandmarkFilter,
    selectedGenreFilter,
    selectedPeriodFilter,
    selectedConnectionFilter,
    searchQuery,
    landmarkMap,
  ]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLandmarkFilter('all');
    setSelectedGenreFilter('all');
    setSelectedPeriodFilter('all');
    setSelectedConnectionFilter('all');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedLandmarkFilter !== 'all' ||
    selectedGenreFilter !== 'all' ||
    selectedPeriodFilter !== 'all' ||
    selectedConnectionFilter !== 'all';

  return (
    <div className="space-y-6">
      {/* Hero Banner for Literature */}
      <div className="bg-gradient-to-r from-[#8B1E1E] to-[#6E1B1B] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-amber-900/30">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold mb-3 border border-amber-400/30">
            <BookOpen className="w-3.5 h-3.5" />
            Kho tàng Văn hiến Thăng Long
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Danh mục Tác phẩm Văn học trên Bản đồ
          </h2>
          <p className="text-amber-100/90 text-sm sm:text-base mt-2 leading-relaxed">
            Tra cứu văn bản ca dao, thần tích, văn bia Hán Nôm và thi ca gắn bó mật thiết với Thăng Long Tứ Trấn qua hàng nghìn năm lịch sử. Mọi tác phẩm đều được xác minh xuất xứ rõ ràng.
          </p>
        </div>
      </div>

      {/* Filter and Search Box */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm theo tên tác phẩm, tác giả (Lý Tế Xuyên, Lê Tung...), trích đoạn..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/40 focus:border-[#8B1E1E] bg-[#FAF8F5]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Filter Selectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {/* Landmark Filter */}
          <div>
            <label className="block text-stone-600 font-semibold mb-1">Địa danh Tứ Trấn:</label>
            <select
              value={selectedLandmarkFilter}
              onChange={(e) => setSelectedLandmarkFilter(e.target.value)}
              className="w-full p-2 rounded-lg border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#8B1E1E] cursor-pointer"
            >
              <option value="all">Tất cả Tứ Trấn</option>
              {landmarks.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name} ({l.direction})
                </option>
              ))}
            </select>
          </div>

          {/* Genre Filter */}
          <div>
            <label className="block text-stone-600 font-semibold mb-1">Thể loại văn học:</label>
            <select
              value={selectedGenreFilter}
              onChange={(e) => setSelectedGenreFilter(e.target.value)}
              className="w-full p-2 rounded-lg border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#8B1E1E] cursor-pointer"
            >
              <option value="all">Tất cả thể loại</option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Period Filter */}
          <div>
            <label className="block text-stone-600 font-semibold mb-1">Thời kỳ lịch sử:</label>
            <select
              value={selectedPeriodFilter}
              onChange={(e) => setSelectedPeriodFilter(e.target.value)}
              className="w-full p-2 rounded-lg border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#8B1E1E] cursor-pointer"
            >
              <option value="all">Tất cả thời kỳ</option>
              {periods.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Connection Type Filter */}
          <div>
            <label className="block text-stone-600 font-semibold mb-1">Mức độ liên hệ:</label>
            <select
              value={selectedConnectionFilter}
              onChange={(e) => setSelectedConnectionFilter(e.target.value)}
              className="w-full p-2 rounded-lg border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#8B1E1E] cursor-pointer"
            >
              <option value="all">Tất cả liên hệ</option>
              <option value="direct">Liên hệ trực tiếp (xác thực)</option>
              <option value="thematic">Chủ đề & cảm hứng</option>
            </select>
          </div>
        </div>

        {/* Filter Results Status */}
        <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
          <span className="text-stone-600">
            Hiển thị <strong className="text-stone-900">{filteredWorks.length}</strong> trên tổng số {works.length} tác phẩm
          </span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-[#8B1E1E] hover:underline cursor-pointer font-medium"
            >
              <RotateCcw className="w-3 h-3" />
              Đặt lại bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Literary Works Grid */}
      {filteredWorks.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-stone-300 p-8 space-y-3">
          <BookOpen className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="font-serif-title text-base font-bold text-stone-700">
            Không tìm thấy tác phẩm phù hợp với bộ lọc
          </h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Hệ thống tuân thủ nguyên tắc không bịa đặt tác phẩm để làm đầy trang. Thử bỏ chọn bớt tiêu chí lọc hoặc tìm kiếm bằng từ khóa khác.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-[#8B1E1E] text-white text-xs font-semibold rounded-lg hover:bg-[#A32323] cursor-pointer inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Xem toàn bộ tác phẩm
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredWorks.map((work) => {
            const landmark = landmarkMap.get(work.landmarkId);
            const isFav = favorites.includes(work.id);

            return (
              <div
                key={work.id}
                className="bg-white rounded-2xl border border-stone-200/90 hover:border-[#8B1E1E]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5 space-y-3">
                  {/* Top Badges */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
                          work.connectionType === 'direct'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-amber-50 text-amber-900 border-amber-200'
                        }`}
                      >
                        {work.connectionType === 'direct' ? 'Liên hệ trực tiếp' : 'Chủ đề & Cảm hứng'}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-medium">
                        {work.genre}
                      </span>
                    </div>

                    <button
                      onClick={() => onToggleFavorite(work.id)}
                      className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                        isFav
                          ? 'bg-rose-50 border-rose-200 text-rose-600'
                          : 'bg-stone-50 border-stone-200 text-stone-400 hover:text-stone-700'
                      }`}
                      title={isFav ? 'Bỏ lưu' : 'Lưu tác phẩm'}
                    >
                      <Bookmark className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Title & Author */}
                  <div>
                    <h3
                      onClick={() => onOpenWork(work)}
                      className="font-serif-title text-lg font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors cursor-pointer"
                    >
                      {work.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Tác giả: <strong className="text-stone-800 font-semibold">{work.author}</strong> • {work.period}
                    </p>
                  </div>

                  {/* Associated Landmark indicator */}
                  {landmark && (
                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#FAF7F0] border border-amber-100">
                      <div className="flex items-center gap-1.5 text-stone-700">
                        <Compass className="w-3.5 h-3.5 text-[#8B1E1E]" />
                        <span>{landmark.name} ({landmark.titleDirection})</span>
                      </div>
                      <button
                        onClick={() => onLocateLandmarkOnMap(landmark.id)}
                        className="text-[11px] text-[#8B1E1E] hover:underline cursor-pointer font-medium flex items-center gap-0.5"
                        title="Đến địa danh trên bản đồ"
                      >
                        <span>Xem vị trí</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {/* Excerpt preview */}
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-700 italic line-clamp-3 font-serif">
                    "{work.content.bodyText}"
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 py-3 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    {work.isPublicDomain ? 'Phạm vi công cộng' : 'Trích đoạn khảo cứu'}
                  </span>
                  <button
                    onClick={() => onOpenWork(work)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-xs font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
                  >
                    <span>Đọc & Phân tích</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
