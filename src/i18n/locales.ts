// Translations for localized homepage + contact pages.
// EN pages remain hand-authored at the site root; these dicts power /ms/, /zh/, /ja/, /ko/.

export interface HomeDict {
  lang: string;            // html lang attribute
  title: string;
  description: string;
  heroBadge: string;
  heroTitle: [string, string];
  heroDesc: string;
  ctaCalc: string;
  ctaSpecs: string;
  statWeight: [string, string];   // [value, label]
  statFreight: [string, string];
  industriesLabel: string;
  industries: [string, string, string];
  fumTitle: [string, string];
  fumCardTitle: string;
  fumCardText: string;
  calcTitle: [string, string];
  calcDesc: string;
  calcCurrency: string;
  calcPallets: string;
  calcRate: string;
  calcResult: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaFinalTitle: string;
  ctaFinalBtn: string;
}

export interface ContactDict {
  lang: string;
  title: string;
  description: string;
  badge: string;
  h1: string;
  intro: string;
  fName: string; fCompany: string; fEmail: string; fInquiry: string; fMessage: string;
  inquiryOptions: [string, string, string, string];
  submit: string;
  note: string;           // text before the email link
  notePrefer: string;     // "Prefer email?" style lead-in
  statusOk: string;
  reachUs: string;
  whatsapp: string; call: string; email: string;
  hours: string;
  monFri: string; sat: string; sunHoliday: string; closed: string;
  directions: string;
}

export const homeDicts: Record<string, HomeDict> = {
  ms: {
    lang: 'ms-MY',
    title: 'Pengeluar Papan Honeycomb Kertas Malaysia | phb',
    description: 'Pengeluar papan honeycomb kertas di Malaysia. Dikecualikan ISPM-15, 100% boleh dikitar semula, sehingga 80% lebih ringan daripada palet kayu. Dapatkan kit sampel.',
    heroBadge: 'Ketegapan Struktur Industri',
    heroTitle: ['Masa Depan Ialah', 'Papan Honeycomb'],
    heroDesc: 'Tinggalkan kayu. Penyelesaian honeycomb kertas yang dikecualikan ISPM-15 — sehingga 80% lebih ringan daripada palet kayu. Perlindungan padu, jejak ringan.',
    ctaCalc: 'Kira Penjimatan Saya',
    ctaSpecs: 'Lihat Spesifikasi',
    statWeight: ['80%', 'Lebih Ringan Daripada Palet Kayu'],
    statFreight: ['RM400', 'Jimat Tambang Udara / Palet'],
    industriesLabel: 'Dibina Untuk Industri Berat',
    industries: ['Elektronik', 'Perabot', 'Logistik'],
    fumTitle: ['Masalah Fumigasi', 'Sudah Berakhir.'],
    fumCardTitle: 'Penyelesaian Tanpa Kertas Kerja',
    fumCardText: 'Bahan kami dikecualikan ISPM-15 secara semula jadi. Tiada fumigasi, tiada cop, tiada kelewatan di sempadan. Penghantaran lancar untuk aset bernilai tinggi anda.',
    calcTitle: ['Kalkulator', 'Penjimatan Berat'],
    calcDesc: 'Setiap palet phb seberat ~5kg berbanding ~25kg untuk kayu — 20kg kurang berat tara setiap palet. Masukkan jumlah palet bulanan dan kadar tambang untuk melihat anggaran penjimatan.',
    calcCurrency: 'Mata Wang',
    calcPallets: 'Palet Dihantar Sebulan',
    calcRate: 'Kadar Tambang Udara (per KG)',
    calcResult: 'Anggaran Penjimatan',
    faqTitle: 'Soalan Lazim',
    faq: [
      { q: 'Apakah papan honeycomb kertas yang dikecualikan ISPM-15?', a: 'Papan honeycomb kertas bersifat lengai secara biologi dan dikecualikan daripada peraturan fitosanitasi ISPM-15. Berbeza dengan palet kayu, ia tidak memerlukan rawatan haba atau fumigasi — membolehkan penghantaran antarabangsa yang lancar.' },
      { q: 'Berapa banyak berat dapat dijimatkan berbanding papan lapis?', a: 'Palet honeycomb phb standard seberat ~5kg berbanding 25kg untuk papan lapis — jimat 20kg setiap palet. Pada kadar tambang udara biasa RM20/kg, itu kira-kira RM400 penjimatan setiap palet.' },
      { q: 'Di manakah phb boleh didapati di Malaysia?', a: 'Kami mengeluar di Balakong, Selangor dengan penghantaran JIT ke Shah Alam, Petaling Jaya, Lembah Klang, Kuala Lumpur dan Johor Bahru. Laluan terus ke Pelabuhan Klang tersedia setiap hari.' },
      { q: 'Adakah papan honeycomb 100% boleh dikitar semula?', a: 'Ya. Honeycomb phb diperbuat daripada kertas kraft dan 100% boleh dikitar semula — sesuai untuk pelaporan ESG syarikat multinasional di zon perindustrian.' },
    ],
    ctaFinalTitle: 'Sedia untuk mencuba?',
    ctaFinalBtn: 'Dapatkan Kit Sampel Honeycomb',
  },
  zh: {
    lang: 'zh-MY',
    title: '马来西亚蜂窝纸板制造商 | phb',
    description: '马来西亚蜂窝纸板制造商。豁免ISPM-15熏蒸，100%可回收，比木托盘轻达80%。立即索取样品套装。',
    heroBadge: '工业级结构强度',
    heroTitle: ['未来属于', '蜂窝纸板'],
    heroDesc: '告别木材。豁免ISPM-15的纸蜂窝解决方案 — 比木托盘轻达80%。重型保护，轻量足迹。',
    ctaCalc: '计算我的节省',
    ctaSpecs: '查看规格',
    statWeight: ['80%', '比木托盘更轻'],
    statFreight: ['RM400', '每托盘节省空运费'],
    industriesLabel: '为高要求行业打造',
    industries: ['电子', '家具', '物流'],
    fumTitle: ['熏蒸烦恼', '到此为止。'],
    fumCardTitle: '免文书方案',
    fumCardText: '我们的材料天然豁免ISPM-15。无需熏蒸、无需盖章、无边境延误。让您的高价值货物畅行无阻。',
    calcTitle: ['重量节省', '计算器'],
    calcDesc: '每个phb托盘约5kg，木托盘约25kg — 每托盘减少20kg皮重。输入每月托盘数量和运费费率，查看预计空运节省。',
    calcCurrency: '货币',
    calcPallets: '每月出货托盘数',
    calcRate: '空运费率（每公斤）',
    calcResult: '预计节省',
    faqTitle: '常见问题',
    faq: [
      { q: '什么是豁免ISPM-15的蜂窝纸板？', a: '蜂窝纸板为生物惰性材料，天然豁免ISPM-15植物检疫法规。与木托盘不同，无需热处理或熏蒸，实现顺畅的国际运输。' },
      { q: '与胶合板相比能节省多少重量？', a: '标准phb蜂窝托盘约5kg，胶合板托盘约25kg — 每托盘节省20kg。按每公斤RM20的常见空运费率计算，每托盘约节省RM400。' },
      { q: '在马来西亚哪里可以买到phb产品？', a: '我们在雪兰莪州Balakong生产，JIT配送覆盖莎阿南、八打灵再也、巴生谷、吉隆坡和新山，每日直达巴生港。' },
      { q: '蜂窝纸板是100%可回收的吗？', a: '是的。phb蜂窝纸板由牛皮纸制成，100%可回收 — 助力工业区跨国企业的ESG环保报告。' },
    ],
    ctaFinalTitle: '准备好试用了吗？',
    ctaFinalBtn: '获取蜂窝纸板样品套装',
  },
  ja: {
    lang: 'ja',
    title: 'ペーパーハニカムボード メーカー（マレーシア）| phb',
    description: 'マレーシアのペーパーハニカムボードメーカー。ISPM-15適用外、100%リサイクル可能、木製パレットより最大80%軽量。サンプルキットをご請求ください。',
    heroBadge: '産業グレードの構造強度',
    heroTitle: ['未来は', 'ハニカムボードへ'],
    heroDesc: '木材からの切り替えを。ISPM-15適用外のペーパーハニカムソリューション — 木製パレットより最大80%軽量。堅牢な保護と軽量性を両立。',
    ctaCalc: '削減額を計算する',
    ctaSpecs: '仕様を見る',
    statWeight: ['80%', '木製パレット比の軽量化'],
    statFreight: ['US$90', 'パレット1枚あたりの空輸費削減'],
    industriesLabel: '要求の厳しい産業のために',
    industries: ['エレクトロニクス', '家具', '物流'],
    fumTitle: ['燻蒸処理の悩みは', 'もう終わり。'],
    fumCardTitle: '書類手続き不要のソリューション',
    fumCardText: '当社の素材は本質的にISPM-15の適用外です。燻蒸も刻印も国境での遅延も不要。高価値な貨物をスムーズに輸送できます。',
    calcTitle: ['重量削減', '計算ツール'],
    calcDesc: 'phbパレットは約5kg、木製は約25kg — パレット1枚あたり20kgの風袋軽減。月間パレット数と運賃レートを入力すると、空輸費の削減目安が表示されます。',
    calcCurrency: '通貨',
    calcPallets: '月間出荷パレット数',
    calcRate: '航空運賃（kgあたり）',
    calcResult: '削減額の目安',
    faqTitle: 'よくあるご質問',
    faq: [
      { q: 'ISPM-15適用外のペーパーハニカムボードとは？', a: 'ペーパーハニカムボードは生物学的に不活性で、ISPM-15植物検疫規制の適用外です。木製パレットと異なり熱処理や燻蒸が不要で、国際輸送がスムーズに行えます。' },
      { q: '合板と比べてどれだけ軽量化できますか？', a: '標準的なphbハニカムパレットは約5kg、合板は約25kg — 1枚あたり20kgの削減です。一般的な空輸運賃US$4.50/kgで換算すると、パレット1枚あたり約US$90の削減になります。' },
      { q: 'どの地域に供給していますか？', a: 'マレーシア・セランゴール州バラコンで製造し、クアラルンプール、クランバレー、ジョホールバル、シンガポールへJIT配送。日本を含む輸出市場にも対応します。' },
      { q: 'ハニカムボードは100%リサイクル可能ですか？', a: 'はい。phbハニカムはクラフト紙製で100%リサイクル可能。ESG報告にも貢献します。' },
    ],
    ctaFinalTitle: 'まずはお試しください',
    ctaFinalBtn: 'サンプルキットを請求する',
  },
  ko: {
    lang: 'ko',
    title: '페이퍼 허니컴 보드 제조사 (말레이시아) | phb',
    description: '말레이시아 페이퍼 허니컴 보드 제조사. ISPM-15 면제, 100% 재활용 가능, 목재 팔레트보다 최대 80% 가벼움. 샘플 키트를 신청하세요.',
    heroBadge: '산업용 구조 강도',
    heroTitle: ['미래는', '허니컴 보드입니다'],
    heroDesc: '목재와 작별하세요. ISPM-15 면제 페이퍼 허니컴 솔루션 — 목재 팔레트보다 최대 80% 가볍습니다. 강력한 보호, 가벼운 무게.',
    ctaCalc: '절감액 계산하기',
    ctaSpecs: '사양 보기',
    statWeight: ['80%', '목재 팔레트 대비 경량화'],
    statFreight: ['US$90', '팔레트당 항공 운임 절감'],
    industriesLabel: '까다로운 산업을 위해',
    industries: ['전자', '가구', '물류'],
    fumTitle: ['훈증 걱정은', '이제 끝.'],
    fumCardTitle: '서류 없는 솔루션',
    fumCardText: '당사 소재는 본질적으로 ISPM-15 면제 대상입니다. 훈증도, 인증 스탬프도, 국경 지연도 없습니다. 고가 화물을 원활하게 운송하세요.',
    calcTitle: ['중량 절감', '계산기'],
    calcDesc: 'phb 팔레트는 약 5kg, 목재는 약 25kg — 팔레트당 20kg의 자체 중량 절감. 월 팔레트 수량과 운임 요율을 입력하면 예상 항공 운임 절감액이 표시됩니다.',
    calcCurrency: '통화',
    calcPallets: '월 출하 팔레트 수',
    calcRate: '항공 운임 (kg당)',
    calcResult: '예상 절감액',
    faqTitle: '자주 묻는 질문',
    faq: [
      { q: 'ISPM-15 면제 페이퍼 허니컴 보드란 무엇인가요?', a: '페이퍼 허니컴 보드는 생물학적으로 불활성이며 ISPM-15 식물검역 규정에서 면제됩니다. 목재 팔레트와 달리 열처리나 훈증이 필요 없어 국제 운송이 원활합니다.' },
      { q: '합판 대비 얼마나 가벼운가요?', a: '표준 phb 허니컴 팔레트는 약 5kg, 합판은 약 25kg — 팔레트당 20kg 절감됩니다. 일반적인 항공 운임 US$4.50/kg 기준으로 팔레트당 약 US$90를 절약합니다.' },
      { q: '어느 지역에 공급하나요?', a: '말레이시아 셀랑고르주 발라콩에서 제조하며 쿠알라룸푸르, 클랑밸리, 조호바루, 싱가포르에 JIT 배송합니다. 한국을 포함한 수출 시장에도 대응합니다.' },
      { q: '허니컴 보드는 100% 재활용 가능한가요?', a: '네. phb 허니컴은 크라프트지로 만들어져 100% 재활용 가능하며 ESG 보고에도 기여합니다.' },
    ],
    ctaFinalTitle: '직접 테스트해 보세요',
    ctaFinalBtn: '샘플 키트 신청하기',
  },
};

export const contactDicts: Record<string, ContactDict> = {
  ms: {
    lang: 'ms-MY',
    title: 'Hubungi Pembekal Papan Honeycomb Malaysia | phb',
    description: 'Hubungi Quinocycle Sdn Bhd di Balakong, Selangor — WhatsApp +6016-891 6381, telefon 03-8962 6381, atau e-mel sales@quinocycle.com. Dapatkan kit sampel honeycomb anda.',
    badge: 'Hubungi Kami',
    h1: 'Dapatkan Kit Sampel Papan Honeycomb',
    intro: 'Minta kit sampel gred arkitek kami yang mengandungi tiga ketumpatan honeycomb struktur serta panduan kemasan. Atau hubungi pasukan kejuruteraan kami secara terus.',
    fName: 'Nama Penuh', fCompany: 'Syarikat', fEmail: 'E-mel', fInquiry: 'Jenis Pertanyaan', fMessage: 'Mesej',
    inquiryOptions: ['Permintaan Kit Sampel', 'Sebut Harga / Pesanan Pukal', 'Spesifikasi Teknikal', 'Lain-lain'],
    submit: 'Hantar melalui WhatsApp',
    note: 'Menghantar akan membuka WhatsApp dengan pertanyaan anda siap diisi — tekan hantar di sana dan ia terus sampai ke pasukan jualan kami.',
    notePrefer: 'Lebih suka e-mel?',
    statusOk: '✓ WhatsApp dibuka dengan pertanyaan anda — tekan hantar di sana untuk menghubungi kami serta-merta.',
    reachUs: 'Hubungi Kami',
    whatsapp: 'WhatsApp', call: 'Telefon', email: 'E-mel',
    hours: 'Waktu Perniagaan',
    monFri: 'Isnin–Jumaat', sat: 'Sabtu', sunHoliday: 'Ahad & cuti umum', closed: 'Tutup',
    directions: 'Dapatkan arah →',
  },
  zh: {
    lang: 'zh-MY',
    title: '联系马来西亚蜂窝纸板供应商 | phb',
    description: '联系Quinocycle Sdn Bhd（雪兰莪州Balakong）— WhatsApp +6016-891 6381，电话 03-8962 6381，或发邮件至 sales@quinocycle.com。索取蜂窝纸板样品套装。',
    badge: '联系我们',
    h1: '获取蜂窝纸板样品套装',
    intro: '索取我们的建筑级样品套装，内含三种密度的结构蜂窝板及表面处理指南。也可直接联系我们的工程团队。',
    fName: '姓名', fCompany: '公司', fEmail: '电子邮箱', fInquiry: '咨询类型', fMessage: '留言',
    inquiryOptions: ['样品套装申请', '报价 / 批量订购', '技术规格', '其他'],
    submit: '通过WhatsApp发送',
    note: '点击发送将打开WhatsApp并自动填好您的咨询内容 — 在那里按发送即可直达我们的销售团队。',
    notePrefer: '更喜欢电子邮件？',
    statusOk: '✓ WhatsApp已打开并填好您的咨询 — 请在那里按发送即可立即联系我们。',
    reachUs: '联系方式',
    whatsapp: 'WhatsApp', call: '电话', email: '邮箱',
    hours: '营业时间',
    monFri: '周一至周五', sat: '周六', sunHoliday: '周日及公共假期', closed: '休息',
    directions: '获取路线 →',
  },
  ja: {
    lang: 'ja',
    title: 'お問い合わせ – ハニカムボードサプライヤー | phb',
    description: 'Quinocycle Sdn Bhd（マレーシア・セランゴール州バラコン）へのお問い合わせ — WhatsApp +6016-891 6381、電話 +603-8962 6381、メール sales@quinocycle.com。サンプルキットをご請求ください。',
    badge: 'お問い合わせ',
    h1: 'ハニカムボード サンプルキットのご請求',
    intro: '3種類の密度の構造用ハニカムと仕上げガイドを含む、建築グレードのサンプルキットをご請求いただけます。エンジニアリングチームへの直接のご相談も歓迎します。',
    fName: 'お名前', fCompany: '会社名', fEmail: 'メールアドレス', fInquiry: 'お問い合わせ種別', fMessage: 'メッセージ',
    inquiryOptions: ['サンプルキット請求', '見積 / 大量注文', '技術仕様', 'その他'],
    submit: 'WhatsAppで送信',
    note: '送信するとお問い合わせ内容が入力済みのWhatsAppが開きます — そのまま送信いただければ営業チームに即座に届きます。',
    notePrefer: 'メールをご希望の場合：',
    statusOk: '✓ お問い合わせ内容入りのWhatsAppを開きました — そちらで送信してください。',
    reachUs: '連絡先',
    whatsapp: 'WhatsApp', call: '電話', email: 'メール',
    hours: '営業時間',
    monFri: '月〜金', sat: '土', sunHoliday: '日・祝日', closed: '休業',
    directions: 'アクセス →',
  },
  ko: {
    lang: 'ko',
    title: '문의하기 – 허니컴 보드 공급사 | phb',
    description: 'Quinocycle Sdn Bhd(말레이시아 셀랑고르주 발라콩) 문의 — WhatsApp +6016-891 6381, 전화 +603-8962 6381, 이메일 sales@quinocycle.com. 샘플 키트를 신청하세요.',
    badge: '문의하기',
    h1: '허니컴 보드 샘플 키트 신청',
    intro: '세 가지 밀도의 구조용 허니컴과 마감 가이드가 포함된 건축가급 샘플 키트를 신청하세요. 엔지니어링 팀에 직접 문의하셔도 좋습니다.',
    fName: '성함', fCompany: '회사명', fEmail: '이메일', fInquiry: '문의 유형', fMessage: '메시지',
    inquiryOptions: ['샘플 키트 신청', '견적 / 대량 주문', '기술 사양', '기타'],
    submit: 'WhatsApp으로 보내기',
    note: '보내기를 누르면 문의 내용이 채워진 WhatsApp이 열립니다 — 거기서 전송하시면 영업팀에 바로 전달됩니다.',
    notePrefer: '이메일을 선호하시나요?',
    statusOk: '✓ 문의 내용이 채워진 WhatsApp이 열렸습니다 — 거기서 전송해 주세요.',
    reachUs: '연락처',
    whatsapp: 'WhatsApp', call: '전화', email: '이메일',
    hours: '영업시간',
    monFri: '월–금', sat: '토', sunHoliday: '일요일 및 공휴일', closed: '휴무',
    directions: '오시는 길 →',
  },
};
