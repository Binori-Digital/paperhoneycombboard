import type { Location } from './types';

// Locations 13-23: western corridor, northern Klang Valley and out-of-state.

export const locationsB: Location[] = [
  {
    slug: 'subang-jaya',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=75',
    areas: ['Subang Hi-Tech Industrial Park', 'USJ industrial', 'Subang Airport (LTSAAS) zone', 'SS13 estates'],
    nearby: ['petaling-jaya', 'puchong', 'klang'],
    i18n: {
      en: {
        name: 'Subang Jaya',
        blurb: 'Subang pairs the Hi-Tech park\'s electronics and aerospace suppliers with the cargo and MRO ecosystem around Subang Airport, giving the area an unusually strong air-shipment bias.',
        industries: ['aerospace & MRO', 'electronics', 'air cargo services', 'precision components'],
        delivery: 'Next-day standard via NPE/ELITE; deliveries can be timed to airline cut-offs for Subang cargo movements.',
        useCase: 'Air-biased shippers here benefit twice: tare weight savings on every chargeable kilogram, and crating that can be specified to aerospace component profiles without nails or metal fasteners.',
        faq: {
          q: 'Can honeycomb crates be used for aerospace components from Subang?',
          a: 'Yes, as the structural outer packaging: crates and fitments are specified to component weight and geometry, with no metal fasteners to gouge machined surfaces. Where a component has its own preservation or ESD requirements, those inner layers are specified alongside.',
        },
      },
      ms: {
        name: 'Subang Jaya',
        blurb: 'Subang menggandingkan pembekal elektronik dan aeroangkasa taman Hi-Tech dengan ekosistem kargo dan MRO di sekitar Lapangan Terbang Subang, memberi kawasan ini kecenderungan penghantaran udara yang luar biasa kuat.',
        industries: ['aeroangkasa & MRO', 'elektronik', 'perkhidmatan kargo udara', 'komponen persis'],
        delivery: 'Hari berikutnya standard melalui NPE/ELITE; penghantaran boleh ditepati masa potong syarikat penerbangan.',
        useCase: 'Penghantar berat udara di sini mendapat manfaat dua kali: penjimatan berat tara pada setiap kilogram boleh caj, dan peti yang boleh ditetapkan mengikut profil komponen aeroangkasa tanpa paku.',
        faq: {
          q: 'Bolehkah peti honeycomb digunakan untuk komponen aeroangkasa dari Subang?',
          a: 'Ya, sebagai pembungkusan luar struktur: peti dan sisipan ditetapkan mengikut berat dan geometri komponen, tanpa pengikat logam. Keperluan pemeliharaan atau ESD komponen ditetapkan bersama lapisan dalam.',
        },
      },
      zh: {
        name: 'Subang Jaya（梳邦再也）',
        blurb: '梳邦把高科技工业园的电子与航空供应商，与梳邦机场周边的货运和MRO生态圈结合在一起，让这一带对空运的依赖异常突出。',
        industries: ['航空与MRO', '电子', '航空货运服务', '精密零部件'],
        delivery: '经NPE/ELITE标准次日达；可按梳邦货运航班截关时间安排送达。',
        useCase: '偏空运的货主在这里获益两次：每个计费公斤上的皮重节省，以及可按航空部件轮廓定制、无钉无金属件的箱体。',
        faq: {
          q: '蜂窝箱能用于梳邦出港的航空部件吗？',
          a: '能，作为结构性外包装：箱体和内衬按部件重量与几何定制，无金属紧固件，不会划伤精加工表面。部件自身的防护或ESD要求由内层配套指定。',
        },
      },
    },
  },
  {
    slug: 'klang',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=75',
    areas: ['Port Klang (North & West Port)', 'Bukit Rajah', 'Kapar', 'Pandamaran', 'Pulau Indah'],
    nearby: ['selangor', 'subang-jaya', 'petaling-jaya'],
    i18n: {
      en: {
        name: 'Klang',
        blurb: 'Klang is Malaysia\'s gateway: Port Klang\'s North and West Ports plus the manufacturing belts of Bukit Rajah, Kapar and Pulau Indah, where packaging meets customs reality every single day.',
        industries: ['port logistics & forwarding', 'palm oil downstream', 'food & commodities', 'container services'],
        delivery: 'Next-day scheduled runs to port-area warehouses; container-stuffing sites can be supplied direct.',
        useCase: 'This is where ISPM-15 problems physically surface — at the port. Forwarders here switch consolidation and export loads to honeycomb so a single untreated wood pallet can never again hold a container at the gate.',
        faq: {
          q: 'Can you deliver directly to container stuffing operations at Port Klang?',
          a: 'Yes. We deliver to forwarder warehouses and stuffing yards across the port area on scheduled runs, and for regular export programmes we can align deliveries to your stuffing dates.',
        },
      },
      ms: {
        name: 'Klang',
        blurb: 'Klang ialah pintu masuk Malaysia: Pelabuhan Utara dan Barat Port Klang berserta jaluran pembuatan Bukit Rajah, Kapar dan Pulau Indah, tempat pembungkusan bertemu realiti kastam setiap hari.',
        industries: ['logistik pelabuhan & penghantaran', 'hiliran minyak sawit', 'makanan & komoditi', 'perkhidmatan kontena'],
        delivery: 'Laluan berjadual hari berikutnya ke gudang kawasan pelabuhan; tapak pengisian kontena boleh dibekalkan terus.',
        useCase: 'Di sinilah masalah ISPM-15 muncul secara fizikal — di pelabuhan. Penghantar di sini menukar muatan konsolidasi dan eksport kepada honeycomb supaya satu palet kayu tidak dirawat tidak lagi boleh menahan kontena di pintu.',
        faq: {
          q: 'Bolehkah anda menghantar terus ke operasi pengisian kontena di Port Klang?',
          a: 'Ya. Kami menghantar ke gudang penghantar dan halaman pengisian di seluruh kawasan pelabuhan mengikut jadual, dan untuk program eksport tetap kami boleh selaraskan penghantaran dengan tarikh pengisian anda.',
        },
      },
      zh: {
        name: 'Klang（巴生）',
        blurb: '巴生是马来西亚的门户：巴生港北港与西港，加上Bukit Rajah、Kapar和Pulau Indah的制造业带 — 在这里，包装每天都在直面清关现实。',
        industries: ['港口物流与货代', '棕油下游', '食品与大宗商品', '集装箱服务'],
        delivery: '对港区仓库次日定班配送；装柜场地可直送。',
        useCase: 'ISPM-15的问题正是在这里现形 — 在港口。本地货代把拼柜和出口货载改用蜂窝，让一块未处理的木托盘再也无法把整个柜子扣在闸口。',
        faq: {
          q: '可以直接送到巴生港的装柜作业点吗？',
          a: '可以。我们按排程配送至港区各货代仓库和装柜场，常规出口项目可将交付对齐您的装柜日期。',
        },
      },
    },
  },
  {
    slug: 'damansara',
    image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=1600&q=75',
    areas: ['Kota Damansara industrial', 'Ara Damansara', 'Damansara Utama commercial', 'Sungai Buloh fringe'],
    nearby: ['petaling-jaya', 'sungai-buloh', 'subang-jaya'],
    i18n: {
      en: {
        name: 'Damansara',
        blurb: 'The Damansara corridor mixes tech distribution, showroom-backed retailers and marketing operations that ship displays, fixtures and events material as much as they ship product.',
        industries: ['tech distribution', 'retail & showrooms', 'events & displays', 'office relocations'],
        delivery: 'Next-day standard across the corridor via LDP/Penchala.',
        useCase: 'Display and events teams here use honeycomb panels and crates because they are light enough for two-person event crews, printable for branding, and disposable into any paper bin when the campaign ends.',
        faq: {
          q: 'Can honeycomb panels be printed or branded for Damansara retail displays?',
          a: 'Yes. The kraft liner takes print and mounted graphics well, and panels can be die-cut to display shapes. For high-finish retail work, laminated liners are available — share the artwork spec with us.',
        },
      },
      ms: {
        name: 'Damansara',
        blurb: 'Koridor Damansara menggabungkan pengedaran teknologi, peruncit bersandarkan bilik pameran dan operasi pemasaran yang menghantar paparan, lekapan dan bahan acara sebanyak mana mereka menghantar produk.',
        industries: ['pengedaran teknologi', 'runcit & bilik pameran', 'acara & paparan', 'pemindahan pejabat'],
        delivery: 'Hari berikutnya standard di seluruh koridor melalui LDP/Penchala.',
        useCase: 'Pasukan paparan dan acara di sini menggunakan panel dan peti honeycomb kerana cukup ringan untuk krew dua orang, boleh dicetak untuk penjenamaan, dan boleh dilupuskan ke mana-mana tong kertas.',
        faq: {
          q: 'Bolehkah panel honeycomb dicetak atau dijenamakan untuk paparan runcit Damansara?',
          a: 'Ya. Pelapik kraft menerima cetakan dan grafik lekapan dengan baik, dan panel boleh dipotong acuan mengikut bentuk paparan. Untuk kerja runcit kemasan tinggi, pelapik berlamina tersedia.',
        },
      },
      zh: {
        name: 'Damansara（白沙罗）',
        blurb: '白沙罗走廊融合了科技分销、展厅型零售商和营销公司 — 他们运送展示道具、陈列装置和活动物料的频率不亚于运送商品本身。',
        industries: ['科技分销', '零售与展厅', '活动与陈列', '办公室搬迁'],
        delivery: '经LDP/Penchala全走廊标准次日达。',
        useCase: '这里的陈列和活动团队用蜂窝板和蜂窝箱，因为两人小队就能搬动，表面可印刷品牌视觉，活动结束后扔进任何纸类回收桶即可。',
        faq: {
          q: '蜂窝板能为白沙罗的零售陈列做印刷或品牌定制吗？',
          a: '能。牛皮面纸适合印刷和裱贴画面，板材可按陈列造型模切。高端零售项目另有覆膜面纸可选 — 把画面规格发给我们即可。',
        },
      },
    },
  },
  {
    slug: 'sungai-buloh',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=75',
    areas: ['Kampung Baru Sungai Buloh', 'Taman Perindustrian Sungai Buloh', 'Bukit Rahman Putra', 'Kuang fringe'],
    nearby: ['damansara', 'kepong', 'rawang'],
    i18n: {
      en: {
        name: 'Sungai Buloh',
        blurb: 'Sungai Buloh is the Klang Valley\'s furniture town — generations of workshops and factories building sofas, cabinets and custom joinery, much of it heading to export buyers.',
        industries: ['furniture manufacturing', 'upholstery', 'custom joinery', 'timber processing'],
        delivery: 'Next-day standard via MRR2/Guthrie; consolidated furniture-protection orders welcome.',
        useCase: 'Sofa and cabinet makers here buy protection more than pallets: edge protectors, corner blocks and honeycomb sheets between stacked panels, cutting the scuff-and-dent claims that plague furniture freight.',
        faq: {
          q: 'What honeycomb products do Sungai Buloh furniture makers usually order?',
          a: 'The common set is edge protectors and corner blocks for wrapped items, honeycomb sheet as interleaving between stacked panels, and ISPM-15 exempt pallets for export containers. We can quote the set against your product list.',
        },
      },
      ms: {
        name: 'Sungai Buloh',
        blurb: 'Sungai Buloh ialah bandar perabot Lembah Klang — generasi bengkel dan kilang membina sofa, kabinet dan kerja kayu tersuai, kebanyakannya menuju pembeli eksport.',
        industries: ['pembuatan perabot', 'upholsteri', 'kerja kayu tersuai', 'pemprosesan kayu'],
        delivery: 'Hari berikutnya standard melalui MRR2/Guthrie; pesanan perlindungan perabot yang disatukan dialu-alukan.',
        useCase: 'Pembuat sofa dan kabinet di sini membeli perlindungan lebih daripada palet: pelindung tepi, blok sudut dan kepingan honeycomb antara panel bertindan.',
        faq: {
          q: 'Produk honeycomb apa yang biasanya dipesan pembuat perabot Sungai Buloh?',
          a: 'Set lazim ialah pelindung tepi dan blok sudut untuk item berbalut, kepingan honeycomb sebagai lapisan antara panel bertindan, dan palet dikecualikan ISPM-15 untuk kontena eksport.',
        },
      },
      zh: {
        name: 'Sungai Buloh（双溪毛糯）',
        blurb: '双溪毛糯是巴生谷的家具之乡 — 几代人的工场和工厂在这里制作沙发、橱柜和定制木作，其中大量销往出口买家。',
        industries: ['家具制造', '软体家具', '定制木作', '木材加工'],
        delivery: '经MRR2/Guthrie标准次日达；欢迎家具防护类合并订单。',
        useCase: '这里的沙发和橱柜厂商买得更多的是防护而非托盘：护边、护角，以及叠放板件之间的蜂窝隔板 — 专治困扰家具运输的刮擦与磕碰索赔。',
        faq: {
          q: '双溪毛糯的家具厂通常订购哪些蜂窝产品？',
          a: '常见组合是：包装件的护边与护角、叠放板件之间的蜂窝隔板，以及出口整柜用的豁免ISPM-15托盘。我们可按您的产品清单打包报价。',
        },
      },
    },
  },
  {
    slug: 'kepong',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=1600&q=75',
    areas: ['Taman Perindustrian Kepong', 'Kepong Baru industrial', 'Jinjang', 'FRIM fringe'],
    nearby: ['kuala-lumpur', 'sungai-buloh', 'selayang'],
    i18n: {
      en: {
        name: 'Kepong',
        blurb: 'Kepong\'s workshops skew toward printing, plastics and hardware trading — a high-mix, low-volume manufacturing pocket in KL\'s north-west with strong wholesale distribution ties.',
        industries: ['printing & paper converting', 'plastics', 'hardware & trading', 'wholesale distribution'],
        delivery: 'Next-day standard via MRR2/DUKE.',
        useCase: 'Printers and converters here appreciate a supplier who speaks paper: honeycomb sheet for stiffening and interleaving, plus lightweight pallets that keep finished print flat and clean.',
        faq: {
          q: 'Can honeycomb sheet be cut to custom sizes for Kepong print jobs?',
          a: 'Yes. Sheet is cut to size as standard, with thickness from around 10mm upward. Tell us the format and grammage of the print stacks it needs to carry and we will recommend a grade.',
        },
      },
      ms: {
        name: 'Kepong',
        blurb: 'Bengkel Kepong cenderung kepada percetakan, plastik dan perdagangan perkakasan — poket pembuatan campuran tinggi, volum rendah di barat laut KL dengan ikatan pengedaran borong kukuh.',
        industries: ['percetakan & penukaran kertas', 'plastik', 'perkakasan & perdagangan', 'pengedaran borong'],
        delivery: 'Hari berikutnya standard melalui MRR2/DUKE.',
        useCase: 'Pencetak dan penukar di sini menghargai pembekal yang faham kertas: kepingan honeycomb untuk penegangan dan lapisan, berserta palet ringan yang mengekalkan cetakan siap rata dan bersih.',
        faq: {
          q: 'Bolehkah kepingan honeycomb dipotong mengikut saiz tersuai untuk kerja cetak Kepong?',
          a: 'Ya. Kepingan dipotong mengikut saiz sebagai standard, dengan ketebalan dari sekitar 10mm ke atas. Beritahu kami format dan gramatur timbunan cetakan yang perlu ditanggungnya.',
        },
      },
      zh: {
        name: 'Kepong（甲洞）',
        blurb: '甲洞的工场以印刷、塑料和五金贸易为主 — 这是吉隆坡西北部一个高品类、小批量的制造聚落，与批发分销网络联系紧密。',
        industries: ['印刷与纸品加工', '塑料', '五金与贸易', '批发分销'],
        delivery: '经MRR2/DUKE标准次日达。',
        useCase: '这里的印刷厂和加工厂欣赏一个懂纸的供应商：用蜂窝隔板做补强和分层，用轻量托盘让成品印刷件保持平整洁净。',
        faq: {
          q: '蜂窝隔板能为甲洞的印刷业务定制尺寸吗？',
          a: '能。隔板按尺寸裁切是标准服务，厚度约10mm起。告诉我们需承载的印刷品幅面与克重，我们会推荐合适等级。',
        },
      },
    },
  },
  {
    slug: 'selayang',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=75',
    areas: ['Taman Perindustrian Selayang', 'Batu Caves industrial', 'Taman Industri Bolton'],
    nearby: ['kepong', 'rawang', 'kuala-lumpur'],
    i18n: {
      en: {
        name: 'Selayang',
        blurb: 'Selayang and the Batu Caves belt hold metalworking shops, machinery dealers and building-material suppliers serving the northern KL construction economy.',
        industries: ['metalworking', 'machinery trading', 'building materials', 'automotive workshops'],
        delivery: 'Next-day standard via MRR2.',
        useCase: 'Machinery dealers here crate refurbished equipment for resale nationwide; honeycomb crates cut the freight weight and skip the wood treatment question when a unit unexpectedly sells overseas.',
        faq: {
          q: 'Can a Selayang machinery dealer get one-off crates for odd-sized equipment?',
          a: 'Yes. One-off and small-batch crates are routine: send the machine dimensions, weight and any lift points, and we will build to it. No minimum production run applies to crating.',
        },
      },
      ms: {
        name: 'Selayang',
        blurb: 'Selayang dan jaluran Batu Caves memuatkan bengkel kerja logam, peniaga jentera dan pembekal bahan binaan yang melayani ekonomi pembinaan utara KL.',
        industries: ['kerja logam', 'perdagangan jentera', 'bahan binaan', 'bengkel automotif'],
        delivery: 'Hari berikutnya standard melalui MRR2.',
        useCase: 'Peniaga jentera di sini memetikan peralatan diperbaharui untuk jualan semula seluruh negara; peti honeycomb memotong berat tambang dan melangkau soalan rawatan kayu.',
        faq: {
          q: 'Bolehkah peniaga jentera Selayang mendapat peti sekali buat untuk peralatan bersaiz luar biasa?',
          a: 'Ya. Peti sekali buat dan kelompok kecil adalah rutin: hantar dimensi mesin, berat dan titik angkat, dan kami akan bina mengikutnya.',
        },
      },
      zh: {
        name: 'Selayang（士拉央）',
        blurb: '士拉央和黑风洞工业带聚集着金属加工厂、机械经销商和建材供应商，服务吉隆坡北部的建筑经济。',
        industries: ['金属加工', '机械贸易', '建筑材料', '汽车工场'],
        delivery: '经MRR2标准次日达。',
        useCase: '这里的机械经销商为翻新设备装箱销往全国；蜂窝箱既减运费重量，又在设备意外卖到海外时免去木材处理的麻烦。',
        faq: {
          q: '士拉央的机械经销商能订异形设备的单次包装箱吗？',
          a: '能。单件和小批量箱体是常规业务：发来设备尺寸、重量和吊点位置，我们按此制作。包装箱不设最低生产批量。',
        },
      },
    },
  },
  {
    slug: 'rawang',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=75',
    areas: ['Rawang Integrated Industrial Park', 'Kawasan Perindustrian Rawang', 'Bandar Baru Rawang', 'Kundang'],
    nearby: ['selayang', 'sungai-buloh', 'selangor'],
    i18n: {
      en: {
        name: 'Rawang',
        blurb: 'Rawang anchors the northern Selangor heavy-side economy: ceramics, steel, cables and building products moving out by the lorry-load along the PLUS north-south spine.',
        industries: ['ceramics & tiles', 'steel & cables', 'building products', 'heavy manufacturing'],
        delivery: 'Next-day scheduled runs up the PLUS corridor.',
        useCase: 'Heavy-side producers use honeycomb where it counts: layer pads between ceramic courses, edge protection on banded steel, and pallets for the lighter finished-goods lines rather than raw material.',
        faq: {
          q: 'Is honeycomb strong enough for Rawang\'s heavy products like tiles?',
          a: 'Used correctly, yes: as layer pads, separators and edge protection, honeycomb handles compression well. For extremely dense loads like full tile pallets, we will honestly spec a hybrid — honeycomb protection over a base suited to the point loads — rather than overclaim.',
        },
      },
      ms: {
        name: 'Rawang',
        blurb: 'Rawang menjadi sauh ekonomi berat utara Selangor: seramik, keluli, kabel dan produk binaan bergerak keluar sepanjang tulang belakang utara-selatan PLUS.',
        industries: ['seramik & jubin', 'keluli & kabel', 'produk binaan', 'pembuatan berat'],
        delivery: 'Laluan berjadual hari berikutnya menaiki koridor PLUS.',
        useCase: 'Pengeluar berat menggunakan honeycomb di tempat yang berbaloi: pad lapisan antara lapisan seramik, perlindungan tepi pada keluli berjalur, dan palet untuk barisan barangan siap yang lebih ringan.',
        faq: {
          q: 'Adakah honeycomb cukup kuat untuk produk berat Rawang seperti jubin?',
          a: 'Digunakan dengan betul, ya: sebagai pad lapisan, pemisah dan perlindungan tepi, honeycomb mengendalikan mampatan dengan baik. Untuk muatan sangat tumpat seperti palet jubin penuh, kami akan secara jujur menetapkan hibrid.',
        },
      },
      zh: {
        name: 'Rawang（万挠）',
        blurb: '万挠支撑着雪兰莪北部的重工业经济：陶瓷、钢材、电缆和建材沿PLUS南北大动脉整车整车地发运。',
        industries: ['陶瓷与瓷砖', '钢材与电缆', '建筑产品', '重型制造'],
        delivery: '沿PLUS走廊次日定班配送。',
        useCase: '重工企业把蜂窝用在刀刃上：瓷砖层间的隔垫、捆扎钢材的护边，以及较轻的成品线托盘 — 而不是原材料端。',
        faq: {
          q: '蜂窝对万挠的瓷砖这类重货够结实吗？',
          a: '用对场景就够：作层间垫、隔板和护边时，蜂窝抗压表现很好。至于整托瓷砖这类极高密度载荷，我们会诚实地给出混合方案 — 蜂窝防护加适配点载荷的承载底座 — 而不是夸大。',
        },
      },
    },
  },
  {
    slug: 'ipoh',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=75',
    areas: ['Tasek Industrial Estate', 'Bercham', 'Silibin', 'Kawasan Perindustrian Jelapang'],
    nearby: ['rawang', 'penang', 'selangor'],
    i18n: {
      en: {
        name: 'Ipoh',
        blurb: 'Ipoh\'s Tasek and Jelapang estates keep Perak\'s manufacturing tradition running: food and confectionery, ceramics, electronics and engineering works with good PLUS highway access south.',
        industries: ['food & confectionery', 'ceramics', 'electronics', 'engineering works'],
        delivery: 'Scheduled deliveries 2-3 times weekly up the PLUS corridor; plan 2-4 working days lead time. Consolidated orders are the economical pattern here.',
        useCase: 'Perak food producers shipping south and overseas consolidate monthly honeycomb orders — pallets plus cartons-worth of protection — into single lorry loads, keeping landed cost close to Klang Valley rates.',
        faq: {
          q: 'What is the practical minimum order for Ipoh deliveries?',
          a: 'Because Ipoh runs are consolidated, orders that fill meaningful lorry space get the best landed cost — typically a mixed load of pallets and protection rather than a handful of units. We will advise the economical quantity at quotation.',
        },
      },
      ms: {
        name: 'Ipoh',
        blurb: 'Estet Tasek dan Jelapang Ipoh mengekalkan tradisi pembuatan Perak: makanan dan konfeksi, seramik, elektronik dan kerja kejuruteraan dengan akses lebuh raya PLUS yang baik ke selatan.',
        industries: ['makanan & konfeksi', 'seramik', 'elektronik', 'kerja kejuruteraan'],
        delivery: 'Penghantaran berjadual 2-3 kali seminggu menaiki koridor PLUS; rancang masa pendahuluan 2-4 hari bekerja.',
        useCase: 'Pengeluar makanan Perak yang menghantar ke selatan dan luar negara menyatukan pesanan honeycomb bulanan ke dalam muatan lori tunggal, mengekalkan kos mendarat hampir dengan kadar Lembah Klang.',
        faq: {
          q: 'Apakah pesanan minimum praktikal untuk penghantaran Ipoh?',
          a: 'Kerana laluan Ipoh disatukan, pesanan yang mengisi ruang lori bermakna mendapat kos mendarat terbaik — biasanya muatan campuran palet dan perlindungan. Kami akan nasihatkan kuantiti ekonomik semasa sebut harga.',
        },
      },
      zh: {
        name: 'Ipoh（怡保）',
        blurb: '怡保的打昔和贞德隆工业区延续着霹雳州的制造传统：食品糖果、陶瓷、电子和工程加工，经PLUS高速南下交通便利。',
        industries: ['食品与糖果', '陶瓷', '电子', '工程加工'],
        delivery: '沿PLUS走廊每周2-3班定期配送；请预留2-4个工作日交期。合并下单是这里最经济的方式。',
        useCase: '霹雳的食品厂南运和出口时，把每月的蜂窝需求 — 托盘加整批防护材料 — 合并成一车发运，落地成本可贴近巴生谷价格。',
        faq: {
          q: '怡保配送的实际起订量是多少？',
          a: '怡保线路走合并配送，能装满有效车厢空间的订单落地成本最优 — 通常是托盘加防护材料的混合整车，而非零星几件。报价时我们会建议最经济的数量。',
        },
      },
    },
  },
  {
    slug: 'penang',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=75',
    areas: ['Bayan Lepas FIZ', 'Prai Industrial Estate', 'Batu Kawan Industrial Park', 'Bukit Minyak'],
    nearby: ['ipoh', 'selangor', 'klang'],
    i18n: {
      en: {
        name: 'Penang',
        blurb: 'Penang is Malaysia\'s silicon shore: Bayan Lepas and Batu Kawan host the semiconductor, E&E and medical device plants whose output flies out of PEN airport nightly on chargeable-weight economics.',
        industries: ['semiconductor & E&E', 'medical devices', 'precision instruments', 'air-freight exports'],
        delivery: 'Weekly scheduled consignments north; larger programmes can justify dedicated runs. Plan 3-5 working days.',
        useCase: 'E&E exporters flying product out of Penang gain the most from tare-weight economics of any customer group we serve — and the splinter-free, fastener-free handling suits component environments.',
        faq: {
          q: 'Is delivery to Penang economical given the distance from your Selangor plant?',
          a: 'For consolidated weekly consignments, yes — the freight saving on air-shipped product typically dwarfs the delivery cost difference. For very large recurring volumes we will discuss dedicated logistics at quotation.',
        },
      },
      ms: {
        name: 'Pulau Pinang',
        blurb: 'Pulau Pinang ialah pantai silikon Malaysia: Bayan Lepas dan Batu Kawan menempatkan kilang semikonduktor, E&E dan peranti perubatan yang keluarannya terbang keluar dari lapangan terbang PEN setiap malam.',
        industries: ['semikonduktor & E&E', 'peranti perubatan', 'instrumen persis', 'eksport kargo udara'],
        delivery: 'Konsainmen berjadual mingguan ke utara; program lebih besar boleh mewajarkan laluan khusus. Rancang 3-5 hari bekerja.',
        useCase: 'Pengeksport E&E yang menerbangkan produk keluar dari Pulau Pinang mendapat manfaat terbesar daripada ekonomi berat tara — dan pengendalian tanpa serpihan sesuai dengan persekitaran komponen.',
        faq: {
          q: 'Adakah penghantaran ke Pulau Pinang ekonomik memandangkan jarak dari kilang Selangor anda?',
          a: 'Untuk konsainmen mingguan disatukan, ya — penjimatan tambang pada produk dihantar udara biasanya jauh melebihi perbezaan kos penghantaran.',
        },
      },
      zh: {
        name: 'Penang（槟城）',
        blurb: '槟城是马来西亚的硅岸：峇六拜和峇都交湾聚集着半导体、电子电气和医疗器械工厂，产品每晚从槟城机场按计费重量飞向全球。',
        industries: ['半导体与电子电气', '医疗器械', '精密仪器', '空运出口'],
        delivery: '每周定班北上发运；量大的项目可安排专车。请预留3-5个工作日。',
        useCase: '从槟城空运出货的电子出口商，是我们所有客户群中从皮重经济学获益最大的一批 — 无木刺、无紧固件的特性也契合元器件作业环境。',
        faq: {
          q: '从雪兰莪工厂送到槟城，距离上划算吗？',
          a: '按每周合并发运，划算 — 空运产品上省下的运费通常远超配送成本差。对量大的长期项目，报价时我们会讨论专属物流安排。',
        },
      },
    },
  },
  {
    slug: 'johor',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=75',
    areas: ['Pasir Gudang', 'Senai Airport City', 'Tampoi', 'Iskandar Puteri (SiLC)', 'Kulai'],
    nearby: ['melaka', 'selangor', 'klang'],
    i18n: {
      en: {
        name: 'Johor',
        blurb: 'Johor runs Malaysia\'s southern export engine: Pasir Gudang\'s port and petrochemical belt, Senai\'s cargo hub, and the furniture and E&E clusters feeding Singapore across the Causeway daily.',
        industries: ['furniture exports', 'E&E manufacturing', 'petrochemical support', 'Singapore cross-border logistics'],
        delivery: 'Scheduled weekly runs south; Singapore-bound programmes can be supplied through Johor consolidation. Plan 3-5 working days.',
        useCase: 'Johor furniture exporters shipping via Singapore and Pasir Gudang were among the first asking us for ISPM-15 exempt pallets — the twin-port routine of treatment certificates finally made wood more paperwork than it was worth.',
        faq: {
          q: 'Can you support Singapore-bound shipments from Johor?',
          a: 'Yes. Honeycomb packaging crosses into Singapore with no phytosanitary documentation because it is outside ISPM-15, which simplifies daily Causeway logistics. Delivery into Johor is scheduled weekly, with consolidation for cross-border programmes.',
        },
      },
      ms: {
        name: 'Johor',
        blurb: 'Johor menggerakkan enjin eksport selatan Malaysia: jaluran pelabuhan dan petrokimia Pasir Gudang, hab kargo Senai, dan kelompok perabot serta E&E yang membekal Singapura merentasi Tambak setiap hari.',
        industries: ['eksport perabot', 'pembuatan E&E', 'sokongan petrokimia', 'logistik rentas sempadan Singapura'],
        delivery: 'Laluan mingguan berjadual ke selatan; program menuju Singapura boleh dibekalkan melalui penyatuan Johor. Rancang 3-5 hari bekerja.',
        useCase: 'Pengeksport perabot Johor yang menghantar melalui Singapura dan Pasir Gudang antara yang terawal meminta palet dikecualikan ISPM-15 daripada kami.',
        faq: {
          q: 'Bolehkah anda menyokong penghantaran menuju Singapura dari Johor?',
          a: 'Ya. Pembungkusan honeycomb melintasi Singapura tanpa dokumentasi fitosanitasi kerana ia di luar ISPM-15, yang memudahkan logistik Tambak harian.',
        },
      },
      zh: {
        name: 'Johor（柔佛）',
        blurb: '柔佛驱动着马来西亚的南部出口引擎：巴西古当的港口与石化带、士乃的货运枢纽，以及每天经长堤向新加坡供货的家具与电子集群。',
        industries: ['家具出口', '电子电气制造', '石化配套', '新加坡跨境物流'],
        delivery: '每周定班南下；新加坡方向的项目可经柔佛合并供应。请预留3-5个工作日。',
        useCase: '经新加坡和巴西古当出货的柔佛家具出口商，是最早向我们要豁免ISPM-15托盘的客户群 — 双港口的处理证书流程，终于让木托盘的文书成本高过了它本身的价值。',
        faq: {
          q: '能支持从柔佛发往新加坡的货运吗？',
          a: '能。蜂窝包装不在ISPM-15范围内，进入新加坡无需植检文件，让每日长堤物流更简单。柔佛境内每周定班配送，跨境项目可合并安排。',
        },
      },
    },
  },
  {
    slug: 'melaka',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600&q=75',
    areas: ['Batu Berendam FTZ', 'Ayer Keroh Industrial Estate', 'Alor Gajah (AMJ belt)', 'Tanjung Kling'],
    nearby: ['johor', 'selangor', 'kuala-lumpur'],
    i18n: {
      en: {
        name: 'Melaka',
        blurb: 'Melaka\'s Batu Berendam free trade zone and Ayer Keroh estates run a focused export economy: semiconductor assembly, automotive electronics and wire harness plants shipping worldwide.',
        industries: ['semiconductor assembly', 'automotive electronics', 'wire harness', 'consumer electronics'],
        delivery: 'Scheduled runs 1-2 times weekly down the PLUS/AMJ corridor; plan 2-4 working days.',
        useCase: 'Melaka\'s automotive electronics plants ship trays and reels that hate two things: shock and contamination. Die-cut honeycomb fitments hold trays firm, and the material sheds no debris into the product stream.',
        faq: {
          q: 'Can honeycomb fitments be designed around tray and reel packaging used in Melaka plants?',
          a: 'Yes. Fitments are die-cut to your tray or reel dimensions so they nest firmly inside the outer crate, with layer separation as needed. Send tray drawings or samples and we will design around them.',
        },
      },
      ms: {
        name: 'Melaka',
        blurb: 'Zon perdagangan bebas Batu Berendam dan estet Ayer Keroh Melaka menjalankan ekonomi eksport fokus: pemasangan semikonduktor, elektronik automotif dan kilang abah-abah wayar menghantar ke seluruh dunia.',
        industries: ['pemasangan semikonduktor', 'elektronik automotif', 'abah-abah wayar', 'elektronik pengguna'],
        delivery: 'Laluan berjadual 1-2 kali seminggu menuruni koridor PLUS/AMJ; rancang 2-4 hari bekerja.',
        useCase: 'Kilang elektronik automotif Melaka menghantar dulang dan gelendong yang membenci dua perkara: kejutan dan pencemaran. Sisipan honeycomb potong acuan memegang dulang dengan teguh.',
        faq: {
          q: 'Bolehkah sisipan honeycomb direka mengikut pembungkusan dulang dan gelendong kilang Melaka?',
          a: 'Ya. Sisipan dipotong acuan mengikut dimensi dulang atau gelendong anda supaya tersarang teguh dalam peti luar. Hantar lukisan dulang atau sampel dan kami akan reka mengikutnya.',
        },
      },
      zh: {
        name: 'Melaka（马六甲）',
        blurb: '马六甲的峇株安南自贸区和爱极乐工业区经营着高度聚焦的出口经济：半导体封装、汽车电子和线束工厂向全球发货。',
        industries: ['半导体封装', '汽车电子', '线束', '消费电子'],
        delivery: '沿PLUS/AMJ走廊每周1-2班定期配送；请预留2-4个工作日。',
        useCase: '马六甲的汽车电子厂出货的料盘和卷盘最怕两样：冲击与污染。模切蜂窝内衬把料盘固定牢靠，而且这种材料不会向产品流掉落任何碎屑。',
        faq: {
          q: '蜂窝内衬能按马六甲工厂的料盘和卷盘包装设计吗？',
          a: '能。内衬按您的料盘或卷盘尺寸模切，在外箱内牢固嵌套，并可按需分层。发来料盘图纸或样品，我们据此设计。',
        },
      },
    },
  },
];
