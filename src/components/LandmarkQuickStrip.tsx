import React from 'react';
import { Landmark } from '../types';
import { Compass, CheckCircle2, ChevronRight } from 'lucide-react';

interface LandmarkQuickStripProps {
  landmarks: Landmark[];
  selectedLandmarkId: string | null;
  onSelectLandmark: (landmark: Landmark) => void;
  exploredIds: string[];
}

export const LandmarkQuickStrip: React.FC<LandmarkQuickStripProps> = ({
  landmarks,
  selectedLandmarkId,
  onSelectLandmark,
  exploredIds,
}) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {landmarks.map((landmark) => {
        const isSelected = landmark.id === selectedLandmarkId;
        const isExplored = exploredIds.includes(landmark.id);

        return (
          <button
            key={landmark.id}
            onClick={() => onSelectLandmark(landmark)}
            className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between relative group ${
              isSelected
                ? 'bg-gradient-to-br from-[#8B1E1E] to-[#6E1B1B] text-white border-amber-400 shadow-md ring-2 ring-amber-300/40'
                : 'bg-white hover:bg-[#FAF7F0] border-stone-200 hover:border-[#8B1E1E]/40 text-stone-900 shadow-xs'
            }`}
          >
            {/* Top row */}
            <div className="flex items-center justify-between w-full mb-2">
              <span
                className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  isSelected
                    ? 'bg-white/20 text-amber-200'
                    : 'bg-stone-100 text-stone-700'
                }`}
              >
                Trấn {landmark.direction}
              </span>

              {isExplored && (
                <span
                  className={`inline-flex items-center gap-1 text-[10px] font-semibold ${
                    isSelected ? 'text-emerald-300' : 'text-emerald-600'
                  }`}
                  title="Đã khám phá"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Đã học</span>
                </span>
              )}
            </div>

            {/* Title & Deity */}
            <div>
              <h4
                className={`font-serif-title font-bold text-sm sm:text-base leading-tight ${
                  isSelected ? 'text-white' : 'text-stone-900 group-hover:text-[#8B1E1E]'
                }`}
              >
                {landmark.name}
              </h4>
              <p
                className={`text-[11px] mt-1 line-clamp-1 ${
                  isSelected ? 'text-amber-100' : 'text-stone-500'
                }`}
              >
                {landmark.deity}
              </p>
            </div>

            {/* Bottom prompt */}
            <div
              className={`mt-3 pt-2 border-t flex items-center justify-between text-[11px] font-medium ${
                isSelected
                  ? 'border-white/20 text-amber-200'
                  : 'border-stone-100 text-[#8B1E1E]'
              }`}
            >
              <span>Xem chi tiết</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        );
      })}
    </div>
  );
};
