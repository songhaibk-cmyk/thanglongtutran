import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'quiz-1',
    question: 'Địa danh nào trong Thăng Long Tứ Trấn trấn giữ ở phía Đông và gắn với truyền thuyết giúp vua Lý Thái Tổ định đô?',
    options: ['Đền Quán Thánh', 'Đền Bạch Mã', 'Đền Voi Phục', 'Đền Kim Liên'],
    correctAnswerIndex: 1,
    explanation:
      'Đền Bạch Mã (số 76 Hàng Buồm) là Trấn Đông của Thăng Long. Năm 1010, thần Long Đỗ hoá thành ngựa trắng (Bạch Mã) đi vòng quanh khu đất sụp lở, giúp vua Lý Thái Tổ đắp thành đứng vững.',
    knowledgeSource: 'Đại Việt Sử Ký Toàn Thư (Bản kỷ toàn thư) & Cục Di sản Văn hóa.',
    landmarkId: 'bach-ma'
  },
  {
    id: 'quiz-2',
    question: 'Tác phẩm văn học nào ghi chép chi tiết truyền thuyết thần Long Đỗ hiển linh khuất phục bùa chú của Cao Biền và thần Bạch Mã giúp vua Lý?',
    options: ['Lĩnh Nam Chích Quái', 'Việt Điện U Linh Tập', 'Truyền Kỳ Mạn Lục', 'Vũ Trung Tùy Bút'],
    correctAnswerIndex: 1,
    explanation:
      'Trong "Việt Điện U Linh Tập" soạn năm 1329 bởi Lý Tế Xuyên, thiên truyện "Quảng Lợi Bạch Mã Đại Vương" ghi chép đầy đủ thần tích của thần Long Đỗ và dấu tích ngựa trắng.',
    knowledgeSource: 'Việt Điện U Linh Tập (Lý Tế Xuyên, NXB Văn học).',
    landmarkId: 'bach-ma'
  },
  {
    id: 'quiz-3',
    question: 'Đền Voi Phục trấn giữ phương nào và thờ phụng vị anh hùng nào thời nhà Lý?',
    options: [
      'Trấn Bắc - Thờ Huyền Thiên Trấn Vũ',
      'Trấn Tây - Thờ Linh Lang Đại Vương (Hoàng tử Linh Lang)',
      'Trấn Nam - Thờ Thần Cao Sơn Đại Vương',
      'Trấn Đông - Thờ Thần Long Đỗ'
    ],
    correctAnswerIndex: 1,
    explanation:
      'Đền Voi Phục trấn giữ phía Tây (Trấn Tây) kinh thành Thăng Long, tọa lạc tại gò Long Thủ (Thủ Lệ), thờ Hoàng tử Linh Lang có công đánh dẹp giặc Tống xâm lược bên sông Như Nguyệt.',
    knowledgeSource: 'Hồ sơ Di tích quốc gia đặc biệt Thăng Long Tứ Trấn (2022).',
    landmarkId: 'voi-phuc'
  },
  {
    id: 'quiz-4',
    question: 'Vì sao ngôi đền ở gò Long Thủ lại mang tên dân gian thân thuộc là "Đền Voi Phục"?',
    options: [
      'Vì nơi đây từng là chuồng nuôi voi chiến của triều đình',
      'Vì voi chiến hung dữ khi nghe tiếng thét của hoàng tử Linh Lang đã quỳ phục xuống để ngài cưỡi xuất trận',
      'Vì địa thế ngọn đồi trông giống như một đàn voi nằm nghỉ',
      'Vì nhà vua tặng cho đền hai con voi thật sau ngày thắng trận'
    ],
    correctAnswerIndex: 1,
    explanation:
      'Theo thần tích, khi nhận voi chiến, Hoàng tử thét vang trời đất làm voi chiến quỳ phục rạp xuống để ngài bước lên xuất chinh. Vua Lý sau đó cho tạc tượng 2 thớt voi đá quỳ phục trước cửa đền.',
    knowledgeSource: 'Việt Điện U Linh Tập - Truyện Uy Linh Lang Đại Vương.',
    landmarkId: 'voi-phuc'
  },
  {
    id: 'quiz-5',
    question: 'Báu vật vô giá tại Đền Kim Liên (Trấn Nam) được dựng vào năm 1510 dưới triều Lê sơ là hiện vật nào?',
    options: [
      'Tấm bia đá "Cao Sơn Đại Vương thần từ bi minh" do Lê Tung soạn thảo',
      'Pho tượng đồng đen nặng gần 4 tấn',
      'Đôi ngựa đá thời Lý',
      'Bức hoành phi sơn son thếp vàng thời Tiền Lê'
    ],
    correctAnswerIndex: 0,
    explanation:
      'Báu vật tại Đền Kim Liên là tấm bia đá "Cao Sơn Đại Vương thần từ bi minh" cao hơn 2,4m do Đông các Đại học sĩ Lê Tung phụng soạn năm Canh Ngọ (1510), ghi lại công lao âm phù của thần giúp vua Lê Tương Dực.',
    knowledgeSource: 'Viện Nghiên cứu Hán Nôm & Di tích Đền Kim Liên.',
    landmarkId: 'kim-lien'
  },
  {
    id: 'quiz-6',
    question: 'Địa danh nào xuất hiện trong câu ca dao nổi tiếng: "Gió đưa cành trúc la đà / Tiếng chuông Trấn Vũ, canh gà Thọ Xương"?',
    options: ['Đền Bạch Mã', 'Đền Quán Thánh (Đền Trấn Vũ)', 'Đền Voi Phục', 'Đền Kim Liên'],
    correctAnswerIndex: 1,
    explanation:
      '"Tiếng chuông Trấn Vũ" trong bài ca dao nhắc trực tiếp đến tiếng chuông của Đền Quán Thánh (còn gọi là Đền Trấn Vũ), ngôi đền Trấn Bắc Thăng Long ngự bên hồ Tây và hồ Trúc Bạch.',
    knowledgeSource: 'Kho tàng ca dao người Việt (Nguyễn Xuân Kính - Phan Đăng Nhật).',
    landmarkId: 'quan-thanh'
  },
  {
    id: 'quiz-7',
    question: 'Pho tượng Huyền Thiên Trấn Vũ tại đền Quán Thánh được đúc bằng chất liệu gì và vào thời kỳ nào?',
    options: [
      'Bằng đá xanh nguyên khối thời Lý (1010)',
      'Bằng đồng đen nặng gần 4 tấn, đúc năm 1677 thời chúa Trịnh Tạc',
      'Bằng vàng ròng thời Trần (1258)',
      'Bằng gốm men lam thời Lê sơ (1428)'
    ],
    correctAnswerIndex: 1,
    explanation:
      'Pho tượng Đức Trấn Vũ bằng đồng đen cao 3,96m, nặng gần 4 tấn, do nghệ nhân Trùm Trọng cùng phường thợ Ngũ Xã đúc năm 1677 (thời vua Lê Hy Tông, chúa Trịnh Tạc). Đây là Bảo vật quốc gia của Việt Nam.',
    knowledgeSource: 'Hồ sơ Bảo vật quốc gia - Bộ Văn hóa, Thể thao và Du lịch.',
    landmarkId: 'quan-thanh'
  },
  {
    id: 'quiz-8',
    question: 'Vào năm nào Thăng Long Tứ Trấn (Bạch Mã, Voi Phục, Kim Liên, Quán Thánh) được Thủ tướng Chính phủ xếp hạng Di tích quốc gia đặc biệt?',
    options: ['Năm 1990', 'Năm 2010 (Đại lễ 1000 năm Thăng Long)', 'Năm 2022', 'Năm 2018'],
    correctAnswerIndex: 2,
    explanation:
      'Ngày 18/01/2022, Thủ tướng Chính phủ ban hành Quyết định số 93/QĐ-TTg chính thức xếp hạng Di tích lịch sử và kiến trúc nghệ thuật Thăng Long Tứ Trấn là Di tích quốc gia đặc biệt.',
    knowledgeSource: 'Quyết định số 93/QĐ-TTg ngày 18/01/2022 của Thủ tướng Chính phủ.',
    landmarkId: undefined
  }
];
