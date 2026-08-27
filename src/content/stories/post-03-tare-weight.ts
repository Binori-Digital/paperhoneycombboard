import type { Post } from './types';

export const post: Post = {
  slug: 'air-freight-tare-weight-cost',
  date: '2026-08-24',
  image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=75',
  related: ['ispm-15-wood-packaging-rejected-at-customs', 'manual-handling-injuries-packaging-disposal'],
  i18n: {
    en: {
      title: 'You Are Paying Air Freight on Your Pallet, Not Just Your Product',
      description: 'A 25kg wooden pallet is billed at the same rate as cargo. Here is how to calculate what tare weight costs you per shipment, and how a ~5kg honeycomb pallet saves around RM400 per air pallet.',
      excerpt: 'Every kilogram of packaging is billed like product. Here is the arithmetic most shippers never run — and what it reveals about your margin.',
      intro: [
        'Air freight is priced per kilogram. The carrier does not distinguish between the goods your customer ordered and the timber they happen to be sitting on. Both are billed at the same rate.',
        'That makes packaging weight a direct, recurring, and entirely avoidable cost — one that hides inside a freight invoice rather than appearing on a purchase order, which is exactly why it survives budget reviews year after year.',
      ],
      sections: [
        {
          h: 'The arithmetic nobody runs',
          p: [
            'A standard wooden export pallet weighs roughly 25kg. An equivalent paper honeycomb pallet weighs around 5kg. That is 20kg of tare weight removed from every single pallet position.',
            'At a typical RM20 per kilogram air freight rate, 20kg saved is about RM400 per pallet. Ship 250 pallets a month and that is RM100,000 a month, or RM1.2 million a year, paid to move timber across borders.',
            'The same maths in dollar terms: at US$4.50 per kilogram, 20kg saved is roughly US$90 per pallet, or around US$45,000 across a 500-pallet programme.',
          ],
        },
        {
          h: 'Where the cost hides',
          p: [
            'Freight is usually booked as a single line item, so packaging weight never appears as its own cost centre. Procurement negotiates the pallet unit price — often a few ringgit — while logistics quietly pays hundreds of ringgit per pallet to fly it.',
            'The purchase price of a pallet is a one-time cost. The freight cost of its weight repeats on every shipment, for the life of the shipping programme.',
            'Sea freight behaves differently but is not immune: heavier packaging reduces payload within container weight limits, and in dimensional-weight pricing, bulky low-density packaging costs even when it is light.',
          ],
        },
        {
          h: 'Run the numbers for your own lane',
          p: [
            'The calculation needs only three inputs: pallets shipped per month, your negotiated freight rate per kilogram, and the tare weight difference between your current pallet and a honeycomb equivalent (typically 20kg).',
            'Multiply them and you have your monthly saving. Our savings calculator on the homepage does this in your own currency and detects your local rate defaults, so you can sanity-check the figure against your latest freight invoice.',
            'One caution worth stating plainly: these figures assume air freight, where weight is the dominant cost driver. For sea freight, the savings are real but smaller, and the stronger arguments become ISPM-15 exemption, handling safety, and disposal cost.',
          ],
        },
        {
          h: 'What you do not give up',
          p: [
            'Lighter packaging is only worth it if the cargo still arrives intact. Honeycomb load capacity is engineered through core thickness, cell size, and paper grade — the hexagonal geometry distributes load across cell walls, which is why a board that is mostly air behaves structurally like timber.',
            'Engineered panels handle compression forces around 12kN, and pallet-grade builds carry static loads comparable to plywood for typical export cargo. Where honeycomb is genuinely the wrong choice is permanently wet environments and closed-loop reuse over many years.',
          ],
        },
      ],
      takeaways: [
        'Air freight bills packaging at the same rate as product — a 25kg pallet costs the same per kg as your goods.',
        'A honeycomb pallet at ~5kg removes about 20kg of tare weight per pallet position.',
        'At RM20/kg that is roughly RM400 saved per air pallet; at US$4.50/kg, about US$90.',
        'Pallet purchase price is a one-time cost; the freight cost of its weight repeats on every shipment.',
        'Savings are largest on air freight; for sea freight, compliance and handling benefits carry more weight.',
      ],
      faq: [
        {
          q: 'How much does a paper honeycomb pallet weigh compared to wood?',
          a: 'A standard honeycomb pallet weighs around 5kg against roughly 25kg for a comparable wooden export pallet — about 80% lighter, removing around 20kg of billable tare weight per pallet.',
        },
        {
          q: 'How do I calculate my own air freight saving?',
          a: 'Multiply pallets shipped per month by 20kg saved per pallet, then by your freight rate per kilogram. At 250 pallets a month and RM20/kg, that is 250 x 20 x 20 = RM100,000 per month.',
        },
        {
          q: 'Do the savings apply to sea freight as well?',
          a: 'Partially. Sea freight is priced primarily by container rather than weight, so the direct saving is smaller. The benefits there come from payload capacity within weight limits, ISPM-15 exemption, safer handling, and free disposal at destination.',
        },
      ],
      ctaTitle: 'Check the figure against your own invoice',
      ctaText: 'Use the savings calculator in your currency, or send us your lane details and monthly volume and we will model it with you.',
      ctaPrimary: 'Calculate My Savings',
      ctaSecondary: 'See Honeycomb Pallets',
      imageAlt: 'Air cargo aircraft being loaded with palletised freight on the apron',
      tags: ['air freight cost per kg', 'pallet tare weight savings', 'lightweight export pallet', 'reduce air freight costs Malaysia', 'paper pallet weight'],
      relatedLabel: 'Continue reading',
      takeawaysLabel: 'Key takeaways',
      faqLabel: 'Frequently asked questions',
      readLabel: 'min read',
    },
    ms: {
      title: 'Anda Membayar Tambang Udara Untuk Palet Anda, Bukan Sekadar Produk',
      description: 'Palet kayu 25kg dicaj pada kadar sama seperti kargo. Ini cara mengira kos berat tara setiap penghantaran, dan bagaimana palet honeycomb ~5kg menjimatkan sekitar RM400 setiap palet udara.',
      excerpt: 'Setiap kilogram pembungkusan dicaj seperti produk. Ini pengiraan yang jarang dibuat penghantar — dan apa yang ia dedahkan tentang margin anda.',
      intro: [
        'Tambang udara dihargakan setiap kilogram. Syarikat penerbangan tidak membezakan antara barangan yang dipesan pelanggan anda dengan kayu yang menyokongnya. Kedua-duanya dicaj pada kadar yang sama.',
        'Ini menjadikan berat pembungkusan satu kos langsung, berulang, dan boleh dielakkan sepenuhnya — kos yang tersembunyi dalam invois tambang dan bukannya muncul pada pesanan belian, sebab itulah ia terselamat daripada semakan bajet tahun demi tahun.',
      ],
      sections: [
        {
          h: 'Pengiraan yang tiada siapa buat',
          p: [
            'Palet eksport kayu standard beratnya kira-kira 25kg. Palet honeycomb kertas setara beratnya sekitar 5kg. Itu 20kg berat tara dibuang daripada setiap kedudukan palet.',
            'Pada kadar tambang udara biasa RM20 sekilogram, 20kg dijimatkan bersamaan kira-kira RM400 setiap palet. Hantar 250 palet sebulan dan itu RM100,000 sebulan, atau RM1.2 juta setahun, dibayar untuk menerbangkan kayu merentasi sempadan.',
            'Pengiraan sama dalam dolar: pada US$4.50 sekilogram, 20kg dijimatkan bersamaan kira-kira US$90 setiap palet, atau sekitar US$45,000 bagi program 500 palet.',
          ],
        },
        {
          h: 'Di mana kos itu bersembunyi',
          p: [
            'Tambang biasanya ditempah sebagai satu item baris, jadi berat pembungkusan tidak pernah muncul sebagai pusat kosnya sendiri. Perolehan berunding harga unit palet — selalunya beberapa ringgit — sementara logistik senyap-senyap membayar ratusan ringgit setiap palet untuk menerbangkannya.',
            'Harga belian palet ialah kos sekali. Kos tambang beratnya berulang pada setiap penghantaran, sepanjang hayat program penghantaran itu.',
            'Tambang laut berkelakuan berbeza tetapi tidak terkecuali: pembungkusan lebih berat mengurangkan muatan dalam had berat kontena.',
          ],
        },
        {
          h: 'Kira untuk laluan anda sendiri',
          p: [
            'Pengiraan ini hanya perlukan tiga input: palet dihantar sebulan, kadar tambang anda setiap kilogram, dan perbezaan berat tara antara palet semasa anda dengan honeycomb setara (biasanya 20kg).',
            'Darabkan dan anda dapat penjimatan bulanan. Kalkulator penjimatan di laman utama kami melakukannya dalam mata wang anda sendiri, jadi anda boleh menyemaknya dengan invois tambang terkini.',
            'Satu peringatan jujur: angka ini menganggap tambang udara, di mana berat ialah pemacu kos utama. Bagi tambang laut, penjimatan itu nyata tetapi lebih kecil.',
          ],
        },
        {
          h: 'Apa yang anda tidak korbankan',
          p: [
            'Pembungkusan lebih ringan hanya berbaloi jika kargo tetap tiba dalam keadaan baik. Kapasiti muatan honeycomb direkayasa melalui ketebalan teras, saiz sel dan gred kertas — geometri heksagon mengagihkan beban merentasi dinding sel.',
            'Panel terjurutera mengendalikan daya mampatan sekitar 12kN, dan binaan gred palet menanggung beban statik setara papan lapis bagi kargo eksport biasa.',
          ],
        },
      ],
      takeaways: [
        'Tambang udara mengecaj pembungkusan pada kadar sama seperti produk.',
        'Palet honeycomb pada ~5kg membuang kira-kira 20kg berat tara setiap kedudukan palet.',
        'Pada RM20/kg itu kira-kira RM400 dijimatkan setiap palet udara; pada US$4.50/kg, sekitar US$90.',
        'Harga belian palet ialah kos sekali; kos tambang beratnya berulang pada setiap penghantaran.',
        'Penjimatan paling besar pada tambang udara; bagi tambang laut, faedah pematuhan dan pengendalian lebih penting.',
      ],
      faq: [
        {
          q: 'Berapa berat palet honeycomb kertas berbanding kayu?',
          a: 'Palet honeycomb standard beratnya sekitar 5kg berbanding kira-kira 25kg bagi palet eksport kayu setara — kira-kira 80% lebih ringan, membuang sekitar 20kg berat tara boleh caj setiap palet.',
        },
        {
          q: 'Bagaimana saya kira penjimatan tambang udara saya sendiri?',
          a: 'Darabkan palet dihantar sebulan dengan 20kg dijimatkan setiap palet, kemudian dengan kadar tambang anda setiap kilogram. Pada 250 palet sebulan dan RM20/kg, itu 250 x 20 x 20 = RM100,000 sebulan.',
        },
        {
          q: 'Adakah penjimatan terpakai untuk tambang laut juga?',
          a: 'Sebahagiannya. Tambang laut dihargakan terutamanya mengikut kontena dan bukan berat, jadi penjimatan langsung lebih kecil. Faedah di sana datang daripada kapasiti muatan, pengecualian ISPM-15, pengendalian lebih selamat, dan pelupusan percuma di destinasi.',
        },
      ],
      ctaTitle: 'Semak angka itu dengan invois anda sendiri',
      ctaText: 'Guna kalkulator penjimatan dalam mata wang anda, atau hantar butiran laluan dan volum bulanan anda dan kami akan modelkannya bersama anda.',
      ctaPrimary: 'Kira Penjimatan Saya',
      ctaSecondary: 'Lihat Palet Honeycomb',
      imageAlt: 'Pesawat kargo udara sedang dimuatkan dengan tambang berpalet di apron',
      tags: ['kos tambang udara sekilogram', 'penjimatan berat tara palet', 'palet eksport ringan', 'kurangkan kos tambang udara Malaysia'],
      relatedLabel: 'Teruskan membaca',
      takeawaysLabel: 'Intipati penting',
      faqLabel: 'Soalan lazim',
      readLabel: 'minit bacaan',
    },
    zh: {
      title: '您的空运费，付的是托盘的重量，不只是产品',
      description: '25公斤的木托盘按与货物相同的费率计费。本文教您计算皮重每票货的成本，以及约5公斤的蜂窝托盘如何为每个空运托盘节省约RM400。',
      excerpt: '每一公斤包装都按产品计费。这是大多数货主从未算过的一笔账 — 以及它揭示的利润真相。',
      intro: [
        '空运按公斤计价。承运人并不区分客户订购的货物与承载它们的木材，两者按同一费率计费。',
        '这让包装重量成为一项直接、反复发生、且完全可以避免的成本 — 它藏在运费账单里，而不是出现在采购订单上，这正是它年复一年躲过预算审查的原因。',
      ],
      sections: [
        {
          h: '没人算过的那笔账',
          p: [
            '标准出口木托盘约重25公斤，同等规格的纸蜂窝托盘约重5公斤。每一个托盘位就此减少20公斤皮重。',
            '按每公斤RM20的常见空运费率，节省20公斤约等于每托盘RM400。每月出货250个托盘，就是每月RM100,000，一年RM120万 — 这些钱是为把木材运过国境而付的。',
            '换算成美元同理：按每公斤US$4.50计算，节省20公斤约合每托盘US$90，500托盘的项目约US$45,000。',
          ],
        },
        {
          h: '成本藏在哪里',
          p: [
            '运费通常作为单一项目订舱，因此包装重量从未成为独立的成本中心。采购在谈托盘单价 — 往往只有几块钱 — 而物流部门在悄悄为每个托盘支付数百元的运费把它送上飞机。',
            '托盘的采购价是一次性成本，它重量所产生的运费却在每一票货上重复，贯穿整个出货项目的生命周期。',
            '海运机制不同但并非免疫：更重的包装会在集装箱重量上限内挤占有效载荷。',
          ],
        },
        {
          h: '为您自己的航线算一算',
          p: [
            '这个计算只需三个输入：每月出货托盘数、您谈定的每公斤运费费率，以及现用托盘与蜂窝托盘的皮重差（通常为20公斤）。',
            '相乘就是每月节省额。我们首页的节省计算器可按您所在地货币计算，方便您用最新一张运费账单核对。',
            '一点需要坦白说明：以上数字假设空运，重量是主导成本因素。海运的节省真实存在但较小。',
          ],
        },
        {
          h: '您不会失去什么',
          p: [
            '只有货物依然完好送达，轻量化才有意义。蜂窝的承载能力通过芯层厚度、孔径与纸张等级设计 — 六边形结构把载荷分散到每一片孔壁上。',
            '工程蜂窝板可承受约12kN压缩力，托盘级结构对常规出口货物的静态承载与胶合板相当。',
          ],
        },
      ],
      takeaways: [
        '空运对包装与产品按同一费率计费。',
        '约5公斤的蜂窝托盘为每个托盘位减少约20公斤皮重。',
        '按RM20/公斤计算，每个空运托盘约省RM400；按US$4.50/公斤约省US$90。',
        '托盘采购价是一次性的；其重量产生的运费在每票货上重复。',
        '空运节省最大；海运则以合规与搬运效益为主。',
      ],
      faq: [
        {
          q: '纸蜂窝托盘比木托盘轻多少？',
          a: '标准蜂窝托盘约5公斤，同等出口木托盘约25公斤 — 轻约80%，每托盘减少约20公斤计费皮重。',
        },
        {
          q: '我该怎么计算自己的空运节省？',
          a: '用每月出货托盘数乘以每托盘节省20公斤，再乘以您的每公斤运费费率。以每月250托盘、RM20/公斤计算：250 x 20 x 20 = 每月RM100,000。',
        },
        {
          q: '海运也能享受同样的节省吗？',
          a: '部分可以。海运主要按箱而非按重量计价，因此直接节省较小。其收益来自重量上限内的有效载荷、ISPM-15豁免、更安全的搬运，以及目的地免费处置。',
        },
      ],
      ctaTitle: '拿您自己的账单核对一下',
      ctaText: '用您所在货币的节省计算器试算，或把航线与月度出货量告诉我们，我们和您一起测算。',
      ctaPrimary: '计算我的节省',
      ctaSecondary: '查看蜂窝托盘',
      imageAlt: '停机坪上正在装载栈板货物的货运飞机',
      tags: ['空运每公斤成本', '托盘皮重节省', '轻量化出口托盘', '降低空运成本'],
      relatedLabel: '继续阅读',
      takeawaysLabel: '要点速览',
      faqLabel: '常见问题',
      readLabel: '分钟阅读',
    },
    ja: {
      title: '航空運賃は製品ではなくパレットにも課金されている',
      description: '25kgの木製パレットは貨物と同じ料率で課金されます。風袋重量が1出荷あたりいくらかを算出する方法と、約5kgのハニカムパレットがパレット1枚あたり約US$90を削減する仕組みを解説します。',
      excerpt: '梱包材1kgも製品と同じ料率で課金されます。多くの荷主が一度も計算していない算術と、それが利益率について示すことを解説します。',
      intro: [
        '航空運賃はキログラム単位で決まります。航空会社は、顧客が発注した品物と、それを載せている木材を区別しません。どちらも同じ料率で課金されます。',
        'つまり梱包重量は、直接的で、繰り返し発生し、完全に回避可能なコストです。発注書ではなく運賃請求書の中に隠れているため、毎年の予算レビューを生き延びてしまいます。',
      ],
      sections: [
        {
          h: '誰も計算しない算術',
          p: [
            '標準的な木製輸出パレットは約25kg、同等のペーパーハニカムパレットは約5kgです。パレット1枠あたり20kgの風袋重量が消えます。',
            '一般的な航空運賃US$4.50/kgで換算すると、20kgの削減はパレット1枚あたり約US$90。月250枚なら約US$22,500、年間で約US$270,000を木材の輸送に払っている計算になります。',
            '500枚規模のプログラムなら、およそUS$45,000の削減に相当します。',
          ],
        },
        {
          h: 'コストが隠れている場所',
          p: [
            '運賃は通常ひとつの明細として計上されるため、梱包重量が独立したコストセンターとして現れることはありません。調達がパレットの単価を数百円単位で交渉している一方、物流は1枚あたり数千円の運賃を静かに払い続けています。',
            'パレットの購入価格は一度きりのコストです。その重量が生む運賃は、出荷プログラムが続く限り毎回繰り返されます。',
            '海上輸送は仕組みが異なりますが無縁ではありません。重い梱包はコンテナの重量上限内で積載可能量を圧迫します。',
          ],
        },
        {
          h: '自社の航路で計算する',
          p: [
            '必要な入力は3つだけです。月間出荷パレット数、交渉済みのkg単価、そして現行パレットとハニカムの風袋差（通常20kg）。',
            '掛け合わせれば月間削減額が出ます。トップページの削減計算ツールは通貨を選んで試算できるため、直近の運賃請求書と照合できます。',
            '率直な注意点として、この数値は重量が主要なコスト要因となる航空輸送を前提としています。海上輸送では削減は実在しますがより小さくなります。',
          ],
        },
        {
          h: '失うものはない',
          p: [
            '軽量化は、貨物が無事に届いて初めて価値があります。ハニカムの積載能力はコア厚・セルサイズ・紙質で設計され、六角形の幾何がセル壁全体に荷重を分散します。',
            '設計されたパネルは約12kNの圧縮力に対応し、パレット等級の仕様は一般的な輸出貨物で合板同等の静荷重を担います。',
          ],
        },
      ],
      takeaways: [
        '航空運賃は梱包材にも製品と同じ料率を課金します。',
        '約5kgのハニカムパレットは1枠あたり約20kgの風袋重量を削減します。',
        'US$4.50/kgならパレット1枚あたり約US$90の削減になります。',
        'パレットの購入価格は一度きり、重量が生む運賃は毎回繰り返されます。',
        '削減効果は航空輸送で最大、海上輸送では法規適合と荷役面の利点が主になります。',
      ],
      faq: [
        {
          q: 'ペーパーハニカムパレットは木製と比べてどれくらい軽いですか？',
          a: '標準的なハニカムパレットは約5kg、同等の木製輸出パレットは約25kgで、約80%軽量です。1枚あたり約20kgの課金対象風袋重量が減ります。',
        },
        {
          q: '自社の航空運賃削減額はどう計算しますか？',
          a: '月間出荷パレット数 × 1枚あたり削減20kg × kg単価です。月250枚、US$4.50/kgなら 250 × 20 × 4.5 = 月約US$22,500 になります。',
        },
        {
          q: '海上輸送でも同じ削減効果がありますか？',
          a: '部分的です。海上輸送は重量よりコンテナ単位の価格が中心のため直接的な削減は小さくなります。利点は重量上限内の積載量、ISPM-15適用外、荷役の安全性、仕向地での無償廃棄です。',
        },
      ],
      ctaTitle: '自社の請求書と照らし合わせてください',
      ctaText: '通貨を選んで削減額を試算するか、航路と月間数量をお知らせいただければ一緒に試算します。',
      ctaPrimary: '削減額を計算する',
      ctaSecondary: 'ハニカムパレットを見る',
      imageAlt: 'エプロンでパレット貨物を搭載中の航空貨物機',
      tags: ['航空運賃 kg単価', 'パレット 風袋重量 削減', '軽量 輸出パレット', '航空運賃 コスト削減'],
      relatedLabel: '続けて読む',
      takeawaysLabel: '要点',
      faqLabel: 'よくあるご質問',
      readLabel: '分で読めます',
    },
    ko: {
      title: '항공 운임은 제품이 아니라 팔레트에도 부과되고 있습니다',
      description: '25kg 목재 팔레트는 화물과 같은 요율로 청구됩니다. 자체 중량이 선적마다 얼마인지 계산하는 방법과, 약 5kg 허니컴 팔레트가 팔레트당 약 US$90를 절감하는 구조를 정리했습니다.',
      excerpt: '포장 1kg도 제품과 같은 요율로 청구됩니다. 대부분의 화주가 한 번도 해보지 않은 계산과, 그것이 마진에 대해 알려주는 사실을 정리했습니다.',
      intro: [
        '항공 운임은 킬로그램 단위로 책정됩니다. 항공사는 고객이 주문한 물품과 그것을 받치는 목재를 구분하지 않습니다. 둘 다 같은 요율로 청구됩니다.',
        '따라서 포장 중량은 직접적이고, 반복되며, 완전히 피할 수 있는 비용입니다. 발주서가 아니라 운임 청구서 안에 숨어 있기 때문에 해마다 예산 검토를 그대로 통과합니다.',
      ],
      sections: [
        {
          h: '아무도 하지 않는 계산',
          p: [
            '표준 목재 수출 팔레트는 약 25kg, 동급 종이 허니컴 팔레트는 약 5kg입니다. 팔레트 한 자리마다 20kg의 자체 중량이 사라집니다.',
            '일반적인 항공 운임 US$4.50/kg 기준으로 20kg 절감은 팔레트당 약 US$90입니다. 월 250개를 보내면 월 약 US$22,500, 연간 약 US$270,000를 목재를 실어 나르는 데 지불하는 셈입니다.',
            '500개 규모 프로그램이라면 약 US$45,000 절감에 해당합니다.',
          ],
        },
        {
          h: '비용이 숨어 있는 곳',
          p: [
            '운임은 보통 단일 항목으로 부킹되므로 포장 중량이 독립된 원가 항목으로 드러나지 않습니다. 구매팀이 팔레트 단가를 협상하는 동안, 물류팀은 그것을 항공기에 싣기 위해 팔레트당 수만 원을 조용히 지불합니다.',
            '팔레트 구매가는 일회성 비용입니다. 그 중량이 만드는 운임은 선적 프로그램이 지속되는 한 매번 반복됩니다.',
            '해상 운송은 구조가 다르지만 무관하지 않습니다. 무거운 포장은 컨테이너 중량 한도 안에서 실적재량을 잠식합니다.',
          ],
        },
        {
          h: '자사 노선으로 계산해 보십시오',
          p: [
            '필요한 입력은 세 가지뿐입니다. 월 출하 팔레트 수, 협상된 kg당 운임, 그리고 현재 팔레트와 허니컴의 자체 중량 차이(보통 20kg).',
            '곱하면 월 절감액이 나옵니다. 홈페이지의 절감 계산기는 통화를 선택해 계산할 수 있어 최근 운임 청구서와 대조해 볼 수 있습니다.',
            '한 가지 솔직히 밝히면, 이 수치는 중량이 주된 비용 요인인 항공 운송을 전제로 합니다. 해상 운송에서는 절감이 실재하지만 더 작습니다.',
          ],
        },
        {
          h: '포기하는 것은 없습니다',
          p: [
            '경량화는 화물이 온전히 도착할 때만 의미가 있습니다. 허니컴의 적재 능력은 코어 두께, 셀 크기, 지종으로 설계되며 육각 구조가 셀 벽 전체로 하중을 분산합니다.',
            '설계된 패널은 약 12kN의 압축력을 견디고, 팔레트 등급 사양은 일반 수출 화물에서 합판에 준하는 정하중을 담당합니다.',
          ],
        },
      ],
      takeaways: [
        '항공 운임은 포장에도 제품과 동일한 요율을 적용합니다.',
        '약 5kg 허니컴 팔레트는 팔레트 한 자리당 약 20kg의 자체 중량을 없앱니다.',
        'US$4.50/kg 기준 팔레트당 약 US$90 절감입니다.',
        '팔레트 구매가는 일회성이지만, 그 중량의 운임은 매 선적마다 반복됩니다.',
        '절감 효과는 항공에서 가장 크고, 해상에서는 규정 준수와 취급 이점이 더 큽니다.',
      ],
      faq: [
        {
          q: '종이 허니컴 팔레트는 목재보다 얼마나 가볍습니까?',
          a: '표준 허니컴 팔레트는 약 5kg, 동급 목재 수출 팔레트는 약 25kg으로 약 80% 가볍습니다. 팔레트당 약 20kg의 청구 대상 자체 중량이 줄어듭니다.',
        },
        {
          q: '우리 회사의 항공 운임 절감액은 어떻게 계산합니까?',
          a: '월 출하 팔레트 수 × 팔레트당 절감 20kg × kg당 운임입니다. 월 250개, US$4.50/kg이면 250 × 20 × 4.5 = 월 약 US$22,500입니다.',
        },
        {
          q: '해상 운송에도 같은 절감이 적용됩니까?',
          a: '부분적입니다. 해상 운송은 중량보다 컨테이너 단위 가격이 중심이라 직접 절감은 작습니다. 이점은 중량 한도 내 적재량, ISPM-15 면제, 안전한 취급, 목적지 무상 폐기에서 나옵니다.',
        },
      ],
      ctaTitle: '귀사의 청구서와 대조해 보십시오',
      ctaText: '원하는 통화로 절감 계산기를 사용하시거나, 노선과 월 물량을 알려주시면 함께 산출해 드립니다.',
      ctaPrimary: '절감액 계산하기',
      ctaSecondary: '허니컴 팔레트 보기',
      imageAlt: '계류장에서 팔레트 화물을 적재 중인 항공 화물기',
      tags: ['항공 운임 kg당 비용', '팔레트 자체 중량 절감', '경량 수출 팔레트', '항공 운임 절감'],
      relatedLabel: '이어서 읽기',
      takeawaysLabel: '핵심 요약',
      faqLabel: '자주 묻는 질문',
      readLabel: '분 소요',
    },
  },
};
