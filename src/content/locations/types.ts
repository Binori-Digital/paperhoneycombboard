// Location coverage pages. Every location carries its own industrial context,
// industries served, delivery note, use case and FAQs — not a name swapped into
// a shared template — so each page stands on its own for local search.

export type LocLocale = 'en' | 'ms' | 'zh';

export interface LocationCopy {
  /** Localised place name */
  name: string;
  /** Unique 2-3 sentence description of the area's industrial character */
  blurb: string;
  /** Dominant industries we serve there */
  industries: string[];
  /** Delivery and lead time note from the Balakong plant */
  delivery: string;
  /** What honeycomb specifically solves for this location's industry mix */
  useCase: string;
  /** One location-specific question; template FAQs are appended automatically */
  faq: { q: string; a: string };
}

export interface Location {
  slug: string;
  image: string;
  /** Named industrial areas / zones — proper nouns, shared across languages */
  areas: string[];
  /** Slugs of neighbouring locations, for internal linking */
  nearby: string[];
  i18n: Record<LocLocale, LocationCopy>;
}

export const LOC_LOCALES: LocLocale[] = ['en', 'ms', 'zh'];

export const LOC_LANG: Record<LocLocale, string> = {
  en: 'en-MY',
  ms: 'ms-MY',
  zh: 'zh-MY',
};

export const locPrefix = (l: LocLocale) => (l === 'en' ? '' : `/${l}`);
export const locPath = (l: LocLocale, slug: string) => `${locPrefix(l)}/honeycomb-board/${slug}/`;
export const locHubPath = (l: LocLocale) => `${locPrefix(l)}/honeycomb-board/`;

/** Page furniture shared across locations, per language. */
export const locTemplate: Record<LocLocale, {
  hubBadge: string;
  hubTitle: string;
  hubDesc: string;
  hubIntro: string;
  hubGroupsLabel: string;
  titleFor: (n: string) => string;
  descFor: (n: string, inds: string) => string;
  h1For: (n: string) => string;
  areasLabel: string;
  industriesLabel: string;
  deliveryLabel: string;
  whyLabel: string;
  whyIntro: (n: string) => string;
  benefits: { h: string; p: string }[];
  productsLabel: string;
  products: { href: string; label: string; blurb: string }[];
  faqLabel: string;
  nearbyLabel: string;
  ctaTitle: (n: string) => string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  backToHub: string;
  sharedFaq: (n: string) => { q: string; a: string }[];
}> = {
  en: {
    hubBadge: 'Coverage',
    hubTitle: 'Honeycomb Board Supplier Across Malaysia',
    hubDesc: 'Paper honeycomb board, boxes and pallets delivered across the Klang Valley and nationwide from our Balakong, Selangor plant. Find your area for local lead times and industry notes.',
    hubIntro: 'We manufacture in Balakong, Selangor and deliver across Greater Kuala Lumpur, Selangor and to major industrial regions nationwide. Select your area below for local delivery notes, the industries we serve there, and answers to questions specific to that location.',
    hubGroupsLabel: 'Areas we serve',
    titleFor: (n) => `Honeycomb Board Supplier in ${n} | Pallets & Boxes | phb`,
    descFor: (n, inds) => `Paper honeycomb board, boxes and ISPM-15 exempt pallets supplied to ${n}. Serving ${inds}. Manufactured in Balakong, Selangor with fast local delivery.`,
    h1For: (n) => `Honeycomb Board Supplier in ${n}`,
    areasLabel: 'Industrial areas we deliver to',
    industriesLabel: 'Industries we serve here',
    deliveryLabel: 'Delivery & lead time',
    whyLabel: 'Why manufacturers here switch to honeycomb',
    whyIntro: (n) => `Exporters and manufacturers in ${n} come to us for four reasons, in roughly this order of urgency:`,
    benefits: [
      { h: 'ISPM-15 exempt', p: 'Paper honeycomb is biologically inert, so pallets and crates need no heat treatment, fumigation or IPPC stamp in any export market.' },
      { h: 'Around 80% lighter', p: 'A honeycomb pallet weighs roughly 5kg against 25kg for wood, cutting about 20kg of billable tare weight from every pallet position.' },
      { h: '100% recyclable', p: 'Kraft paper with water-based adhesive goes into ordinary paper recycling, so your customer disposes of it free rather than paying landfill or EPR fees.' },
      { h: 'Made to specification', p: 'Cell size, core thickness and board grade are production parameters, so units behave predictably on automated lines and under load.' },
    ],
    productsLabel: 'What we supply',
    products: [
      { href: '/honeycomb-pallet/', label: 'Honeycomb paper pallets', blurb: 'ISPM-15 exempt, around 5kg, engineered to your load.' },
      { href: '/honeycomb-box/', label: 'Honeycomb boxes & crates', blurb: 'Wooden crate replacement for machinery, electronics and furniture.' },
      { href: '/honeycomb-panels/', label: 'Honeycomb panels', blurb: 'Structural panels for displays, furniture and prototyping.' },
    ],
    faqLabel: 'Frequently asked questions',
    nearbyLabel: 'Nearby areas we also serve',
    ctaTitle: (n) => `Get a quote for ${n}`,
    ctaText: 'Send your pallet or crate dimensions, monthly volume and delivery address, and we will quote with a local lead time. Sample kits available.',
    ctaPrimary: 'Get a Sample Kit',
    ctaSecondary: 'WhatsApp Us',
    backToHub: 'All coverage areas',
    sharedFaq: (n) => [
      {
        q: `Do you deliver honeycomb pallets to ${n}?`,
        a: `Yes. We manufacture at our Balakong, Selangor plant and deliver honeycomb pallets, boxes and board to ${n} on a scheduled basis, with JIT arrangements available for regular volumes. Contact us with your address and volume for a confirmed lead time.`,
      },
      {
        q: `Are honeycomb pallets supplied in ${n} ISPM-15 exempt?`,
        a: 'Yes. ISPM-15 applies only to solid wood packaging. Paper honeycomb is biologically inert and falls outside the standard entirely, so no heat treatment, fumigation or IPPC marking is required for export from any Malaysian port.',
      },
      {
        q: 'Can you make custom sizes?',
        a: 'Yes. Pallets, crates, edge protectors and inserts are all made to specification. Share your cargo weight, dimensions, stacking plan and transit mode, and our engineers will specify the build around them.',
      },
    ],
  },
  ms: {
    hubBadge: 'Liputan',
    hubTitle: 'Pembekal Papan Honeycomb Seluruh Malaysia',
    hubDesc: 'Papan, peti dan palet honeycomb kertas dihantar ke seluruh Lembah Klang dan seluruh negara dari kilang kami di Balakong, Selangor. Cari kawasan anda untuk masa penghantaran dan nota industri.',
    hubIntro: 'Kami mengeluar di Balakong, Selangor dan menghantar ke seluruh Kuala Lumpur Raya, Selangor serta wilayah perindustrian utama seluruh negara. Pilih kawasan anda di bawah untuk nota penghantaran tempatan, industri yang kami khidmati, dan jawapan khusus lokasi tersebut.',
    hubGroupsLabel: 'Kawasan yang kami khidmati',
    titleFor: (n) => `Pembekal Papan Honeycomb di ${n} | Palet & Peti | phb`,
    descFor: (n, inds) => `Papan honeycomb kertas, peti dan palet dikecualikan ISPM-15 dibekalkan ke ${n}. Berkhidmat kepada ${inds}. Dikeluarkan di Balakong, Selangor dengan penghantaran tempatan pantas.`,
    h1For: (n) => `Pembekal Papan Honeycomb di ${n}`,
    areasLabel: 'Kawasan perindustrian yang kami hantar',
    industriesLabel: 'Industri yang kami khidmati di sini',
    deliveryLabel: 'Penghantaran & masa pendahuluan',
    whyLabel: 'Mengapa pengeluar di sini beralih kepada honeycomb',
    whyIntro: (n) => `Pengeksport dan pengeluar di ${n} datang kepada kami atas empat sebab, lebih kurang mengikut urutan mendesak ini:`,
    benefits: [
      { h: 'Dikecualikan ISPM-15', p: 'Honeycomb kertas lengai secara biologi, jadi palet dan peti tidak memerlukan rawatan haba, fumigasi atau cop IPPC di mana-mana pasaran eksport.' },
      { h: 'Sekitar 80% lebih ringan', p: 'Palet honeycomb beratnya kira-kira 5kg berbanding 25kg untuk kayu, memotong kira-kira 20kg berat tara boleh caj setiap kedudukan palet.' },
      { h: '100% boleh dikitar semula', p: 'Kertas kraft dengan pelekat berasaskan air masuk ke kitar semula kertas biasa, jadi pelanggan anda melupuskannya secara percuma.' },
      { h: 'Dibuat mengikut spesifikasi', p: 'Saiz sel, ketebalan teras dan gred papan ialah parameter pengeluaran, jadi unit berkelakuan boleh diramal pada barisan automasi.' },
    ],
    productsLabel: 'Apa yang kami bekalkan',
    products: [
      { href: '/honeycomb-pallet/', label: 'Palet kertas honeycomb', blurb: 'Dikecualikan ISPM-15, sekitar 5kg, direkayasa mengikut muatan anda.' },
      { href: '/honeycomb-box/', label: 'Peti & kotak honeycomb', blurb: 'Pengganti peti kayu untuk jentera, elektronik dan perabot.' },
      { href: '/honeycomb-panels/', label: 'Panel honeycomb', blurb: 'Panel struktur untuk paparan, perabot dan prototaip.' },
    ],
    faqLabel: 'Soalan lazim',
    nearbyLabel: 'Kawasan berdekatan yang turut kami khidmati',
    ctaTitle: (n) => `Dapatkan sebut harga untuk ${n}`,
    ctaText: 'Hantar dimensi palet atau peti, volum bulanan dan alamat penghantaran anda, dan kami akan beri sebut harga dengan masa pendahuluan tempatan. Kit sampel tersedia.',
    ctaPrimary: 'Dapatkan Kit Sampel',
    ctaSecondary: 'WhatsApp Kami',
    backToHub: 'Semua kawasan liputan',
    sharedFaq: (n) => [
      {
        q: `Adakah anda menghantar palet honeycomb ke ${n}?`,
        a: `Ya. Kami mengeluar di kilang Balakong, Selangor dan menghantar palet, peti dan papan honeycomb ke ${n} secara berjadual, dengan pengaturan JIT tersedia untuk volum tetap. Hubungi kami dengan alamat dan volum anda untuk masa pendahuluan yang disahkan.`,
      },
      {
        q: `Adakah palet honeycomb yang dibekalkan di ${n} dikecualikan ISPM-15?`,
        a: 'Ya. ISPM-15 terpakai hanya pada pembungkusan kayu pejal. Honeycomb kertas lengai secara biologi dan berada di luar skop standard itu, jadi tiada rawatan haba, fumigasi atau tanda IPPC diperlukan untuk eksport dari mana-mana pelabuhan Malaysia.',
      },
      {
        q: 'Bolehkah anda membuat saiz tersuai?',
        a: 'Ya. Palet, peti, pelindung tepi dan sisipan semuanya dibuat mengikut spesifikasi. Kongsikan berat kargo, dimensi, pelan susunan dan mod transit anda, dan jurutera kami akan menetapkan binaannya.',
      },
    ],
  },
  zh: {
    hubBadge: '服务范围',
    hubTitle: '马来西亚全国蜂窝纸板供应商',
    hubDesc: '从雪兰莪州万宜工厂向巴生谷及全国配送蜂窝纸板、蜂窝箱与蜂窝托盘。查看您所在区域的交期与行业说明。',
    hubIntro: '我们在雪兰莪州Balakong设厂，配送覆盖大吉隆坡、雪兰莪州及全国主要工业区。请在下方选择您所在区域，查看本地配送说明、我们在当地服务的行业，以及针对该地区的常见问题。',
    hubGroupsLabel: '我们服务的区域',
    titleFor: (n) => `${n}蜂窝纸板供应商 | 托盘与包装箱 | phb`,
    descFor: (n, inds) => `向${n}供应蜂窝纸板、蜂窝箱及豁免ISPM-15的纸托盘。服务${inds}。雪兰莪州Balakong自有工厂，本地快速配送。`,
    h1For: (n) => `${n}蜂窝纸板供应商`,
    areasLabel: '我们配送的工业区',
    industriesLabel: '我们在当地服务的行业',
    deliveryLabel: '配送与交期',
    whyLabel: '当地制造商为何改用蜂窝',
    whyIntro: (n) => `${n}的出口商和制造商选择我们，通常出于以下四个原因，按紧迫程度排列：`,
    benefits: [
      { h: '豁免ISPM-15', p: '纸蜂窝生物惰性，托盘和包装箱在任何出口市场都无需热处理、熏蒸或IPPC标识。' },
      { h: '轻约80%', p: '蜂窝托盘约5公斤，木托盘约25公斤，每个托盘位减少约20公斤计费皮重。' },
      { h: '100%可回收', p: '牛皮纸配水性胶，进入普通纸类回收，客户免费处置，无需支付填埋或EPR费用。' },
      { h: '按规格制造', p: '孔径、芯层厚度和板材等级都是生产参数，因此产品在自动化产线和受载状态下表现可预测。' },
    ],
    productsLabel: '我们供应的产品',
    products: [
      { href: '/honeycomb-pallet/', label: '蜂窝纸托盘', blurb: '豁免ISPM-15，约5公斤，按您的载荷定制设计。' },
      { href: '/honeycomb-box/', label: '蜂窝箱与蜂窝板条箱', blurb: '机械、电子和家具出口的木箱替代方案。' },
      { href: '/honeycomb-panels/', label: '蜂窝板', blurb: '用于展示、家具和样机制作的结构板材。' },
    ],
    faqLabel: '常见问题',
    nearbyLabel: '我们同样服务的邻近区域',
    ctaTitle: (n) => `获取${n}区域报价`,
    ctaText: '发送您的托盘或箱体尺寸、月度用量和收货地址，我们会连同本地交期一并报价。提供样品套装。',
    ctaPrimary: '获取样品套装',
    ctaSecondary: 'WhatsApp 联系',
    backToHub: '全部服务区域',
    sharedFaq: (n) => [
      {
        q: `你们向${n}配送蜂窝托盘吗？`,
        a: `配送。我们在雪兰莪州Balakong的工厂生产，按排程向${n}配送蜂窝托盘、蜂窝箱和板材，常规用量可安排JIT准时配送。请提供地址和用量，我们将确认交期。`,
      },
      {
        q: `在${n}供应的蜂窝托盘豁免ISPM-15吗？`,
        a: '豁免。ISPM-15仅适用于实木包装。纸蜂窝生物惰性，完全不在该标准范围内，从马来西亚任何港口出口都无需热处理、熏蒸或IPPC标识。',
      },
      {
        q: '可以定制尺寸吗？',
        a: '可以。托盘、箱体、护边和内衬均按规格定制。请提供货物重量、尺寸、堆码方案和运输方式，我们的工程团队将据此设计结构。',
      },
    ],
  },
};
