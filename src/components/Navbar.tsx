import React from 'react';
import {
  Compass,
  BookOpen,
  HelpCircle,
  Bookmark,
  Info,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

export type ActiveView = 'map' | 'literature' | 'quiz';

interface NavbarProps {
  activeView: ActiveView;
  onChangeView: (view: ActiveView) => void;
  exploredCount: number;
  totalLandmarks: number;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onChangeView,
  exploredCount,
  totalLandmarks,
  favoritesCount,
  onOpenFavorites,
  onOpenAbout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (view: ActiveView) => {
    onChangeView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[500] bg-[#FAF7F0]/95 backdrop-blur-md border-b border-stone-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo & Branding */}
          <div
            onClick={() => handleNavClick('map')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#8B1E1E] to-[#6E1B1B] flex items-center justify-center text-amber-300 shadow-md border border-amber-500/30 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="font-serif-title font-bold text-lg sm:text-xl text-[#8B1E1E] tracking-tight leading-tight group-hover:text-[#A32323] transition-colors">
                Dấu ấn Thăng Long
              </h1>
              <p className="text-[11px] sm:text-xs text-stone-600 font-medium">
                Văn học trên bản đồ Tứ Trấn
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#F0EAE1] p-1.5 rounded-xl border border-stone-300/70 text-xs font-semibold">
            <button
              onClick={() => handleNavClick('map')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                activeView === 'map'
                  ? 'bg-[#8B1E1E] text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Bản đồ Tứ Trấn</span>
            </button>

            <button
              onClick={() => handleNavClick('literature')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                activeView === 'literature'
                  ? 'bg-[#8B1E1E] text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Kho tàng Văn học</span>
            </button>

            <button
              onClick={() => handleNavClick('quiz')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                activeView === 'quiz'
                  ? 'bg-[#8B1E1E] text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Đố vui nhanh</span>
            </button>
          </nav>

          {/* Action Items (Progress, Favorites, About) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Exploration Progress Badge */}
            <div
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#F4EFE6] border border-stone-200 rounded-xl text-xs"
              title={`${exploredCount}/${totalLandmarks} địa danh đã khám phá`}
            >
              <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Tiến độ: {exploredCount}/{totalLandmarks}</span>
              </div>
              <div className="w-16 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-300"
                  style={{ width: `${(exploredCount / totalLandmarks) * 100}%` }}
                />
              </div>
            </div>

            {/* Favorites Button */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 sm:px-3 sm:py-2 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 hover:text-[#8B1E1E] shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Xem danh sách tác phẩm đã lưu"
              aria-label="Tác phẩm yêu thích"
            >
              <Bookmark className="w-4 h-4 text-[#8B1E1E]" />
              <span className="hidden sm:inline">Đã lưu</span>
              {favoritesCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-[#8B1E1E] text-white text-[10px] font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* About / Methodology */}
            <button
              onClick={onOpenAbout}
              className="p-2 sm:px-3 sm:py-2 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 hover:text-[#8B1E1E] shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Giới thiệu & Thư mục nguồn"
              aria-label="Về ứng dụng"
            >
              <Info className="w-4 h-4 text-stone-600" />
              <span className="hidden sm:inline">Giới thiệu</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-xl cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-[#FAF7F0] border-b border-stone-200 space-y-2">
          {/* Mobile Progress */}
          <div className="flex items-center justify-between p-2.5 bg-stone-100 rounded-lg text-xs font-semibold text-stone-700">
            <span>Tiến độ khám phá Tứ Trấn:</span>
            <span className="text-emerald-700">{exploredCount}/{totalLandmarks} địa danh</span>
          </div>

          <div className="grid grid-cols-1 gap-1 pt-1">
            <button
              onClick={() => handleNavClick('map')}
              className={`flex items-center gap-2.5 w-full p-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeView === 'map'
                  ? 'bg-[#8B1E1E] text-white'
                  : 'text-stone-800 hover:bg-stone-100'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Bản đồ Tứ Trấn</span>
            </button>

            <button
              onClick={() => handleNavClick('literature')}
              className={`flex items-center gap-2.5 w-full p-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeView === 'literature'
                  ? 'bg-[#8B1E1E] text-white'
                  : 'text-stone-800 hover:bg-stone-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Kho tàng Văn học</span>
            </button>

            <button
              onClick={() => handleNavClick('quiz')}
              className={`flex items-center gap-2.5 w-full p-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeView === 'quiz'
                  ? 'bg-[#8B1E1E] text-white'
                  : 'text-stone-800 hover:bg-stone-100'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Đố vui nhanh</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
