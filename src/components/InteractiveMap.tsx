import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Landmark } from '../types';
import { Compass, ExternalLink, MapPin, CheckCircle2, Navigation } from 'lucide-react';

interface InteractiveMapProps {
  landmarks: Landmark[];
  selectedLandmarkId: string | null;
  onSelectLandmark: (landmark: Landmark) => void;
  exploredIds: string[];
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  landmarks,
  selectedLandmarkId,
  onSelectLandmark,
  exploredIds,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const HANOI_TU_TRAN_CENTER: [number, number] = [21.032, 105.836];
  const DEFAULT_ZOOM = 13;

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // already initialized

    // Initialize Leaflet map
    const map = L.map(mapContainerRef.current, {
      center: HANOI_TU_TRAN_CENTER,
      zoom: DEFAULT_ZOOM,
      zoomControl: false,
      scrollWheelZoom: true,
      minZoom: 11,
      maxZoom: 18,
    });

    // Add Zoom control at top-right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Add OpenStreetMap CartoDB Positron / OSM standard tiles (no API key required, reliable)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update or render markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear previous markers
    Object.values(markersRef.current).forEach((m) => m.remove());
    markersRef.current = {};

    landmarks.forEach((landmark) => {
      const isSelected = landmark.id === selectedLandmarkId;
      const isExplored = exploredIds.includes(landmark.id);

      // Create a distinctive custom HTML icon for each sacred guardian
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker-wrapper',
        html: `
          <div class="relative flex flex-col items-center group cursor-pointer" style="transform: translate(-50%, -100%);">
            <div class="px-2.5 py-1 mb-1 rounded-full text-xs font-bold tracking-wide shadow-md whitespace-nowrap transition-all duration-200 border ${
              isSelected
                ? 'bg-[#8B1E1E] text-white border-amber-300 ring-2 ring-amber-400 scale-105'
                : 'bg-white text-[#2C241E] border-stone-300 hover:border-[#8B1E1E]'
            }">
              <span class="inline-block w-2 h-2 rounded-full mr-1.5" style="background-color: ${landmark.badgeColor.pinBg};"></span>
              <span>${landmark.name}</span>
              <span class="text-[10px] ml-1 opacity-80 font-normal">(${landmark.direction})</span>
            </div>
            <div class="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl transition-transform duration-200 ${
              isSelected ? 'scale-125 ring-4 ring-amber-300' : 'group-hover:scale-110'
            }" style="background: radial-gradient(circle at 35% 35%, #fff 0%, ${landmark.badgeColor.pinBg} 60%, #1f2937 100%);">
              <span>${landmark.direction}</span>
              ${
                isExplored
                  ? `<div class="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-black">✓</div>`
                  : ''
              }
            </div>
            <div class="w-1.5 h-2 bg-stone-700 mx-auto -mt-0.5 rounded-b-sm"></div>
          </div>
        `,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });

      const marker = L.marker(landmark.coordinates, { icon: customIcon });

      marker.on('click', () => {
        onSelectLandmark(landmark);
      });

      marker.addTo(map);
      markersRef.current[landmark.id] = marker;
    });
  }, [landmarks, selectedLandmarkId, exploredIds, onSelectLandmark]);

  // Center on selected landmark if changed
  useEffect(() => {
    if (!selectedLandmarkId || !mapInstanceRef.current) return;
    const target = landmarks.find((l) => l.id === selectedLandmarkId);
    if (target) {
      mapInstanceRef.current.flyTo(target.coordinates, 15, {
        duration: 1.2,
      });
    }
  }, [selectedLandmarkId, landmarks]);

  const handleResetView = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo(HANOI_TU_TRAN_CENTER, DEFAULT_ZOOM, {
      duration: 1.0,
    });
  };

  return (
    <div className="relative w-full h-full min-h-[460px] md:min-h-[560px] rounded-2xl overflow-hidden border border-stone-200/80 shadow-lg bg-[#F5EFEB]">
      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full" style={{ minHeight: '460px' }} />

      {/* Floating Header Badge */}
      <div className="absolute top-4 left-4 z-[400] max-w-[85%] sm:max-w-md bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-stone-200 shadow-md">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-100 rounded-lg text-amber-800">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif-title text-sm font-bold text-[#8B1E1E]">Bản đồ Thăng Long Tứ Trấn</h3>
            <p className="text-[11px] text-stone-600 leading-tight">
              Nhấn vào ghim đền để mở nội dung lịch sử & văn học
            </p>
          </div>
        </div>
      </div>

      {/* Reset Map Button */}
      <div className="absolute bottom-5 right-4 z-[400] flex flex-col gap-2">
        <button
          onClick={handleResetView}
          className="flex items-center gap-1.5 px-3 py-2 bg-white/95 hover:bg-stone-50 active:scale-95 text-stone-800 text-xs font-medium rounded-xl shadow-md border border-stone-200 transition-all cursor-pointer"
          title="Xem toàn cảnh Tứ Trấn Hà Nội"
          aria-label="Xem toàn cảnh Thăng Long Tứ Trấn"
        >
          <Navigation className="w-3.5 h-3.5 text-[#8B1E1E]" />
          <span>Về tâm Tứ Trấn</span>
        </button>
      </div>

      {/* Location Accuracy Badge */}
      <div className="absolute bottom-3 left-4 z-[400] hidden sm:flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-stone-200 text-[10px] text-stone-600 shadow-sm">
        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
        <span>Tọa độ đã xác minh theo Cục Di sản Văn hóa</span>
      </div>
    </div>
  );
};
