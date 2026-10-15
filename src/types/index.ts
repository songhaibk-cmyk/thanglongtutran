export type Direction = 'Đông' | 'Tây' | 'Nam' | 'Bắc';

export type LandmarkId = 'bach-ma' | 'voi-phuc' | 'kim-lien' | 'quan-thanh';

export type ConnectionType = 'direct' | 'thematic';

export interface VerifiedSource {
  title: string;
  url?: string;
  authorOrOrg: string;
  year?: string;
  notes?: string;
}

export interface Landmark {
  id: LandmarkId;
  name: string;
  direction: Direction;
  titleDirection: string;
  deity: string;
  address: string;
  coordinates: [number, number]; // [lat, lng]
  locationVerificationStatus: 'Đã xác minh chính xác qua Cục Di sản Văn hóa & Bản đồ số Hà Nội' | 'Gần đúng';
  roleSummary: string;
  historicalOrigin: string;
  architecture: string;
  festivalAndCustoms: string;
  didYouKnow: string[];
  sources: VerifiedSource[];
  badgeColor: {
    bg: string;
    text: string;
    border: string;
    pinBg: string;
  };
  shortQuote: string;
}

export type LiteraryGenre =
  | 'Ca dao - Dân ca'
  | 'Thần tích - Truyền kỳ'
  | 'Văn bia Hán Nôm'
  | 'Thơ trung đại'
  | 'Tùy bút - Ghi chép'
  | 'Văn học hiện đại';

export type LiteraryPeriod =
  | 'Dân gian truyền khẩu'
  | 'Thời Lý - Trần'
  | 'Thời Lê - Tây Sơn'
  | 'Thời Nguyễn'
  | 'Thời kỳ Hiện đại';

export interface LiteraryWork {
  id: string;
  title: string;
  author: string;
  authorLifespan?: string;
  genre: LiteraryGenre;
  period: LiteraryPeriod;
  landmarkId: LandmarkId;
  connectionType: ConnectionType; // 'direct' | 'thematic'
  connectionExplanation: string;
  isPublicDomain: boolean;
  content: {
    originalText?: string; // Hán / Nôm nếu có
    transcription?: string; // Phiên âm Hán Việt nếu có
    bodyText: string; // Bản dịch thơ / văn xuôi hoặc toàn văn
    isExcerpt?: boolean;
    excerptNotice?: string;
  };
  copyrightNotice?: string;
  externalReadingUrl?: string;
  literaryAnalysis: {
    historicalContext: string;
    themeAndTopic: string;
    artisticImagery: string;
    contentAndArtValue: string;
  };
  studyQuestions: string[];
  sources: VerifiedSource[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  knowledgeSource: string;
  landmarkId?: LandmarkId;
}
