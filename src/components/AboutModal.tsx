import React from 'react';
import { X, ShieldCheck, Database, BookOpen, MapPin, Sparkles, School } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[650] flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[88vh] flex flex-col bg-[#FAF7F0] rounded-2xl shadow-2xl border border-stone-300 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-title"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#8B1E1E] to-[#6E1B1B] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <School className="w-5 h-5 text-amber-300" />
            <h3 id="about-title" className="font-serif-title text-lg font-bold">
              Giới thiệu & Phương pháp Xác minh Dữ liệu
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 text-sm text-stone-800 leading-relaxed">
          <div>
            <h4 className="font-serif-title font-bold text-base text-[#8B1E1E] mb-1">
              1. Mục tiêu & Sứ mệnh Ứng dụng
            </h4>
            <p className="text-stone-700 text-xs sm:text-sm">
              Ứng dụng <strong>“Dấu ấn Thăng Long – Văn học trên bản đồ”</strong> được thiết kế như một không gian học tập số tương tác dành cho học sinh, giáo viên Ngữ văn & Lịch sử, cùng những người yêu mến văn hiến ngàn năm Thăng Long - Hà Nội. Ứng dụng kết nối chặt chẽ giữa <strong>không gian địa lý (Thăng Long Tứ Trấn)</strong> với <strong>kho tàng tác phẩm văn học</strong> (ca dao, thần tích truyền kỳ, văn bia Hán Nôm và thi ca).
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
            <h4 className="font-serif-title font-bold text-sm text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>2. Nguyên tắc Học thuật & Nguồn dữ liệu</span>
            </h4>
            <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
              <li>
                <strong>Không bịa đặt tác phẩm:</strong> Mọi tác phẩm đều có xuất xứ từ thư tịch cổ chính thống (<em>Đại Việt Sử Ký Toàn Thư</em>, <em>Việt Điện U Linh Tập</em>, <em>Lĩnh Nam Chích Quái</em>, <em>Vũ Trung Tùy Bút</em>, Văn bia Hán Nôm 1510 của Lê Tung, Tổng tập Ca dao Việt Nam).
              </li>
              <li>
                <strong>Phân định rạch ròi 2 cấp độ liên hệ:</strong>
                <ul className="pl-5 space-y-1 mt-1 list-circle">
                  <li>
                    <span className="text-emerald-700 font-semibold">Liên hệ trực tiếp:</span> Được văn bản cổ thư ghi chép rõ tên đền, tên thần hoặc vị trí trấn giữ.
                  </li>
                  <li>
                    <span className="text-amber-800 font-semibold">Liên hệ theo chủ đề & cảm hứng:</span> Phản ánh bối cảnh văn hóa, tín ngưỡng hoặc vùng đất Thăng Long xưa.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tọa độ thực địa:</strong> Toàn bộ 4 tọa độ đền đã được đối chiếu thực tế và thẩm định theo hồ sơ Di tích quốc gia đặc biệt (Bộ VHTTDL xếp hạng năm 2022).
              </li>
            </ul>
          </div>

          <div className="p-4 bg-stone-100 rounded-xl border border-stone-200 space-y-2">
            <h4 className="font-serif-title font-bold text-sm text-stone-900 flex items-center gap-2">
              <Database className="w-4 h-4 text-[#8B1E1E]" />
              <span>3. Cấu trúc tách biệt & Hướng dẫn Cập nhật cho Giáo viên</span>
            </h4>
            <p className="text-xs text-stone-700">
              Toàn bộ dữ liệu được chuẩn hóa tại thư mục <code className="bg-white px-1.5 py-0.5 rounded border border-stone-300 font-mono">/src/data/</code>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
              <div className="p-2 bg-white rounded border border-stone-200">
                <code>landmarks.ts</code>
                <p className="text-stone-500 mt-0.5">Thông tin 4 ngôi đền, tọa độ, kiến trúc, lễ hội</p>
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <code>literaryWorks.ts</code>
                <p className="text-stone-500 mt-0.5">Danh mục tác phẩm, văn bản, phân tích văn học</p>
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <code>quizzes.ts</code>
                <p className="text-stone-500 mt-0.5">Bộ câu hỏi trắc nghiệm đố vui và đáp án</p>
              </div>
            </div>
            <p className="text-[11px] text-stone-600 italic">
              * Giáo viên có thể thêm các tác phẩm văn học mới bằng cách thêm một đối tượng vào mảng <code>LITERARY_WORKS</code> mà không cần lập trình lại giao diện.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F2ECE1] border-t border-stone-200 text-right shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Đã hiểu & Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};
