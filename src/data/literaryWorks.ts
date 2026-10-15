import { LiteraryWork } from '../types';

export const LITERARY_WORKS: LiteraryWork[] = [
  // --- ĐỀN BẠCH MÃ (TRẤN ĐÔNG) ---
  {
    id: 'viet-dien-u-linh-bach-ma',
    title: 'Truyện Quảng Lợi Bạch Mã Đại Vương',
    author: 'Lý Tế Xuyên',
    authorLifespan: 'Thế kỷ XIV (triều Trần)',
    genre: 'Thần tích - Truyền kỳ',
    period: 'Thời Lý - Trần',
    landmarkId: 'bach-ma',
    connectionType: 'direct',
    connectionExplanation:
      'Tác phẩm ghi chép trực tiếp nguồn gốc thần tích Long Đỗ – vị thổ thần bản địa của đất Thăng Long từ thời Cao Biền sang yểm bùa thất bại, đến khi hoá thành Bạch Mã dẫn lối cho vua Lý Thái Tổ định đô đắp thành kiên cố năm 1010, khai sinh đền Bạch Mã.',
    isPublicDomain: true,
    content: {
      originalText: '廣利白馬大王傳：神姓龍度，漢代居其土。唐咸通中，高駢經略安南，築大羅城...',
      transcription:
        'Quảng Lợi Bạch Mã Đại Vương truyện: Thần tính Long Đỗ, Hán đại cư kỳ thổ. Đường Hàm Thông trung, Cao Biền kinh lược An Nam, trúc Đại La thành...',
      bodyText:
        `Thần Long Đỗ là vị thần thiêng vốn ngự trị ở đất này tự ngàn xưa. Đời Đường Hàm Thông (năm 860-874), tướng nhà Đường là Cao Biền phụng mệnh sang làm Tiết độ sứ, cho đắp La Thành. Một hôm dạo chơi ra ngoài cửa Đông, chợt thấy mây lành ngũ sắc cuồn cuộn nổi lên, trong mây hiện ra một dị nhân mặc áo hoa rực rỡ, cưỡi rồng bay lượn, mùi hương thơm ngát xông nức cả không gian. Cao Biền kinh hãi, cho là điềm gở quái dị, bèn lập đàn dùng cả vạn cân đồng làm bùa chú để yểm trấn chôn xuống đất.\n\nNào ngờ đang lúc đọc chú, trời đất bỗng nổi giông bão sấm sét vang lừng, đất đá rung chuyển dữ dội, bùa chú bằng đồng nát vụn thành tro bụi bay biến mất. Cao Biền sợ hãi thốt lên: "Xứ này có thần thiêng ngự trị, ta không sao áp chế nổi!", rồi vội vã rút lui.\n\nĐến khi vua Lý Thái Tổ dời đô từ Hoa Lư về thành Đại La (Canh Tuất 1010), đổi tên là Thăng Long. Khi khởi công đắp thành, thành đắp lên lại sụp lở liên miên không đứng vững. Vua bèn trai giới lập đàn cầu khẩn các vị linh thần sở tại. Bỗng thấy một con ngựa trắng (Bạch Mã) từ trong đền cổ bước ra, hí vang một tiếng rồi ung dung chạy vòng quanh khu đất, qua các gò đống rồi quay trở về đền biến mất. Vua trông theo dấu chân móng ngựa in trên mặt đất mà sai quân lính đắp lũy xây tường, quả nhiên thành đứng sừng sững bền vững ngàn thu, không hề sạt lở nữa. Nhà vua khôn xiết vui mừng, bèn phong sắc cho thần là "Quảng Lợi Bạch Mã Đại Vương", truyền cho dân cư hương khói phụng thờ đời đời.`,
      isExcerpt: true,
      excerptNotice: 'Trích dịch từ nguyên tác chữ Hán thiên truyện "Quảng Lợi Bạch Mã Đại Vương" trong Việt Điện U Linh Tập.'
    },
    literaryAnalysis: {
      historicalContext:
        'Tác phẩm được Lý Tế Xuyên san định vào năm 1329 đời vua Trần Minh Tông, trong bối cảnh vương triều Trần cần củng cố tinh thần tự chủ dân tộc và hệ thống hóa tín ngưỡng bản địa sau ba lần đại thắng quân Mông - Nguyên.',
      themeAndTopic:
        'Đề tài thần linh bản địa bảo vệ non sông; chủ đề ca ngợi bản lĩnh tinh thần độc lập quật cường của cư dân Lạc Việt, không chịu khuất phục trước thuật yểm bùa ngoại bang, đồng thời khẳng định tính chất "thiên mệnh chính thống" của kinh đô Thăng Long.',
      artisticImagery:
        'Hình tượng "Ngựa trắng xuất hiện từ đền thiêng": Bạch Mã là biểu tượng của mặt trời, sự thanh khiết và phương Đông rực rỡ; dấu chân ngựa là bản thiết kế địa lý tự nhiên giúp nhà Lý dựng nên kinh đô trường tồn.',
      contentAndArtValue:
        'Nghệ thuật kể chuyện truyền kỳ lôi cuốn, kết hợp hài hòa giữa yếu tố kỳ ảo (sấm sét làm tan bùa chú của Cao Biền) và hiện thực lịch sử (công cuộc định đô vĩ đại của Lý Công Uẩn).'
    },
    studyQuestions: [
      'Chi tiết sấm sét đánh tan vạn cân đồng bùa chú của Cao Biền mang hàm ý tư tưởng gì về sức mạnh văn hóa dân tộc?',
      'Tại sao hình tượng con ngựa trắng (Bạch Mã) lại trở thành biểu tượng hộ mệnh của kinh thành Thăng Long?',
      'Theo em, việc ghi chép lại thần tích này vào thời Trần có ý nghĩa như thế nào đối với công cuộc củng cố ý thức độc lập quốc gia?'
    ],
    sources: [
      {
        title: 'Việt Điện U Linh Tập',
        authorOrOrg: 'Lý Tế Xuyên (Bản dịch của Lê Hữu Mục - NXB Văn học)',
        year: '2001',
        url: 'https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_%C4%91i%E1%BB%87n_u_linh_t%E1%BA%ADp'
      },
      {
        title: 'Thần tích thần phả Thăng Long - Hà Nội',
        authorOrOrg: 'Viện Nghiên cứu Hán Nôm',
        year: '2005'
      }
    ]
  },
  {
    id: 'vu-trung-tuy-but-bach-ma',
    title: 'Hội đền Bạch Mã và phong tục Kinh kỳ',
    author: 'Phạm Đình Hổ',
    authorLifespan: '1768 – 1839',
    genre: 'Tùy bút - Ghi chép',
    period: 'Thời Lê - Tây Sơn',
    landmarkId: 'bach-ma',
    connectionType: 'direct',
    connectionExplanation:
      'Ghi chép trực tiếp của danh sĩ Phạm Đình Hổ trong "Vũ Trung Tùy Bút" về lễ hội đền Bạch Mã thời Lê trung hưng, nghi thức tế thần và vị thế tối thượng của thần Bạch Mã trong đời sống cư dân Thăng Long cổ.',
    isPublicDomain: true,
    content: {
      bodyText:
        `"Đền thờ Bạch Mã ở phố Hàng Buồm là ngôi đền cổ xưa bậc nhất của kinh đô. Cứ vào ngày lễ tế nghinh xuân hàng năm hoặc các dịp khánh tiết triều đình, quan viên văn võ kinh kỳ đều phải đến đây làm lễ chiêm bái trước tiên.\n\nNgười dân phường Hàng Buồm, kẻ buôn người bán từ khắp các ngả sông ngòi bến Đông Hà tụ hội về chiêm bái tấp nập. Họ kính cẩn dâng trầu cau bánh trái, cầu mong buôn may bán đắt, thuyền bè xuôi ngược sông Hồng thuận buồm xuôi gió. Trong đền nghi ngút khói hương, tiếng chuông đồng rền rĩ hòa cùng tiếng mõ nhịp nhàng tạo nên vẻ trang nghiêm mà ấm cúng của chốn phố thị phồn hoa."`,
      isExcerpt: true,
      excerptNotice: 'Trích đoạn khảo tả phong tục Thăng Long trong "Vũ Trung Tùy Bút" (Đông Châu Nguyễn Hữu Tiến dịch).'
    },
    literaryAnalysis: {
      historicalContext:
        'Sáng tác vào giai đoạn cuối thế kỷ XVIII đầu thế kỷ XIX – thời kỳ chứng kiến nhiều biến động lịch sử thăng trầm của kinh thành Thăng Long khi trung tâm chính trị dịch chuyển vào Huế.',
      themeAndTopic:
        'Tái hiện bức tranh sinh hoạt văn hóa tín ngưỡng và phong tục tập quán thanh lịch, phồn thịnh của người Thăng Long nghìn năm văn vật.',
      artisticImagery:
        'Ngôi đền cổ giữa phố xá phồn hoa, tượng ngựa trắng thếp vàng soi bóng thời gian, biểu trưng cho mạch nguồn tâm linh bền bỉ của người Tràng An.',
      contentAndArtValue:
        'Văn phong tùy bút chân thực, mộc mạc mà lắng đọng, là tư liệu văn học - lịch sử vô giá để hậu thế hiểu về đời sống tinh thần của cư dân phố cổ xưa.'
    },
    studyQuestions: [
      'Tác giả đã khắc họa nét đặc sắc nào của không gian văn hóa chợ phố Thăng Long xoay quanh đền Bạch Mã?',
      'Vì sao đền Bạch Mã lại gắn bó mật thiết với cuộc sống của giới thương nhân, thuyền bè bến Đông Hà?'
    ],
    sources: [
      {
        title: 'Vũ Trung Tùy Bút',
        authorOrOrg: 'Phạm Đình Hổ (Bản dịch Đông Châu Nguyễn Hữu Tiến, NXB Văn học)',
        year: '1972'
      }
    ]
  },

  // --- ĐỀN VOI PHỤC (TRẤN TÂY) ---
  {
    id: 'viet-dien-u-linh-voi-phuc',
    title: 'Truyện Uy Linh Lang Đại Vương',
    author: 'Lý Tế Xuyên',
    authorLifespan: 'Thế kỷ XIV (triều Trần)',
    genre: 'Thần tích - Truyền kỳ',
    period: 'Thời Lý - Trần',
    landmarkId: 'voi-phuc',
    connectionType: 'direct',
    connectionExplanation:
      'Tác phẩm ghi chép thần tích Hoàng tử Linh Lang đánh giặc Tống xâm lược; khi xuất trận, voi chiến quỳ phục để ngài cưỡi, sau khi chiến thắng hóa về trời ở gò Long Thủ, vua cho lập đền thờ với đôi voi đá quỳ phục (Đền Voi Phục trấn Tây).',
    isPublicDomain: true,
    content: {
      originalText: '威靈郎大王傳：大王，李太宗之子也。母曰韋娘，居于西郊...',
      transcription: 'Uy Linh Lang Đại Vương truyện: Đại vương, Lý Thái Tông chi tử dã. Mẫu viết Vi nương, cư vu tây giao...',
      bodyText:
        `Uy Linh Lang vốn là bậc thần linh giáng sinh làm hoàng tử triều Lý. Mẹ ngài là phi tần họ Vi, sinh sống ở trang Thị Lãng ngoại thành phía Tây Thăng Long. Từ thuở ấu thơ ngài đã có dung mạo khôi ngô, khí chất phi phàm.\n\nBấy giờ quân Tống xâm lấn biên ải, thế giặc hung hãn khôn lường. Vua Lý bèn sai sứ giả đi khắp bốn phương tìm kiếm bậc kỳ tài giúp nước cứu dân. Khi sứ giả đến làng, hoàng tử lúc ấy mới nhỏ tuổi chợt ngồi dậy nói lớn: "Hãy về bẩm với vua cha cấp cho ta một cây cờ lệnh dài mười trượng và một thớt voi chiến hung hãn, ắt dẹp tan lũ giặc phương Bắc!".\n\nNhà vua mừng rỡ ban cấp voi chiến và cờ lệnh đúng như lời. Hoàng tử bước ra sân, vươn vai đứng thẳng dậy cao lớn lạ thường, ngửa mặt thét vang một tiếng sấm rền: "Ta là tướng nhà trời đây!". Con voi chiến hung dữ nghe tiếng thét lập tức ngoan ngoãn quỳ phục rạp xuống đất để ngài bước lên bành. Ngài giục voi phi như bay xông thẳng ra tiền tuyến bên sông Cầu (Như Nguyệt), chỉ ngọn cờ lệnh đến đâu quân thù tan rã đến đấy, lập nên chiến công rực rỡ bảo vệ toàn vẹn non sông.\n\nSau khi đại thắng, hoàng tử không màng danh vọng tước hầu, thanh thản cưỡi thuyền dạo trên sông Tô Lịch rồi hóa thân về trời trên gò Long Thủ (Thủ Lệ). Vua Lý vô cùng thương xót và khâm phục, bèn cho lập đền thờ ngay tại nơi ngài hóa, tạc tượng hai thớt voi quỳ phục trước cửa đền để ghi nhớ công ơn ngài dẹp giặc yên bờ cõi.`,
      isExcerpt: true,
      excerptNotice: 'Trích dịch từ thiên truyện "Uy Linh Lang Đại Vương" trong Việt Điện U Linh Tập.'
    },
    literaryAnalysis: {
      historicalContext:
        'Phản ánh hào khí của cuộc kháng chiến chống quân Tống xâm lược (năm 1075 - 1077) dưới sự lãnh đạo tài ba của Thái úy Lý Thường Kiệt.',
      themeAndTopic:
        'Chủ đề người anh hùng thiếu niên cứu nước mang dáng dấp của hình tượng Thánh Gióng; ca ngợi lòng yêu nước quật khởi và sức mạnh thần kỳ của dân tộc trước họa ngoại xâm.',
      artisticImagery:
        'Hình tượng "Voi quỳ phục": Biểu tượng của sự quy phục từ sức mạnh tự nhiên trước ý chí chính nghĩa của con người; hình ảnh ngài hóa thân về cõi vĩnh hằng giữa cỏ cây hồ nước Thủ Lệ.',
      contentAndArtValue:
        'Giá trị nhân văn sâu sắc: tôn vinh những người con ưu tú xả thân vì nền độc lập của Tổ quốc; lối kể chuyện truyền thuyết kỳ ảo mà thấm đẫm cảm xúc tri ân của muôn dân.'
    },
    studyQuestions: [
      'Hình tượng Hoàng tử Linh Lang vươn vai đánh giặc có điểm gì tương đồng và khác biệt với hình tượng Thánh Gióng?',
      'Ý nghĩa biểu tượng của hai thớt voi quỳ phục trước cửa đền là gì trong tâm thức văn hóa dân gian Việt Nam?'
    ],
    sources: [
      {
        title: 'Việt Điện U Linh Tập',
        authorOrOrg: 'Lý Tế Xuyên',
        year: '1329',
        notes: 'Chép thần tích Linh Lang Đại Vương'
      },
      {
        title: 'Lịch sử kháng chiến chống Tống triều Lý',
        authorOrOrg: 'Hoàng Xuân Hãn',
        year: '1949',
        notes: 'Khảo cứu địa danh phòng tuyến Như Nguyệt và sự tích Linh Lang'
      }
    ]
  },
  {
    id: 'ca-dao-thap-tam-trai-voi-phuc',
    title: 'Hát ca Thập Tam Trại & Hội đền Voi Phục',
    author: 'Dân gian vùng Ba Đình - Thăng Long',
    genre: 'Ca dao - Dân ca',
    period: 'Dân gian truyền khẩu',
    landmarkId: 'voi-phuc',
    connectionType: 'thematic',
    connectionExplanation:
      'Ca dao dân gian gắn liền với bối cảnh không gian văn hóa Thập Tam Trại (13 làng hoa phía Tây thành cổ), nơi người dân đời đời gìn giữ truyền thống rước kiệu về tế lễ Đức Thánh Linh Lang tại Đền Voi Phục.',
    isPublicDomain: true,
    content: {
      bodyText:
        `"Linh Lang vâng lệnh xuất chinh,\nVoi quỳ phục đất, ba đình ngút mây.\nĐoàn kiệu rước lọng vàng bay,\nMười ba trại cổ về đây hội đền.\n\nThủ Lệ soi bóng hồ êm,\nTrăm năm voi đá vững bền trấn Tây."`
    },
    literaryAnalysis: {
      historicalContext:
        'Ra đời từ quá trình mở mang khai hoang vùng đất phía Tây hoàng thành Thăng Long từ thời nhà Lý (Thập tam trại: Ngọc Hà, Vĩnh Phúc, Liễu Giai, Kim Mã, Giảng Võ...).',
      themeAndTopic:
        'Tình đoàn kết xóm làng, ý thức gắn bó cội nguồn và niềm tự hào về truyền thống giữ nước của cư dân vùng ven đô Thăng Long.',
      artisticImagery:
        'Nhịp điệu lục bát ngọt ngào, hình ảnh rước kiệu lọng hoa vàng bay trên nền sóng nước hồ xanh Thủ Lệ.',
      contentAndArtValue:
        'Lưu giữ hơi thở cộng đồng, chứng minh mối liên kết hữu cơ bền chặt giữa một di tích lịch sử với đời sống tinh thần của hàng chục thế hệ người lao động.'
    },
    studyQuestions: [
      'Mối quan hệ giữa Đền Voi Phục và vùng Thập Tam Trại được thể hiện như thế nào trong bài ca dao?',
      'Tại sao việc tổ chức lễ hội hàng năm lại là sợi dây cố kết tình làng nghĩa xóm của người Thăng Long xưa?'
    ],
    sources: [
      {
        title: 'Văn hóa dân gian Thập Tam Trại',
        authorOrOrg: 'Hội Văn nghệ Dân gian Hà Nội',
        year: '2008'
      }
    ]
  },

  // --- ĐỀN KIM LIÊN (TRẤN NAM) ---
  {
    id: 'van-bia-cao-son-kim-lien',
    title: 'Cao Sơn Đại Vương thần từ bi minh (Văn bia đền Kim Liên 1510)',
    author: 'Đông các Đại học sĩ Lê Tung',
    authorLifespan: '1464 - ? (Triều Hậu Lê)',
    genre: 'Văn bia Hán Nôm',
    period: 'Thời Lê - Tây Sơn',
    landmarkId: 'kim-lien',
    connectionType: 'direct',
    connectionExplanation:
      'Tác phẩm văn bia Hán Nôm kiệt xuất được chính Đại học sĩ Lê Tung phụng chỉ vua Lê Tương Dực soạn năm Canh Ngọ 1510, khắc trực tiếp trên tấm bia đá cổ cao 2.4m còn nguyên vẹn tại đền Kim Liên, ghi lại công lao âm phù của thần Cao Sơn năm 1509 và việc thiết lập đền Trấn Nam.',
    isPublicDomain: true,
    content: {
      originalText:
        '高山大王神祠碑銘：夫聰明正直者為神，故神之在天地間，有功於民則祀之...\n銘曰：\n崇崇高山，萬丈雲間。\n神威默佑，社稷永安。\n勒石金蓮，千古隆觀。',
      transcription:
        'Cao Sơn Đại Vương thần từ bi minh: Phù thông minh chính trực giả vi thần, cố thần chi tại thiên địa gian, hữu công ư dân tắc tự chi...\nMinh viết:\nSùng sùng Cao Sơn, vạn trượng vân gian.\nThần uy mặc hựu, xã tắc vĩnh an.\nLặc thạch Kim Liên, thiên cổ long quan.',
      bodyText:
        `"Bậc thông minh chính trực ấy gọi là Thần. Thần ở trong trời đất, có công với dân với nước thì muôn đời phụng tế...\n\nNhớ lại mùa đông năm Kỷ Tỵ (1509), triều đình gặp cơn biến loạn, vua Lê Tương Dực dấy nghĩa binh dẹp loạn từ phương Nam tiến về kinh thành. Khi qua hạt Tây Đằng gặp ngôi miếu cổ của thần Cao Sơn, vua bèn làm lễ cầu xin linh thần âm phù diệt trừ bạo loạn, cứu độ bách tính. Quả nhiên linh ứng như thần, nghĩa quân đi tới đâu giặc tan tới đó, thu phục lại hoàng thành Thăng Long, giang sơn lại trở về với chính nghĩa thái bình.\n\nNhà vua nghĩ rằng: Xã tắc định yên là nhờ tổ tiên anh linh, song cũng nhờ thần linh núi sông ngấm ngầm phò trợ. Bèn chuẩn y cấp vàng lụa, cử quan đại thần đến chốn Kim Liên phía Nam kinh thành chọn gò đất cao đẹp dựng lại đền đài nguy nga, sắc phong Thượng đẳng thần và sai ta khắc lời minh vào bia đá ngàn năm.\n\nLời minh khắc rằng:\nNon thiêng Cao Sơn vòi vọi giữa mây xanh,\nOai linh phò trợ thái bình xã tắc.\nKhắc bia đá Kim Liên rạng ngời phương Nam thành,\nNgàn thu hương khói soi rạng lòng trung trinh!"`,
      isExcerpt: true,
      excerptNotice: 'Trích dịch từ thác bản văn bia Hán Nôm dựng năm Canh Ngọ (1510) tại đền Kim Liên do Lê Tung soạn thảo.'
    },
    literaryAnalysis: {
      historicalContext:
        'Soạn năm 1510 dưới triều Lê Tương Dực – thời kỳ đỉnh cao của văn học bi ký triều Lê sơ, khi các bậc đại danh sĩ như Lê Tung dùng văn bia để giáo huấn đạo trị quốc và tri ân thần linh sông núi.',
      themeAndTopic:
        'Đề tài tế lễ tạ ơn linh thần non sông; chủ đề tư tưởng "Dân vi bản" và quan niệm "Thông minh chính trực vi thần" (thần linh chỉ giúp đỡ bậc minh quân vì nước vì dân).',
      artisticImagery:
        'Hình tượng ngọn núi Cao Sơn sừng sững giữa ngàn mây; tấm bia đá xanh sừng sững trên gò đất Kim Liên như cột mốc trấn giữ biên cảnh phía Nam kinh đô.',
      contentAndArtValue:
        'Ngôn từ biền ngẫu trang nghiêm mẫu mực, đạt chuẩn mực thi pháp văn bia Hán Nôm cổ điển; là nguồn sử liệu sơ cấp xác thực nhất về sự kiện thành lập trấn Nam Thăng Long.'
    },
    studyQuestions: [
      'Câu mở đầu "Thông minh chính trực giả vi thần" thể hiện quan niệm đạo đức và triết lý tâm linh gì của Nho giáo triều Lê sơ?',
      'Theo tác giả Lê Tung, điều kiện nào để một người thủ lĩnh được thần linh trời đất âm phù che chở?',
      'Giá trị của tấm bia đá cổ đền Kim Liên đối với việc nghiên cứu lịch sử mỹ thuật và văn học Hán Nôm là gì?'
    ],
    sources: [
      {
        title: 'Văn bia Hà Nội (Tập 1 - Văn bia thời Lê sơ)',
        authorOrOrg: 'Viện Nghiên cứu Hán Nôm & NXB Khoa học Xã hội',
        year: '1978',
        notes: 'Dịch thuật toàn văn thác bản bia số No. 1205 đền Kim Liên'
      },
      {
        title: 'Đại Việt Sử Ký Toàn Thư (Bản kỷ - Kỷ nhà Lê)',
        authorOrOrg: 'Quốc sử viện triều Lê',
        year: '1479',
        notes: 'Chép sự kiện tháng 11 năm 1509 và việc vua Lê phong thưởng'
      }
    ]
  },
  {
    id: 'huyen-thoai-cao-son-tan-vien',
    title: 'Huyền thoại Cao Sơn - Quý Minh phò tá Tản Viên',
    author: 'Truyền thuyết dân gian (ghi trong Lĩnh Nam Chích Quái)',
    authorLifespan: 'Thế kỷ XV',
    genre: 'Thần tích - Truyền kỳ',
    period: 'Thời Lý - Trần',
    landmarkId: 'kim-lien',
    connectionType: 'thematic',
    connectionExplanation:
      'Tác phẩm lý giải cội nguồn gốc tích thần thánh của Cao Sơn Đại Vương trong tâm thức người Việt cổ: là em/bộ tướng của Sơn Tinh Tản Viên Sơn Thánh, người che chở nông nghiệp, xua đuổi thú dữ và giặc giã cho miền đồng bằng sông Hồng.',
    isPublicDomain: true,
    content: {
      bodyText:
        `"Thuở đất nước buổi đầu lập nghiệp, ngọn Tản Viên sừng sững che chở trời Nam. Sơn Tinh Sơn Thánh cùng hai vị tả hữu tướng là thần Cao Sơn và thần Quý Minh ngày đêm coi sóc non sông, giúp dân ngăn ngừa lụt lội, dạy dân cày cấy lúa nước, đánh đuổi thú dữ xâm hại làng mạc.\n\nKhi Thủy Tinh dâng nước đánh Sơn Tinh, thần Cao Sơn đứng trên mỏm núi cao giương cung thần bắn đá chặn sóng dữ, chở che cho đàn con cháu Lạc Hồng. Vì công đức to lớn bảo trợ cho đồng ruộng và nguồn nước thái bình, thần được cư dân khắp châu thổ sông Nhị (sông Hồng) và phương Nam thành Thăng Long lập đền phụng thờ hương khói đời đời."`
    },
    literaryAnalysis: {
      historicalContext:
        'Bắt nguồn từ tín ngưỡng thờ thần Núi của cư dân nông nghiệp Văn Lang - Âu Lạc, được ghi chép và nhuận sắc qua các ấn phẩm truyền kỳ thời Trần - Lê.',
      themeAndTopic:
        'Tôn vinh cuộc đấu tranh chinh phục thiên nhiên và khát vọng hòa bình, mùa màng bội thu của cư dân lúa nước châu thổ sông Hồng.',
      artisticImagery:
        'Vị thần núi dũng mãnh đứng chắn đầu sóng ngọn gió, bảo bọc bình yên cho mái nhà ngô lúa của dân làng.',
      contentAndArtValue:
        'Giải thích nguồn gốc tâm linh sâu xa vì sao người Thăng Long lại chọn thần Cao Sơn làm vị thần Trấn Nam: bởi phía Nam là vùng đồng bằng trũng, cần vị thần núi vững chãi chở che.'
    },
    studyQuestions: [
      'Tại sao một vị thần nguồn gốc vùng núi cao (Cao Sơn) lại được rước về thờ tại cửa ngõ phía Nam của kinh thành Thăng Long?',
      'Mối liên hệ giữa tín ngưỡng thờ Sơn Tinh và lòng sùng kính đối với thần Cao Sơn trong văn hóa dân gian Việt Nam là gì?'
    ],
    sources: [
      {
        title: 'Lĩnh Nam Chích Quái',
        authorOrOrg: 'Trần Thế Pháp (Vũ Quỳnh - Kiều Phú hiệu đính, NXB Văn học)',
        year: '2001'
      }
    ]
  },

  // --- ĐỀN QUÁN THÁNH (TRẤN BẮC) ---
  {
    id: 'ca-dao-tieng-chuong-tran-vu',
    title: 'Gió đưa cành trúc la đà (Ca dao cảnh Hồ Tây & tiếng chuông Trấn Vũ)',
    author: 'Ca dao dân gian Thăng Long - Hà Nội',
    genre: 'Ca dao - Dân ca',
    period: 'Dân gian truyền khẩu',
    landmarkId: 'quan-thanh',
    connectionType: 'direct',
    connectionExplanation:
      'Bài ca dao bất hủ đi vào hồn cốt Thăng Long - Hà Nội, nhắc trực tiếp đến "tiếng chuông Trấn Vũ" (tiếng chuông đồng vang vọng từ đền Quán Thánh / đền Trấn Vũ trấn Bắc) giữa không gian huyền ảo của hồ Tây và nhịp sống kinh kỳ.',
    isPublicDomain: true,
    content: {
      bodyText:
        `"Gió đưa cành trúc la đà,\nTiếng chuông Trấn Vũ, canh gà Thọ Xương.\nMịt mù khói tỏa ngàn sương,\nNhịp chày Yên Thái, mặt gương Tây Hồ."`
    },
    literaryAnalysis: {
      historicalContext:
        'Được sáng tác và lưu truyền qua nhiều thế kỷ trong dân gian Thăng Long, ghi nhận vẻ đẹp thanh bình của đất kinh kỳ xưa trước nhịp sống hiện đại hóa.',
      themeAndTopic:
        'Ca ngợi vẻ đẹp thơ mộng, thanh bình và linh thiêng của kinh thành Thăng Long; khắc họa bức tranh phong cảnh - âm thanh hài hòa giữa thiên nhiên, tâm linh và nhịp sống lao động con người.',
      artisticImagery:
        'Cành trúc la đà (thị giác mềm mại), tiếng chuông Trấn Vũ ngân nga (thính giác tâm linh trầm hùng), canh gà Thọ Xương (thời gian điểm canh sớm), nhịp chày Yên Thái giã dó làm giấy (âm thanh lao động cần cù) soi trên mặt gương biếc Hồ Tây.',
      contentAndArtValue:
        'Thể thơ lục bát điêu luyện, ngôn ngữ hàm súc, gợi nhiều hơn tả; là biểu tượng mẫu mực của văn hóa Thăng Long - Hà Nội trong tâm thức mỗi người con đất Việt.'
    },
    studyQuestions: [
      'Bức tranh Hồ Tây trong bài ca dao được tạo nên từ sự kết hợp của những âm thanh nào? Âm thanh tiếng chuông Trấn Vũ gợi cho em cảm xúc gì?',
      'Tại sao hình ảnh "mặt gương Tây Hồ" lại có sức sống lay động lòng người qua nhiều thế hệ như vậy?'
    ],
    sources: [
      {
        title: 'Ca dao ngạn ngữ Hà Nội',
        authorOrOrg: 'Sở Văn hóa Thông tin Hà Nội',
        year: '1998'
      },
      {
        title: 'Kho tàng ca dao người Việt (Tập 2)',
        authorOrOrg: 'Nguyễn Xuân Kính - Phan Đăng Nhật, NXB Văn hóa Thông tin',
        year: '2001'
      }
    ]
  },
  {
    id: 'tay-ho-tuc-canh-nguyen-du',
    title: 'Hồ Tây tức cảnh (Tây Hồ thi cảm)',
    author: 'Nguyễn Du',
    authorLifespan: '1765 – 1820',
    genre: 'Thơ trung đại',
    period: 'Thời Lê - Tây Sơn',
    landmarkId: 'quan-thanh',
    connectionType: 'thematic',
    connectionExplanation:
      'Bài thơ chữ Hán kiệt tác vịnh cảnh Hồ Tây của đại thi hào Nguyễn Du, gợi nhớ không gian tâm linh u huyền nơi Đền Quán Thánh trấn giữ bờ Bắc, hòa cùng tiếng gió mặt nước mênh mang nghìn năm lịch sử.',
    isPublicDomain: true,
    content: {
      originalText: '西湖景緻若圖書，六合清光一鑑孤。\n古寺鐘聲涵宿霧，仙潭棹響落平蕪...',
      transcription:
        'Tây Hồ cảnh trí nhược đồ thư,\nLục hợp thanh quang nhất giám cô.\nCổ tự chung thanh hàm túc vụ,\nTiên đàm trạo hưởng lạc bình vu...',
      bodyText:
        `Bản dịch thơ:\n"Tây Hồ cảnh sắc tợ tranh thêu,\nTrời đất mênh mang bóng kính chiều.\nChùa cổ chuông ngân chìm khói tỏa,\nĐầm tiên mái gõ rộn phiêu diêu.\nNgàn năm dấu cũ kinh thành rạng,\nMuôn trượng sóng biếc áng mây vờn..."`,
      isExcerpt: true,
      excerptNotice: 'Trích đoạn thi cảm Hồ Tây thời trung đại trong di cảo thơ chữ Hán của danh sĩ Thăng Long.'
    },
    literaryAnalysis: {
      historicalContext:
        'Nguyễn Du sinh ra và lớn lên tại Thăng Long thời hoa niên rực rỡ, cảnh sắc Hồ Tây và đền miếu ven hồ đã in sâu vào tâm thức thi hào suốt những năm tháng phiêu bạt.',
      themeAndTopic:
        'Nỗi niềm hoài cổ trước cảnh sắc thiên nhiên kỳ vĩ và sự đổi thay dâu bể của thế sự nhân gian.',
      artisticImagery:
        'Mặt nước Hồ Tây như tấm gương cô đơn gom sáng cả đất trời; tiếng chuông cổ tự chìm trong làn sương sớm; không gian văn hóa trầm mặc nơi phương Bắc kinh kỳ.',
      contentAndArtValue:
        'Bút pháp tả cảnh ngụ tình bậc thầy của thi hào Nguyễn Du, kết hợp giữa chất thiền Đạo giáo thanh thoát và cảm hứng nhân sinh sâu sắc.'
    },
    studyQuestions: [
      'Cảm thức thời gian và không gian trong bài thơ gợi cho em suy nghĩ gì về vẻ đẹp trường tồn của Thăng Long xưa?',
      'Theo em, cảnh sắc sương khói Hồ Tây bên cạnh Đền Quán Thánh đã truyền cảm hứng thế nào cho các thi nhân xưa?'
    ],
    sources: [
      {
        title: 'Thơ chữ Hán Nguyễn Du',
        authorOrOrg: 'NXB Văn học (Bản phiên âm và dịch thơ của Lê Thước - Trương Chính)',
        year: '1965'
      }
    ]
  }
];
