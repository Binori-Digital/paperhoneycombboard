import type { Location } from './types';

// Locations 1-12: Balakong home base and the eastern/central Klang Valley.

export const locationsA: Location[] = [
  {
    slug: 'balakong',
    image: '/media/hero-poster.jpg',
    areas: ['Taman Perindustrian Balakong', 'Cheras Jaya', 'Taming Jaya', 'Balakong Jaya'],
    nearby: ['cheras', 'kajang', 'serdang'],
    i18n: {
      en: {
        name: 'Balakong',
        blurb: 'Balakong is where we manufacture. Our plant sits in Taming Jaya, in the middle of one of the Klang Valley\'s densest light-industrial belts — metal fabrication, plastics moulding, printing and packaging converters all within a few kilometres.',
        industries: ['metal fabrication', 'plastics & moulding', 'printing & converting', 'machinery workshops'],
        delivery: 'Same-day and next-day delivery for most orders — you are our home ground. Factory collection is also welcome by appointment.',
        useCase: 'Local workshops use our board for machine crating and edge protection, and switch pallet supply to us because delivery is measured in hours rather than days: no buffer stock needed, no storage space consumed.',
        faq: {
          q: 'Can I collect from your Balakong factory directly?',
          a: 'Yes. Collection from No.13, Jalan Taming P/1, Taming Jaya is welcome by appointment during business hours (Mon-Fri 9am-5pm, Sat 9am-1pm). For regular volumes, scheduled delivery is usually more economical for you.',
        },
      },
      ms: {
        name: 'Balakong',
        blurb: 'Balakong ialah tempat kami mengeluar. Kilang kami terletak di Taming Jaya, di tengah salah satu jaluran perindustrian ringan terpadat di Lembah Klang — fabrikasi logam, pengacuan plastik, percetakan dan penukar pembungkusan semuanya dalam beberapa kilometer.',
        industries: ['fabrikasi logam', 'plastik & pengacuan', 'percetakan & penukaran', 'bengkel jentera'],
        delivery: 'Penghantaran hari sama dan hari berikutnya untuk kebanyakan pesanan — anda di kawasan kami sendiri. Kutipan kilang juga dialu-alukan dengan temu janji.',
        useCase: 'Bengkel tempatan menggunakan papan kami untuk peti jentera dan perlindungan tepi, dan menukar bekalan palet kepada kami kerana penghantaran dikira dalam jam dan bukan hari.',
        faq: {
          q: 'Bolehkah saya mengutip terus dari kilang Balakong anda?',
          a: 'Ya. Kutipan dari No.13, Jalan Taming P/1, Taming Jaya dialu-alukan dengan temu janji pada waktu perniagaan (Isnin-Jumaat 9am-5pm, Sabtu 9am-1pm). Untuk volum tetap, penghantaran berjadual biasanya lebih menjimatkan.',
        },
      },
      zh: {
        name: 'Balakong（无拉港）',
        blurb: '无拉港正是我们的生产基地。工厂位于Taming Jaya，地处巴生谷最密集的轻工业带之一 — 金属加工、塑料成型、印刷和包装加工厂都在数公里范围内。',
        industries: ['金属加工', '塑料与模具', '印刷与加工', '机械工场'],
        delivery: '大多数订单当天或次日送达 — 这里是我们的主场。也欢迎预约后到厂自提。',
        useCase: '本地工场用我们的板材做机器包装箱和护边，并把托盘供应转给我们，因为交货以小时而非天计算：无需备安全库存，不占仓储空间。',
        faq: {
          q: '可以直接到你们无拉港工厂自提吗？',
          a: '可以。欢迎预约后在营业时间（周一至五9am-5pm，周六9am-1pm）到No.13, Jalan Taming P/1, Taming Jaya自提。常规用量下，排程配送通常对您更划算。',
        },
      },
    },
  },
  {
    slug: 'cheras',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=1600&q=75',
    areas: ['Taman Perindustrian Cheras Jaya', 'Bandar Tun Hussein Onn', 'Taman Connaught', 'Alam Damai'],
    nearby: ['balakong', 'kajang', 'kuala-lumpur'],
    i18n: {
      en: {
        name: 'Cheras',
        blurb: 'Cheras runs straight into our doorstep — Cheras Jaya industrial park borders our Balakong plant. The area mixes SME manufacturers, food producers and a large base of e-commerce and distribution operators.',
        industries: ['SME manufacturing', 'food production', 'e-commerce fulfilment', 'furniture workshops'],
        delivery: 'Same-day and next-day delivery. Cheras Jaya addresses are effectively local runs for our trucks.',
        useCase: 'E-commerce and food operators here mostly take our boxes and lightweight pallets for domestic distribution, where the 5kg pallet weight speeds manual loading and cuts lorry payload waste.',
        faq: {
          q: 'Do you supply small volumes for SME businesses in Cheras?',
          a: 'Yes. Because Cheras is a local run for us, we can economically deliver smaller mixed orders — a pallet stack plus boxes and edge protectors on one lorry. Minimum order details are confirmed at quotation.',
        },
      },
      ms: {
        name: 'Cheras',
        blurb: 'Cheras bersambung terus ke depan pintu kami — taman perindustrian Cheras Jaya bersempadan dengan kilang Balakong kami. Kawasan ini menggabungkan pengeluar PKS, pengeluar makanan dan pangkalan besar operator e-dagang dan pengedaran.',
        industries: ['pembuatan PKS', 'pengeluaran makanan', 'pemenuhan e-dagang', 'bengkel perabot'],
        delivery: 'Penghantaran hari sama dan hari berikutnya. Alamat Cheras Jaya adalah laluan tempatan bagi lori kami.',
        useCase: 'Operator e-dagang dan makanan di sini kebanyakannya mengambil kotak dan palet ringan kami untuk pengedaran domestik, di mana berat palet 5kg mempercepat pemuatan manual.',
        faq: {
          q: 'Adakah anda membekalkan volum kecil untuk perniagaan PKS di Cheras?',
          a: 'Ya. Kerana Cheras ialah laluan tempatan bagi kami, kami boleh menghantar pesanan campuran yang lebih kecil secara ekonomik — susunan palet berserta kotak dan pelindung tepi dalam satu lori.',
        },
      },
      zh: {
        name: 'Cheras（蕉赖）',
        blurb: '蕉赖与我们仅一步之遥 — 蕉赖再也工业区与我们的无拉港工厂接壤。这里聚集了中小制造商、食品厂，以及庞大的电商与配送企业群。',
        industries: ['中小型制造', '食品生产', '电商仓配', '家具工场'],
        delivery: '当天或次日送达。蕉赖再也的地址对我们的货车而言就是本地短驳。',
        useCase: '这里的电商和食品企业主要采购我们的纸箱和轻量托盘用于国内配送 — 5公斤的托盘让人工装卸更快，也减少货车载重浪费。',
        faq: {
          q: '你们为蕉赖的中小企业供应小批量吗？',
          a: '供应。蕉赖对我们是本地线路，小批量混合订单也能经济配送 — 一车可同时装托盘、纸箱和护边。起订量在报价时确认。',
        },
      },
    },
  },
  {
    slug: 'kajang',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=75',
    areas: ['Kajang Perdana', 'Sungai Chua', 'Bandar Teknologi Kajang', 'Taman Perindustrian Mega'],
    nearby: ['balakong', 'semenyih', 'bangi'],
    i18n: {
      en: {
        name: 'Kajang',
        blurb: 'Kajang\'s industrial estates — Sungai Chua, Kajang Perdana and Bandar Teknologi — hold a dense mix of furniture makers, metal stamping plants and building-product manufacturers, minutes from our plant.',
        industries: ['furniture manufacturing', 'metal stamping', 'building products', 'plastics'],
        delivery: 'Next-day delivery as standard; same-day often possible for orders confirmed before noon.',
        useCase: 'Furniture exporters here use our edge protectors and corner blocks to cut corner-damage claims, and switch to honeycomb pallets for container loads where every kilogram of tare weight is chargeable.',
        faq: {
          q: 'Can you supply furniture-specific protection in Kajang?',
          a: 'Yes — edge protectors, corner blocks and die-cut fitments are a large share of what we deliver into Kajang\'s furniture estates. Send a product drawing or sample and we will spec the protection set around it.',
        },
      },
      ms: {
        name: 'Kajang',
        blurb: 'Estet perindustrian Kajang — Sungai Chua, Kajang Perdana dan Bandar Teknologi — memuatkan campuran padat pembuat perabot, kilang penekan logam dan pengeluar produk binaan, beberapa minit dari kilang kami.',
        industries: ['pembuatan perabot', 'penekan logam', 'produk binaan', 'plastik'],
        delivery: 'Penghantaran hari berikutnya sebagai standard; hari sama sering boleh untuk pesanan disahkan sebelum tengah hari.',
        useCase: 'Pengeksport perabot di sini menggunakan pelindung tepi dan blok sudut kami untuk memotong tuntutan kerosakan sudut, dan beralih kepada palet honeycomb untuk muatan kontena.',
        faq: {
          q: 'Bolehkah anda membekalkan perlindungan khusus perabot di Kajang?',
          a: 'Ya — pelindung tepi, blok sudut dan sisipan potong acuan ialah sebahagian besar yang kami hantar ke estet perabot Kajang. Hantar lukisan produk atau sampel dan kami akan tetapkan set perlindungannya.',
        },
      },
      zh: {
        name: 'Kajang（加影）',
        blurb: '加影的工业区 — Sungai Chua、Kajang Perdana和Bandar Teknologi — 密集分布着家具厂、金属冲压厂和建材制造商，距我们工厂仅数分钟车程。',
        industries: ['家具制造', '金属冲压', '建筑材料', '塑料制品'],
        delivery: '标准次日达；中午前确认的订单通常可当天送达。',
        useCase: '这里的家具出口商用我们的护边和护角降低棱角货损索赔，并在整柜出货中改用蜂窝托盘 — 因为每一公斤皮重都在计费。',
        faq: {
          q: '你们能在加影供应家具专用防护吗？',
          a: '能 — 护边、护角和模切内衬是我们向加影家具工业区交付的主要品类。发来产品图纸或样品，我们会为其配置整套防护方案。',
        },
      },
    },
  },
  {
    slug: 'serdang',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=75',
    areas: ['Seri Kembangan', 'Taman Perindustrian Serdang Jaya', 'Taman Perindustrian UEP', 'Bukit Serdang'],
    nearby: ['balakong', 'puchong', 'cheras'],
    i18n: {
      en: {
        name: 'Serdang',
        blurb: 'Serdang and Seri Kembangan sit between our plant and the Puchong corridor, with logistics depots, food processors and electronics assemblers packed around the Besraya and SILK highways.',
        industries: ['logistics & 3PL', 'food processing', 'electronics assembly', 'trading & distribution'],
        delivery: 'Same-day or next-day — Serdang is one of our shortest delivery runs after Balakong and Cheras.',
        useCase: '3PL warehouses here take pallets on standing weekly schedules, and food processors use our boxes because paper packaging avoids the mould and splinter risks wood brings into food-grade areas.',
        faq: {
          q: 'Can you deliver on a fixed weekly schedule to Serdang warehouses?',
          a: 'Yes. Standing weekly or twice-weekly deliveries are common for Serdang and Seri Kembangan logistics operators, and JIT top-ups are practical given the short distance from our plant.',
        },
      },
      ms: {
        name: 'Serdang',
        blurb: 'Serdang dan Seri Kembangan terletak antara kilang kami dan koridor Puchong, dengan depoh logistik, pemproses makanan dan pemasang elektronik tersusun di sekitar lebuh raya Besraya dan SILK.',
        industries: ['logistik & 3PL', 'pemprosesan makanan', 'pemasangan elektronik', 'perdagangan & pengedaran'],
        delivery: 'Hari sama atau hari berikutnya — Serdang antara laluan penghantaran terpendek kami selepas Balakong dan Cheras.',
        useCase: 'Gudang 3PL di sini mengambil palet mengikut jadual mingguan tetap, dan pemproses makanan menggunakan kotak kami kerana pembungkusan kertas mengelakkan risiko kulat dan serpihan.',
        faq: {
          q: 'Bolehkah anda menghantar mengikut jadual mingguan tetap ke gudang Serdang?',
          a: 'Ya. Penghantaran mingguan atau dua kali seminggu adalah lazim bagi operator logistik Serdang dan Seri Kembangan, dan tambahan JIT praktikal memandangkan jarak pendek dari kilang kami.',
        },
      },
      zh: {
        name: 'Serdang（沙登）',
        blurb: '沙登与史里肯邦安位于我们工厂与蒲种走廊之间，Besraya和SILK高速沿线密布物流仓储、食品加工和电子组装企业。',
        industries: ['物流与第三方仓储', '食品加工', '电子组装', '贸易与分销'],
        delivery: '当天或次日达 — 沙登是我们继无拉港、蕉赖之后最短的配送线路之一。',
        useCase: '这里的3PL仓库按每周固定排程进托盘；食品加工厂选用我们的纸箱，因为纸包装避免了木材带入食品级区域的霉变与木刺风险。',
        faq: {
          q: '可以按每周固定排程向沙登仓库送货吗？',
          a: '可以。每周一次或两次的固定配送是沙登、史里肯邦安物流企业的常见安排；距离近，JIT补货也切实可行。',
        },
      },
    },
  },
  {
    slug: 'kuala-lumpur',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=75',
    areas: ['Chan Sow Lin', 'Segambut', 'Bandar Tun Razak', 'Jalan Ipoh industrial belt'],
    nearby: ['cheras', 'petaling-jaya', 'kepong'],
    i18n: {
      en: {
        name: 'Kuala Lumpur',
        blurb: 'KL\'s remaining industrial pockets — Chan Sow Lin, Segambut and the Jalan Ipoh belt — lean toward printing, F&B production, trading houses and urban fulfilment centres feeding the city.',
        industries: ['printing & publishing', 'F&B production', 'urban fulfilment', 'trading & exports'],
        delivery: 'Next-day delivery citywide; timed deliveries available for inner-city docks with loading restrictions.',
        useCase: 'City operators value the one-person handling most: a 5kg pallet moves through tight loading bays and service lifts that a 25kg timber pallet makes genuinely dangerous.',
        faq: {
          q: 'Can you handle deliveries to inner-city KL locations with restricted loading bays?',
          a: 'Yes. We schedule timed deliveries for addresses with dock restrictions or off-peak loading windows, and the light unit weight means goods can be moved by hand where forklifts are not available.',
        },
      },
      ms: {
        name: 'Kuala Lumpur',
        blurb: 'Poket perindustrian KL yang masih ada — Chan Sow Lin, Segambut dan jaluran Jalan Ipoh — cenderung kepada percetakan, pengeluaran F&B, syarikat perdagangan dan pusat pemenuhan bandar.',
        industries: ['percetakan & penerbitan', 'pengeluaran F&B', 'pemenuhan bandar', 'perdagangan & eksport'],
        delivery: 'Penghantaran hari berikutnya seluruh bandar; penghantaran bermasa tersedia untuk dok pusat bandar dengan sekatan pemunggahan.',
        useCase: 'Operator bandar paling menghargai pengendalian seorang: palet 5kg bergerak melalui ruang pemunggahan sempit dan lif servis yang menjadikan palet kayu 25kg benar-benar berbahaya.',
        faq: {
          q: 'Bolehkah anda mengendalikan penghantaran ke lokasi pusat bandar KL dengan ruang pemunggahan terhad?',
          a: 'Ya. Kami menjadualkan penghantaran bermasa untuk alamat dengan sekatan dok, dan berat unit yang ringan bermakna barangan boleh dipindahkan dengan tangan di mana forklif tiada.',
        },
      },
      zh: {
        name: 'Kuala Lumpur（吉隆坡）',
        blurb: '吉隆坡尚存的工业区 — 陈秀连、泗岩沫和怡保路工业带 — 以印刷、餐饮食品生产、贸易行和服务城市的市区仓配中心为主。',
        industries: ['印刷出版', '餐饮食品生产', '市区仓配', '贸易与出口'],
        delivery: '全市次日达；对有装卸限制的市中心码头可安排定时配送。',
        useCase: '市区企业最看重单人搬运：5公斤的托盘能穿过狭窄装卸口和服务电梯 — 这些场景对25公斤木托盘来说是真切的安全隐患。',
        faq: {
          q: '市中心装卸受限的地址能配送吗？',
          a: '能。我们为有码头限制或错峰装卸时段的地址安排定时配送；单件重量轻，没有叉车的场地也能人工搬运。',
        },
      },
    },
  },
  {
    slug: 'selangor',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=75',
    areas: ['Shah Alam', 'Klang', 'Petaling Jaya', 'Kajang-Balakong belt', 'Rawang', 'Banting'],
    nearby: ['klang', 'petaling-jaya', 'kajang'],
    i18n: {
      en: {
        name: 'Selangor',
        blurb: 'Selangor is Malaysia\'s manufacturing heartland and our home state. From Shah Alam\'s multinationals to the SME belts of Kajang-Balakong and the port corridor at Klang, most of our daily output is delivered within this state.',
        industries: ['E&E manufacturing', 'automotive & parts', 'FMCG & food', 'logistics & port operations'],
        delivery: 'Next-day statewide as standard; same-day for the Kajang-Balakong-Serdang belt. JIT programmes run daily routes to major estates.',
        useCase: 'Being manufactured inside the state means Selangor plants can run lower packaging inventory: order against production schedules rather than holding weeks of pallet stock.',
        faq: {
          q: 'Which Selangor industrial areas do you deliver to most frequently?',
          a: 'Daily or near-daily routes cover Shah Alam, Klang, Petaling Jaya, Puchong, Kajang, Balakong and Serdang. Other Selangor estates are on scheduled runs, typically next-day. If your estate is not listed on this page, ask — the answer is almost always yes.',
        },
      },
      ms: {
        name: 'Selangor',
        blurb: 'Selangor ialah jantung pembuatan Malaysia dan negeri asal kami. Daripada multinasional Shah Alam hingga jaluran PKS Kajang-Balakong dan koridor pelabuhan di Klang, kebanyakan keluaran harian kami dihantar dalam negeri ini.',
        industries: ['pembuatan E&E', 'automotif & komponen', 'FMCG & makanan', 'logistik & operasi pelabuhan'],
        delivery: 'Hari berikutnya seluruh negeri sebagai standard; hari sama untuk jaluran Kajang-Balakong-Serdang. Program JIT menjalankan laluan harian ke estet utama.',
        useCase: 'Dikeluarkan dalam negeri bermakna kilang Selangor boleh menyimpan inventori pembungkusan lebih rendah: pesan mengikut jadual pengeluaran dan bukan menyimpan stok palet berminggu-minggu.',
        faq: {
          q: 'Kawasan perindustrian Selangor mana yang paling kerap anda hantar?',
          a: 'Laluan harian atau hampir harian meliputi Shah Alam, Klang, Petaling Jaya, Puchong, Kajang, Balakong dan Serdang. Estet Selangor lain mengikut laluan berjadual, biasanya hari berikutnya.',
        },
      },
      zh: {
        name: 'Selangor（雪兰莪）',
        blurb: '雪兰莪是马来西亚的制造业腹地，也是我们的本州。从莎阿南的跨国工厂，到加影-无拉港的中小企业带，再到巴生的港口走廊 — 我们每天的产量大部分都交付在本州境内。',
        industries: ['电子电气制造', '汽车与零部件', '快消与食品', '物流与港口作业'],
        delivery: '全州标准次日达；加影-无拉港-沙登一带当天达。JIT项目对主要工业区每日发车。',
        useCase: '产地就在州内，意味着雪兰莪的工厂可以把包装库存压到更低：按生产排程下单，而不是囤几周的托盘。',
        faq: {
          q: '雪兰莪哪些工业区你们配送最频繁？',
          a: '莎阿南、巴生、八打灵再也、蒲种、加影、无拉港和沙登为每日或准每日线路；其他工业区按排程配送，通常次日达。页面未列出的园区请直接询问 — 答案几乎都是可以。',
        },
      },
    },
  },
  {
    slug: 'bangi',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600&q=75',
    areas: ['Kawasan Perindustrian Bangi', 'Bangi Industrial Estate Phase 2', 'Selangor Science Park 1'],
    nearby: ['kajang', 'semenyih', 'cyberjaya'],
    i18n: {
      en: {
        name: 'Bangi',
        blurb: 'Bangi Industrial Estate is one of Selangor\'s established E&E and precision-engineering addresses, with semiconductor back-end, automotive component and medical device plants concentrated off the PLUS corridor.',
        industries: ['semiconductor & E&E', 'automotive components', 'medical devices', 'precision engineering'],
        delivery: 'Next-day standard, roughly 20 minutes from our plant via SILK/PLUS. Same-day is realistic for morning-confirmed orders.',
        useCase: 'Precision plants here care about two things our material does well: dimensional consistency for automated handling, and clean, splinter-free packaging for components where a wood fragment is a contamination event.',
        faq: {
          q: 'Is honeycomb packaging suitable for cleanroom-adjacent operations in Bangi?',
          a: 'Honeycomb sheds no bark, splinters or fasteners, which removes the debris wood brings into controlled areas. For cleanroom-adjacent use, specify liner grades with us; for inside actual cleanrooms, packaging requirements are usually customer-specific, so share your protocol.',
        },
      },
      ms: {
        name: 'Bangi',
        blurb: 'Kawasan Perindustrian Bangi ialah antara alamat E&E dan kejuruteraan persis mapan di Selangor, dengan kilang belakang semikonduktor, komponen automotif dan peranti perubatan tertumpu di koridor PLUS.',
        industries: ['semikonduktor & E&E', 'komponen automotif', 'peranti perubatan', 'kejuruteraan persis'],
        delivery: 'Hari berikutnya standard, kira-kira 20 minit dari kilang kami melalui SILK/PLUS. Hari sama realistik untuk pesanan disahkan pagi.',
        useCase: 'Kilang persis di sini mengambil berat dua perkara yang bahan kami lakukan dengan baik: keseragaman dimensi untuk pengendalian automasi, dan pembungkusan bersih tanpa serpihan.',
        faq: {
          q: 'Adakah pembungkusan honeycomb sesuai untuk operasi bersebelahan bilik bersih di Bangi?',
          a: 'Honeycomb tidak menggugurkan kulit kayu, serpihan atau pengikat, yang menghapuskan serpihan yang dibawa kayu ke kawasan terkawal. Untuk kegunaan bersebelahan bilik bersih, tetapkan gred pelapik bersama kami.',
        },
      },
      zh: {
        name: 'Bangi（万宜）',
        blurb: '万宜工业区是雪兰莪成熟的电子电气与精密工程基地，半导体后段、汽车零部件和医疗器械工厂沿PLUS高速走廊集中分布。',
        industries: ['半导体与电子电气', '汽车零部件', '医疗器械', '精密工程'],
        delivery: '标准次日达，经SILK/PLUS距我厂约20分钟；上午确认的订单当天送达也很现实。',
        useCase: '这里的精密工厂最在意两件事，恰是我们材料的强项：自动化搬运所需的尺寸一致性，以及无木刺的洁净包装 — 对元器件而言，一片木屑就是一次污染事件。',
        faq: {
          q: '蜂窝包装适合万宜洁净室周边作业吗？',
          a: '蜂窝不掉树皮、不掉木刺、无金属紧固件，消除了木材带入受控区域的碎屑。洁净室周边使用可与我们指定面纸等级；洁净室内部的包装要求通常因客户而异，请提供您的规程。',
        },
      },
    },
  },
  {
    slug: 'semenyih',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=75',
    areas: ['Semenyih Hi-Tech Industrial Park', 'Taman Perindustrian Semenyih', 'Kawasan Perindustrian Sungai Lalang'],
    nearby: ['kajang', 'bangi', 'balakong'],
    i18n: {
      en: {
        name: 'Semenyih',
        blurb: 'Semenyih\'s estates grew as the furniture and steel overflow from Kajang pushed south, and now hold woodworking factories, steel processors and a rising number of food and beverage plants.',
        industries: ['furniture & woodworking', 'steel processing', 'F&B manufacturing', 'construction materials'],
        delivery: 'Next-day standard; the run from Balakong via Kajang is short enough for flexible scheduling.',
        useCase: 'The irony is not lost on Semenyih\'s wooden furniture makers: they build in timber but increasingly ship on paper, because the ISPM-15 exemption removes fumigation from their export timeline entirely.',
        faq: {
          q: 'Why would a wooden furniture factory in Semenyih use paper pallets?',
          a: 'Because the ISPM-15 rule applies to the packaging, not the product. Furniture itself is a processed wood product and exempt; the raw-wood pallet under it is what needs treatment and stamping. Ship the same furniture on honeycomb and the compliance step disappears.',
        },
      },
      ms: {
        name: 'Semenyih',
        blurb: 'Estet Semenyih berkembang apabila limpahan perabot dan keluli dari Kajang menolak ke selatan, dan kini memuatkan kilang kerja kayu, pemproses keluli dan semakin banyak kilang makanan dan minuman.',
        industries: ['perabot & kerja kayu', 'pemprosesan keluli', 'pembuatan F&B', 'bahan binaan'],
        delivery: 'Hari berikutnya standard; perjalanan dari Balakong melalui Kajang cukup pendek untuk penjadualan fleksibel.',
        useCase: 'Ironinya tidak terlepas kepada pembuat perabot kayu Semenyih: mereka membina dengan kayu tetapi semakin menghantar di atas kertas, kerana pengecualian ISPM-15 menghapuskan fumigasi daripada garis masa eksport mereka.',
        faq: {
          q: 'Mengapa kilang perabot kayu di Semenyih menggunakan palet kertas?',
          a: 'Kerana peraturan ISPM-15 terpakai pada pembungkusan, bukan produk. Perabot itu sendiri ialah produk kayu terproses dan dikecualikan; palet kayu mentah di bawahnya itulah yang memerlukan rawatan dan cop.',
        },
      },
      zh: {
        name: 'Semenyih（士毛月）',
        blurb: '士毛月的工业区随着加影家具和钢铁产业向南外溢而成长，如今聚集了木工厂、钢材加工厂和越来越多的食品饮料工厂。',
        industries: ['家具与木工', '钢材加工', '食品饮料制造', '建筑材料'],
        delivery: '标准次日达；从无拉港经加影的线路够短，排程灵活。',
        useCase: '士毛月的木制家具厂商很清楚其中的反差：他们用木头造家具，却越来越多地用纸托盘出货 — 因为ISPM-15豁免把熏蒸环节从出口时间表里整个删掉了。',
        faq: {
          q: '士毛月的木制家具厂为什么要用纸托盘？',
          a: '因为ISPM-15管的是包装而不是产品。家具本身是加工木制品，本就豁免；需要处理和盖章的是它底下的原木托盘。同样的家具放上蜂窝托盘出货，合规环节就直接消失了。',
        },
      },
    },
  },
  {
    slug: 'cyberjaya',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=75',
    areas: ['Cyberjaya Flagship Zone', 'Cyber 8-12 tech parks', 'Persiaran APEC corridor'],
    nearby: ['bangi', 'puchong', 'klia'],
    i18n: {
      en: {
        name: 'Cyberjaya',
        blurb: 'Cyberjaya is data centre country: hyperscale campuses, server staging warehouses and tech logistics operators who move high-value, shock-sensitive equipment on tight commissioning schedules.',
        industries: ['data centres', 'server & IT logistics', 'tech assembly', 'telecoms equipment'],
        delivery: 'Next-day standard; project deliveries can be aligned to server delivery windows and commissioning dates.',
        useCase: 'Server moves are exactly the load honeycomb suits: high value, shock-sensitive, and often lifted by hand at the destination rack row. Die-cut fitments hold units firm, and there are no fasteners to gouge equipment.',
        faq: {
          q: 'Can you package server and rack equipment for Cyberjaya data centre moves?',
          a: 'Yes. We specify honeycomb crating and internal fitments from the equipment weight, dimensions and fragility. Note that anti-static protection comes from the inner layer against the device — shielding bags or dissipative liners — with honeycomb as the outer structure.',
        },
      },
      ms: {
        name: 'Cyberjaya',
        blurb: 'Cyberjaya ialah wilayah pusat data: kampus hiperskala, gudang pementasan pelayan dan operator logistik teknologi yang memindahkan peralatan bernilai tinggi dan sensitif kejutan mengikut jadual pentauliahan ketat.',
        industries: ['pusat data', 'logistik pelayan & IT', 'pemasangan teknologi', 'peralatan telekom'],
        delivery: 'Hari berikutnya standard; penghantaran projek boleh diselaraskan dengan tetingkap penghantaran pelayan.',
        useCase: 'Pemindahan pelayan ialah muatan yang tepat untuk honeycomb: bernilai tinggi, sensitif kejutan, dan sering diangkat dengan tangan di barisan rak destinasi.',
        faq: {
          q: 'Bolehkah anda membungkus peralatan pelayan dan rak untuk pemindahan pusat data Cyberjaya?',
          a: 'Ya. Kami menetapkan peti dan sisipan honeycomb daripada berat, dimensi dan kerapuhan peralatan. Perlindungan antistatik datang daripada lapisan dalam — beg perisai atau pelapik pelesap — dengan honeycomb sebagai struktur luar.',
        },
      },
      zh: {
        name: 'Cyberjaya（赛城）',
        blurb: '赛城是数据中心之城：超大规模园区、服务器集结仓库，以及在紧凑上线排期下搬运高价值、怕震设备的科技物流商。',
        industries: ['数据中心', '服务器与IT物流', '科技组装', '电信设备'],
        delivery: '标准次日达；项目型交付可对齐服务器到货窗口与上线日期。',
        useCase: '服务器搬迁正是蜂窝最合适的载荷：高价值、怕冲击、且常在目的地机柜排前人工抬放。模切内衬固定设备，且没有会刮伤机器的金属紧固件。',
        faq: {
          q: '你们能为赛城数据中心搬迁打包服务器和机柜设备吗？',
          a: '能。我们根据设备重量、尺寸和脆值设计蜂窝箱体与内衬。需说明：防静电由贴近设备的内层（屏蔽袋或耗散内衬）承担，蜂窝承担外层结构。',
        },
      },
    },
  },
  {
    slug: 'klia',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=75',
    areas: ['KLIA Free Commercial Zone', 'KLIA Aeropolis', 'Southern Support Zone', 'Nilai overflow estates'],
    nearby: ['cyberjaya', 'bangi', 'selangor'],
    i18n: {
      en: {
        name: 'KLIA',
        blurb: 'The KLIA cargo ecosystem — the Free Commercial Zone, forwarder warehouses and Aeropolis logistics parks — lives on chargeable weight. It is the single most natural home for a 5kg pallet in the country.',
        industries: ['air freight forwarding', 'e-commerce export', 'perishables & pharma logistics', 'aerospace support'],
        delivery: 'Scheduled runs to the FCZ and forwarder warehouses; urgent same-day deliveries can be arranged for flight cut-offs.',
        useCase: 'Every forwarder here can do the arithmetic instantly: 20kg less tare weight per pallet at RM20 per chargeable kilogram is around RM400 per position, on every single departure.',
        faq: {
          q: 'Do KLIA forwarders need any special documentation for honeycomb pallets?',
          a: 'No phytosanitary documentation is needed because paper honeycomb is outside ISPM-15 entirely — one less document set per shipment. Standard airline and security requirements for cargo build-up apply as normal.',
        },
      },
      ms: {
        name: 'KLIA',
        blurb: 'Ekosistem kargo KLIA — Zon Komersial Bebas, gudang penghantar dan taman logistik Aeropolis — hidup atas berat boleh caj. Ia rumah paling semula jadi untuk palet 5kg di negara ini.',
        industries: ['penghantaran kargo udara', 'eksport e-dagang', 'logistik mudah rosak & farma', 'sokongan aeroangkasa'],
        delivery: 'Laluan berjadual ke FCZ dan gudang penghantar; penghantaran segera hari sama boleh diatur untuk masa potong penerbangan.',
        useCase: 'Setiap penghantar di sini boleh mengira serta-merta: 20kg kurang berat tara setiap palet pada RM20 setiap kilogram boleh caj ialah sekitar RM400 setiap kedudukan, pada setiap penerbangan.',
        faq: {
          q: 'Adakah penghantar KLIA memerlukan dokumentasi khas untuk palet honeycomb?',
          a: 'Tiada dokumentasi fitosanitasi diperlukan kerana honeycomb kertas berada di luar ISPM-15 sepenuhnya — satu set dokumen kurang setiap penghantaran.',
        },
      },
      zh: {
        name: 'KLIA（吉隆坡国际机场）',
        blurb: 'KLIA货运生态圈 — 自由商业区、货代仓库和Aeropolis物流园 — 靠计费重量吃饭。这里是全国最适合5公斤托盘的地方。',
        industries: ['航空货运代理', '电商出口', '生鲜与医药物流', '航空支持产业'],
        delivery: '对FCZ和货代仓库定期发车；赶航班截关的紧急当天配送可另行安排。',
        useCase: '这里的每个货代都能立刻算清这笔账：每托盘少20公斤皮重，按每计费公斤RM20，就是每个板位约RM400 — 每一个航班都是如此。',
        faq: {
          q: 'KLIA货代使用蜂窝托盘需要特殊文件吗？',
          a: '不需要植检文件 — 纸蜂窝完全不在ISPM-15范围内，每票货少一套单证。航空公司与安检的常规组板要求照常适用。',
        },
      },
    },
  },
  {
    slug: 'puchong',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=75',
    areas: ['Taman Perindustrian Puchong Utama', 'Bandar Puchong Jaya', 'Pusat Bandar Puchong', 'Kinrara industrial'],
    nearby: ['serdang', 'petaling-jaya', 'subang-jaya'],
    i18n: {
      en: {
        name: 'Puchong',
        blurb: 'Puchong is the Klang Valley\'s SME engine room: thousands of light manufacturers, traders and 3PL warehouses along the LDP corridor, most of them exporting without a dedicated packaging engineer on staff.',
        industries: ['SME manufacturing', '3PL & warehousing', 'electrical goods', 'export trading'],
        delivery: 'Next-day standard across all Puchong estates; same-day frequently possible via the SILK link.',
        useCase: 'For SME exporters without packaging engineers, we do the specification work: send cargo weight and dimensions, get back a pallet or crate spec with a quote. No design fee, no minimum sophistication.',
        faq: {
          q: 'We are a small Puchong exporter with no packaging engineer. How do we start?',
          a: 'Send us photos of your current packed shipment, the cargo weight and where it ships to. We reply with a recommended honeycomb spec, a quote, and a sample kit so your team can handle the material before committing.',
        },
      },
      ms: {
        name: 'Puchong',
        blurb: 'Puchong ialah bilik enjin PKS Lembah Klang: ribuan pengeluar ringan, pedagang dan gudang 3PL di sepanjang koridor LDP, kebanyakannya mengeksport tanpa jurutera pembungkusan khusus.',
        industries: ['pembuatan PKS', '3PL & pergudangan', 'barangan elektrik', 'perdagangan eksport'],
        delivery: 'Hari berikutnya standard ke semua estet Puchong; hari sama kerap boleh melalui hubungan SILK.',
        useCase: 'Bagi pengeksport PKS tanpa jurutera pembungkusan, kami buat kerja spesifikasi: hantar berat dan dimensi kargo, terima spesifikasi palet atau peti berserta sebut harga.',
        faq: {
          q: 'Kami pengeksport kecil Puchong tanpa jurutera pembungkusan. Bagaimana bermula?',
          a: 'Hantarkan gambar penghantaran terbungkus semasa anda, berat kargo dan destinasi. Kami balas dengan spesifikasi honeycomb yang disyorkan, sebut harga, dan kit sampel.',
        },
      },
      zh: {
        name: 'Puchong（蒲种）',
        blurb: '蒲种是巴生谷的中小企业引擎房：LDP走廊沿线数以千计的轻型制造商、贸易商和3PL仓库，其中多数在没有专职包装工程师的情况下做出口。',
        industries: ['中小型制造', '3PL与仓储', '电气产品', '出口贸易'],
        delivery: '蒲种各工业区标准次日达；经SILK连接线常可当天送达。',
        useCase: '对没有包装工程师的中小出口商，规格设计我们来做：发来货物重量和尺寸，收到托盘或箱体规格与报价。不收设计费，也没有门槛。',
        faq: {
          q: '我们是蒲种的小型出口商，没有包装工程师，如何开始？',
          a: '把现有包装出货的照片、货物重量和目的地发给我们。我们会回复推荐的蜂窝规格、报价和样品套装，让您的团队先上手材料再做决定。',
        },
      },
    },
  },
  {
    slug: 'petaling-jaya',
    image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=1600&q=75',
    areas: ['Seksyen 13', 'Kawasan 51/51A', 'Kelana Jaya', 'Sungai Way FTZ'],
    nearby: ['subang-jaya', 'damansara', 'kuala-lumpur'],
    i18n: {
      en: {
        name: 'Petaling Jaya',
        blurb: 'PJ\'s legacy estates — Section 13, Kawasan 51 and Sungai Way — carry decades of FMCG, printing and electronics history, now mixed with regional distribution centres feeding the whole Klang Valley.',
        industries: ['FMCG manufacturing', 'printing & packaging', 'electronics', 'regional distribution'],
        delivery: 'Next-day standard via Federal Highway or NPE; timed slots for DC receiving docks.',
        useCase: 'PJ distribution centres are heavy pallet consumers, and the ones on EPR-exposed export lanes use our units to keep packaging in one recyclable material end to end.',
        faq: {
          q: 'Can you match an existing pallet footprint used by our PJ distribution centre?',
          a: 'Yes. Honeycomb pallets are made to dimension, so standard footprints (1100x1100, 1200x1000 and others) and custom rack-compatible sizes are all specifiable, with deck and runner design matched to your racking and load.',
        },
      },
      ms: {
        name: 'Petaling Jaya',
        blurb: 'Estet warisan PJ — Seksyen 13, Kawasan 51 dan Sungai Way — membawa sejarah puluhan tahun FMCG, percetakan dan elektronik, kini bercampur dengan pusat pengedaran serantau.',
        industries: ['pembuatan FMCG', 'percetakan & pembungkusan', 'elektronik', 'pengedaran serantau'],
        delivery: 'Hari berikutnya standard melalui Lebuhraya Persekutuan atau NPE; slot bermasa untuk dok penerimaan DC.',
        useCase: 'Pusat pengedaran PJ ialah pengguna palet berat, dan yang berada di laluan eksport terdedah EPR menggunakan unit kami untuk mengekalkan pembungkusan dalam satu bahan boleh kitar semula.',
        faq: {
          q: 'Bolehkah anda memadankan tapak palet sedia ada yang digunakan pusat pengedaran PJ kami?',
          a: 'Ya. Palet honeycomb dibuat mengikut dimensi, jadi tapak standard (1100x1100, 1200x1000 dan lain-lain) dan saiz tersuai serasi rak semuanya boleh ditetapkan.',
        },
      },
      zh: {
        name: 'Petaling Jaya（八打灵再也）',
        blurb: '八打灵再也的老牌工业区 — 13区、51区和双溪威 — 承载着数十年的快消、印刷与电子产业史，如今又叠加了辐射整个巴生谷的区域配送中心。',
        industries: ['快消品制造', '印刷与包装', '电子', '区域配送'],
        delivery: '经联邦大道或NPE标准次日达；可为配送中心收货码头预约时段。',
        useCase: '八打灵的配送中心是托盘消耗大户；处在受EPR影响出口航线上的企业用我们的产品，让包装从头到尾保持单一可回收材质。',
        faq: {
          q: '能匹配我们八打灵配送中心现用的托盘尺寸吗？',
          a: '能。蜂窝托盘按尺寸定制，标准规格（1100x1100、1200x1000等）和适配货架的自定义尺寸都可指定，台面与纵梁设计会按您的货架和载荷匹配。',
        },
      },
    },
  },
];
