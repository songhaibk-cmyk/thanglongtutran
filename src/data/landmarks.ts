import { Landmark } from '../types';

export const LANDMARKS: Landmark[] = [
  {
    id: 'bach-ma',
    name: 'Đền Bạch Mã',
    direction: 'Đông',
    titleDirection: 'Đông Trấn Thăng Long',
    deity: 'Thần Long Đỗ (Quảng Lợi Bạch Mã Đại Vương)',
    address: 'Số 76 phố Hàng Buồm, phường Hàng Buồm, quận Hoàn Kiếm, Hà Nội',
    coordinates: [21.03572, 105.85195],
    locationVerificationStatus: 'Đã xác minh chính xác qua Cục Di sản Văn hóa & Bản đồ số Hà Nội',
    roleSummary:
      'Trấn giữ phía Đông kinh thành Thăng Long, bảo hộ cửa ô Đông Hà và bến sông Hồng. Đây được xem là ngôi đền có niên đại khởi lập sớm nhất trong Tứ Trấn.',
    historicalOrigin:
      'Đền có nguồn gốc từ thế kỷ IX thời thuộc Đường, gắn với truyền thuyết thần Long Đỗ hiển linh khuất phục bùa phép của Tiết độ sứ Cao Biền. Đến năm Canh Tuất 1010, khi vua Lý Thái Tổ dời đô từ Hoa Lư về thành Đại La (Thăng Long), việc đắp thành nhiều lần bị sụp lở đất đá. Nhà vua cho lập đàn tế lễ trời đất thần linh; đêm ấy thần Long Đỗ hoá thành ngựa trắng (Bạch Mã) từ trong đền đi ra, đi vòng quanh khu đất đắp thành rồi biến mất. Nhà vua trông theo dấu chân ngựa để đắp thành lũy, nhờ thế thành đứng vững ngàn thu không đổ. Vua Lý bèn phong sắc thần là "Quảng Lợi Bạch Mã Đại Vương", lập đền thờ phụng tôn nghiêm.',
    architecture:
      'Kiến trúc mang đậm phong cách thời Nguyễn (được trùng tu lớn vào các năm 1839, 1893). Bố cục không gian hình chữ "Tam" gồm Tam quan, Tiền tế, Phương đình và Hậu cung. Điểm đặc sắc nhất là giàn giá chiêng chồng rường "con chồng đấu sen" chạm khắc tứ linh, hoa lá tinh xảo; giữa phương đình đặt tượng Bạch Mã (ngựa trắng) bằng gỗ quý sơn son thếp vàng uy nghiêm; cùng hệ thống 15 tấm bia đá cổ ghi lại sự tích đền và việc tu sửa qua các thời kỳ.',
    festivalAndCustoms:
      'Lễ hội đền Bạch Mã diễn ra vào ngày 12 và 13 tháng 2 âm lịch hàng năm. Lễ hội có nghi thức tế nghinh thần quy mô, rước kiệu hoa, múa rồng lân, dâng lễ vật trầu cau bánh chưng bánh giầy, cùng nghi thức tế lễ cổ truyền của nhân dân khu phố cổ Hoàn Kiếm nhằm tưởng nhớ công đức vị thần bảo hộ kinh thành.',
    didYouKnow: [
      'Đền Bạch Mã nằm ngay giữa lòng 36 phố phường sầm uất, là một trong số rất ít di tích cổ còn giữ được không gian kiến trúc gỗ bề thế nối liền phố cổ Hàng Buồm.',
      'Năm 2022, Di tích lịch sử và kiến trúc nghệ thuật Thăng Long Tứ Trấn (bao gồm đền Bạch Mã, Voi Phục, Kim Liên, Quán Thánh) đã chính thức được Thủ tướng Chính phủ xếp hạng Di tích quốc gia đặc biệt.',
      'Theo cổ thư, vị thần Long Đỗ tự xưng là "Thần cư trú đất Long Đỗ từ ngàn năm trước", thể hiện ý thức tín ngưỡng bản địa quật cường trước sự đồng hóa phương Bắc.'
    ],
    sources: [
      {
        title: 'Hồ sơ xếp hạng Di tích quốc gia đặc biệt Thăng Long Tứ Trấn',
        authorOrOrg: 'Cục Di sản văn hóa - Bộ Văn hóa, Thể thao và Du lịch',
        year: '2022',
        url: 'http://dsvh.gov.vn'
      },
      {
        title: 'Đại Việt Sử Ký Toàn Thư (Bản kỷ toàn thư - Kỷ nhà Lý)',
        authorOrOrg: 'Sử gia Ngô Sĩ Liên & Quốc sử viện triều Hậu Lê',
        year: '1479',
        notes: 'Chép việc Lý Thái Tổ dời đô và sự tích Thần Bạch Mã hiển linh trợ thành'
      },
      {
        title: 'Việt Điện U Linh Tập - Truyện Quảng Lợi Bạch Mã Đại Vương',
        authorOrOrg: 'Lý Tế Xuyên',
        year: '1329',
        notes: 'Ghi chép thần tích Long Đỗ và Bạch Mã trấn giữ kinh kỳ'
      }
    ],
    badgeColor: {
      bg: 'bg-amber-100',
      text: 'text-amber-900',
      border: 'border-amber-300',
      pinBg: '#D97706'
    },
    shortQuote: '“Vết chân thần mã định thành trì, ngàn năm Thăng Long vững như bàn thạch.”'
  },
  {
    id: 'voi-phuc',
    name: 'Đền Voi Phục',
    direction: 'Tây',
    titleDirection: 'Tây Trấn Thăng Long',
    deity: 'Linh Lang Đại Vương (Hoàng tử Linh Lang / Hoàng Chân)',
    address: 'Số 362 phố Kim Mã (trong khuôn viên công viên Thủ Lệ), phường Ngọc Khánh, quận Ba Đình, Hà Nội',
    coordinates: [21.03052, 105.81174],
    locationVerificationStatus: 'Đã xác minh chính xác qua Cục Di sản Văn hóa & Bản đồ số Hà Nội',
    roleSummary:
      'Trấn giữ phía Tây kinh thành Thăng Long xưa, bảo hộ vùng cửa ngõ phía Tây hướng về núi Ba Vì và xứ Đoài linh thiêng.',
    historicalOrigin:
      'Đền thờ Linh Lang Đại Vương, theo truyền thuyết dân gian và thần tích là hoàng tử con vua Lý Thái Tông (hoặc nhân vật tướng quân Lý Ngọc/Hoàng Chân trong kháng chiến chống quân Tống xâm lược trên phòng tuyến sông Như Nguyệt năm 1077). Thần tích kể rằng khi đất nước lâm nguy trước họa xâm lược phương Bắc, hoàng tử xin vua cha cấp cờ lệnh và thớt voi chiến. Hoàng tử thét lên một tiếng vang động đất trời, lập tức voi chiến quỳ phục rạp xuống để ngài cưỡi, ngài cầm cờ lệnh xông pha trận mạc đánh tan quân giặc. Sau chiến thắng hiển hách, ngài hóa về trời tại gò Long Thủ (đầu rồng). Vua thương tiếc nhớ công, bèn cho lập đền thờ ngay tại nơi ngài hóa, tạc tượng hai thớt voi quỳ phục trước cửa đền.',
    architecture:
      'Đền tọa lạc trên gò đất Long Thủ rợp bóng cây si, cây đa cổ thụ hàng trăm năm tuổi soi bóng xuống hồ Thủ Lệ. Lối vào có nghi môn tứ trụ uy nghi, đắp nổi đôi voi đá phục rạp hai bên tả hữu sân đền. Kiến trúc gồm Tiền tế, Trung đường và Hậu cung kết cấu theo lối chữ "Công" uy nghiêm. Trong đền còn lưu giữ tảng đá thiêng có vết lõm sâu – tương truyền là dấu tích nơi hoàng tử gối đầu nghỉ ngơi lúc hóa thân, cùng nhiều hoành phi, câu đối ca ngợi chiến công hiển hách triều Lý.',
    festivalAndCustoms:
      'Lễ hội đền Voi Phục diễn ra từ ngày mùng 9 đến 11 tháng 2 âm lịch. Đây là ngày hội lớn của vùng "Thập tam trại" (13 làng trại cổ phía Tây kinh thành). Lễ rước kiệu quy mô rực rỡ cờ lọng từ các đền thuộc hệ thống thờ thần Linh Lang cùng hội tụ về, có múa rồng, chèo thuyền tế lễ trên hồ Thủ Lệ, tạo nên bức tranh văn hóa dân gian đặc sắc của xứ Kinh kỳ.',
    didYouKnow: [
      'Trước đền có tạc tượng hai thớt voi đá quỳ gối, chính hình tượng này đã tạo nên tên gọi dân gian thân thương "Đền Voi Phục" (đền thờ nơi voi chiến quy phục hoàng tử anh hùng).',
      'Đền gắn bó mật thiết với lịch sử Thập tam trại (13 làng nông nghiệp, trồng hoa và thảo dược khai phá từ thời Lý phía Tây kinh thành Hà Nội).',
      'Hà Nội có hai ngôi đền Voi Phục: đền Voi Phục Thủ Lệ (Tây Trấn chính) và đền Voi Phục Thụy Khuê (còn gọi là đền Voi Phục Quán Voi Phục gần đền Quán Thánh).'
    ],
    sources: [
      {
        title: 'Hồ sơ xếp hạng Di tích quốc gia đặc biệt Thăng Long Tứ Trấn',
        authorOrOrg: 'Cục Di sản văn hóa - Bộ Văn hóa, Thể thao và Du lịch',
        year: '2022',
        url: 'http://dsvh.gov.vn'
      },
      {
        title: 'Việt Điện U Linh Tập - Truyện Uy Linh Lang Đại Vương',
        authorOrOrg: 'Lý Tế Xuyên',
        year: '1329',
        notes: 'Chép sự tích hoàng tử hiển linh phá giặc Tống và được phong thượng đẳng thần'
      },
      {
        title: 'Lịch sử Thăng Long - Hà Nội (Tập 1)',
        authorOrOrg: 'Ủy ban Khoa học Xã hội - Viện Sử học',
        year: '2010',
        notes: 'Nghiên cứu về hệ thống phòng thủ và tín ngưỡng Thập tam trại thời Lý'
      }
    ],
    badgeColor: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-900',
      border: 'border-emerald-300',
      pinBg: '#059669'
    },
    shortQuote: '“Cờ lệnh tung bay dẹp giặc dữ, voi quỳ gối phục rạng sơn hà.”'
  },
  {
    id: 'kim-lien',
    name: 'Đền Kim Liên',
    direction: 'Nam',
    titleDirection: 'Nam Trấn Thăng Long',
    deity: 'Thần Cao Sơn Đại Vương',
    address: 'Số 144 phố Kim Hoa (hoặc ngõ 176 phố Đình Đông), phường Phương Liên, quận Đống Đa, Hà Nội',
    coordinates: [21.00941, 105.83982],
    locationVerificationStatus: 'Đã xác minh chính xác qua Cục Di sản Văn hóa & Bản đồ số Hà Nội',
    roleSummary:
      'Trấn giữ phía Nam kinh thành Thăng Long, che chở vùng cửa ô Đồng Lầm, bảo trợ nông nghiệp và sự thái bình cho muôn dân.',
    historicalOrigin:
      'Đền thờ thần Cao Sơn Đại Vương – một trong 50 người con theo mẹ Âu Cơ lên núi trong truyền thuyết Lạc Long Quân - Âu Cơ, đồng thời là vị thượng đẳng thần núi Tản Viên có công phò tá dẹp loạn giữ yên bờ cõi. Sự kiện lịch sử gắn liền với đền diễn ra vào năm Cảnh Thống thứ 3 (1509): Vua Lê Tương Dực dấy quân khởi nghĩa tại Thanh Hóa nhằm lật đổ hôn quân Uy Mục. Khi hành quân ra Bắc, qua dãy núi Tây Đằng gặp đền thần Cao Sơn, vua cầu xin thần phù trợ. Nhờ thần hiển linh che chở, nghĩa quân tiến thẳng vào Thăng Long giành thắng lợi lập lại trật tự triều chính. Năm 1510, nhớ công ơn thần phù trợ, nhà vua ban lệnh trùng tu lập đền quy mô lộng lẫy ở phía Nam Thăng Long và sai Đông các Đại học sĩ Lê Tung soạn bài văn bia "Cao Sơn Đại Vương thần từ bi minh" khắc vào bia đá lớn.',
    architecture:
      'Đền Kim Liên được xây dựng trên một gò đất cao phía Nam Thăng Long, mang hình thế phong thủy trang nghiêm. Cổng đền gồm các bậc tam cấp bằng đá xanh dẫn lên sân gò, trước cổng có hai con nghê đá cổ thế kỷ XVII chầu phục. Toàn bộ công trình gồm Nghi môn, Đại bái và Hậu cung. Báu vật quý giá bậc nhất của đền là tấm bia đá "Cao Sơn Đại Vương thần từ bi minh" dựng năm Canh Ngọ 1510 bằng đá xanh nguyên khối cao hơn 2,4m, trán bia chạm khắc hình rồng mây tinh xảo triều Lê sơ.',
    festivalAndCustoms:
      'Lễ hội đền Kim Liên được tổ chức trang trọng vào ngày 15 và 16 tháng 3 âm lịch hàng năm. Nhân dân tổ chức lễ rước kiệu nước, tế lục vị, rước sắc phong cổ, biểu diễn võ cổ truyền, thi đấu cờ tướng và hát ca trù, tạo nên nét đẹp văn hóa truyền thống đặc sắc của cư dân cổ vùng Đống Đa - Kim Liên.',
    didYouKnow: [
      'Tấm bia đá "Cao Sơn Đại Vương thần từ bi minh" (năm 1510) tại đền Kim Liên là một trong những văn bia quý hiếm bậc nhất thời Lê sơ còn nguyên vẹn ở Thăng Long - Hà Nội.',
      'Khác với các trấn khác vốn dựng đền từ thời Lý, đền Kim Liên tuy phụng thờ vị thần cổ từ thời Hùng Vương nhưng được quy hoạch đưa vào hệ thống Tứ Trấn chính thức vào thời Lê sơ sau chiến dịch của vua Lê Tương Dực.',
      'Đền còn lưu giữ 39 đạo sắc phong của các triều đại phong kiến ban tặng cho thần Cao Sơn Đại Vương qua nhiều thế kỷ.'
    ],
    sources: [
      {
        title: 'Hồ sơ xếp hạng Di tích quốc gia đặc biệt Thăng Long Tứ Trấn',
        authorOrOrg: 'Cục Di sản văn hóa - Bộ Văn hóa, Thể thao và Du lịch',
        year: '2022',
        url: 'http://dsvh.gov.vn'
      },
      {
        title: 'Văn bia "Cao Sơn Đại Vương thần từ bi minh" (1510)',
        authorOrOrg: 'Đông các Đại học sĩ Lê Tung',
        year: '1510',
        notes: 'Bia đá nguyên bản hiện lưu giữ tại đền Kim Liên, ghi rõ nguồn gốc thần tích và sự kiện năm 1509'
      },
      {
        title: 'Từ điển Hà Nội - Địa danh',
        authorOrOrg: 'Bùi Thiết - Nhà xuất bản Hà Nội',
        year: '2000',
        notes: 'Khảo cứu làng Kim Liên và Đền Kim Liên trấn Nam Thăng Long'
      }
    ],
    badgeColor: {
      bg: 'bg-rose-100',
      text: 'text-rose-900',
      border: 'border-rose-300',
      pinBg: '#BE123C'
    },
    shortQuote: '“Bia đá ngàn thu ngợi thần Cao Sơn, linh khí non thiêng rạng phía Nam thành.”'
  },
  {
    id: 'quan-thanh',
    name: 'Đền Quán Thánh',
    direction: 'Bắc',
    titleDirection: 'Bắc Trấn Thăng Long',
    deity: 'Huyền Thiên Trấn Vũ Đại Đế',
    address: 'Số 190 phố Quán Thánh, góc đường Cổ Ngư xưa (nay là đường Thanh Niên), phường Quán Thánh, quận Ba Đình, Hà Nội',
    coordinates: [21.04381, 105.83923],
    locationVerificationStatus: 'Đã xác minh chính xác qua Cục Di sản Văn hóa & Bản đồ số Hà Nội',
    roleSummary:
      'Trấn giữ phía Bắc kinh thành Thăng Long, ngự bên bờ hồ Trúc Bạch và Hồ Tây rộng lớn, trừ tà diệt quái, bảo vệ bình yên phương Bắc cho muôn dân.',
    historicalOrigin:
      'Tương truyền đền có từ thời vua Lý Thái Tổ (1010), thờ thần Huyền Thiên Trấn Vũ – vị thần Đạo giáo cai quản phương Bắc trong vũ trụ quan cổ. Dân gian truyền tụng thần đã nhiều lần hiển linh giúp nhân dân Thăng Long trừ diệt thủy quái cáo chín đuôi ở Hồ Tây và yêu quỷ quấy nhiễu. Đến thời Hậu Lê (năm Vĩnh Trị thứ 2 – 1677), chúa Trịnh Tạc cho nghệ nhân tài hoa Trùm Trọng cùng phường đúc đồng Ngũ Xã đúc pho tượng Huyền Thiên Trấn Vũ bằng đồng đen khổng lồ trấn ngự trong đền. Bức tượng là đỉnh cao nghệ thuật đúc đồng dân tộc, khẳng định sức mạnh tâm linh bảo vệ kinh thành.',
    architecture:
      'Đền có quy mô bề thế nhìn ra hồ Tây lộng gió, cổng tam quan xây bằng gạch với hai tầng lầu mái uốn cong rêu phong cổ kính. Bên trong gồm Tiền bái, Trung bái và Hậu cung. Báu vật vô giá của đền là pho tượng Trấn Vũ bằng đồng đen cao 3,96m, nặng gần 4 tấn, chu vi 8m. Tượng ngồi trang nghiêm, tóc xõa sau lưng, chân trần, tay trái bắt quyết, tay phải chống kiếm thần có rắn quấn quanh và chống trên lưng rùa (hình tượng Quy - Xà linh thiêng). Pho tượng đã được công nhận là Bảo vật quốc gia của Việt Nam.',
    festivalAndCustoms:
      'Lễ hội đền Quán Thánh được tổ chức vào ngày 3 tháng 3 âm lịch hàng năm (ngày sinh của Đức Trấn Vũ theo tín ngưỡng). Nhân dân thập phương về dự lễ dâng hương, tụng kinh cầu bình an cho quốc thái dân an, chiêm bái pho tượng đồng đen và tham gia các hoạt động văn nghệ dân gian truyền thống bên hồ Tây.',
    didYouKnow: [
      'Pho tượng đồng đen Huyền Thiên Trấn Vũ nặng gần 4 tấn tại đền Quán Thánh là một trong những kiệt tác đúc đồng lớn nhất và tinh xảo nhất Đông Nam Á thời bấy giờ, đúc hoàn toàn thủ công vào năm 1677.',
      'Ở góc nhà Bái đường có đặt một bức tượng nhỏ tạc cụ Trùm Trọng – người nghệ nhân trưởng phường Ngũ Xã đã chỉ huy đúc nên pho tượng đồng Huyền Thiên Trấn Vũ vĩ đại.',
      'Tiếng chuông đền Quán Thánh xưa kia cùng tiếng gà điểm canh gác Thọ Xương đã đi vào câu ca dao ngàn đời lắng đọng tâm hồn người Việt: "Tiếng chuông Trấn Vũ, canh gà Thọ Xương".'
    ],
    sources: [
      {
        title: 'Quyết định công nhận Tượng Huyền Thiên Trấn Vũ là Bảo vật quốc gia',
        authorOrOrg: 'Thủ tướng Chính phủ - Bộ Văn hóa, Thể thao và Du lịch',
        year: '2016',
        url: 'http://dsvh.gov.vn'
      },
      {
        title: 'Tây Hồ chí & Thăng Long cổ tích khảo',
        authorOrOrg: 'Các danh sĩ Hán Nôm Thăng Long',
        year: 'Thế kỷ XIX',
        notes: 'Ghi chép thần tích Huyền Thiên Trấn Vũ trừ quái vật Hồ Tây'
      },
      {
        title: 'Hồ Tây - Lịch sử, văn hóa và thắng cảnh',
        authorOrOrg: 'Nhà xuất bản Hà Nội',
        year: '2010',
        notes: 'Tập khảo luận về đền Quán Thánh và cụm di tích ven hồ Tây'
      }
    ],
    badgeColor: {
      bg: 'bg-sky-100',
      text: 'text-sky-900',
      border: 'border-sky-300',
      pinBg: '#0284C7'
    },
    shortQuote: '“Tiếng chuông Trấn Vũ, canh gà Thọ Xương - hồn thiêng sông núi lắng giữa ngàn sương.”'
  }
];
