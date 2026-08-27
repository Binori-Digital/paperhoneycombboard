import type { Post } from './types';

export const post: Post = {
  slug: 'electronics-packaging-shock-esd-protection',
  date: '2026-08-18',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=75',
  related: ['container-humidity-mould-cargo-damage', 'dimensional-volumetric-weight-packaging'],
  i18n: {
    en: {
      title: 'Shipping Electronics: Shock, Static and the Cost of Getting It Wrong',
      description: 'High-value electronics fail from shock, vibration, humidity and static long before they fail from crushing. Here is how to specify packaging that protects margin as well as product.',
      excerpt: 'A dropped server does not need to look damaged to be a total loss. Here is what actually destroys electronics in transit.',
      intro: [
        'Electronics are the least forgiving cargo in the container. The damage that matters is rarely visible on arrival: a solder joint cracked by repeated vibration, a connector stressed by a single drop, corrosion starting under a heatsink.',
        'For high-value consignments, packaging is not a cost line. It is the difference between a delivered order and a warranty claim on goods that already shipped.',
      ],
      sections: [
        {
          h: 'The four failure modes',
          p: [
            'Shock. A single drop during handling transfers a peak acceleration into the product. Sensitive assemblies have a documented fragility level, usually expressed in G, above which internal damage occurs even when the housing looks intact.',
            'Vibration. Long road and sea legs apply continuous low-level input that loosens fasteners, fatigues solder joints, and abrades surfaces in contact.',
            'Humidity and condensation. Moisture in a sealed container corrodes contacts and can leave residue on boards, a problem covered in detail in our article on container rain.',
            'Electrostatic discharge. Static generated during handling and unpacking can damage semiconductors invisibly, degrading reliability rather than causing outright failure.',
          ],
        },
        {
          h: 'How honeycomb addresses shock and vibration',
          p: [
            'Honeycomb absorbs energy by progressive crushing of its cell walls, which converts impact energy into controlled deformation rather than transmitting it into the product. That is the same principle used in aerospace and motorsport energy-absorbing structures, at packaging economics.',
            'Because the cushioning is engineered rather than bulk, the required section is often thinner than an equivalent foam solution, which reduces both chargeable volume and material use.',
            'Fitments, corner blocks, and internal bracing can be die-cut to the product profile so the item is held in place rather than floating in void fill, which is what controls vibration damage over long transits.',
          ],
        },
        {
          h: 'Being precise about static',
          p: [
            'This is where we will be careful rather than promotional. Standard kraft honeycomb is not an ESD-protective material and should not be presented as one.',
            'ESD protection is delivered by the primary packaging in contact with the device: static-shielding bags, dissipative liners, or antistatic-treated inner materials, selected against the device sensitivity classification.',
            'Honeycomb performs the outer structural role in that system: it carries the load, absorbs impact, and holds geometry. The correct specification pairs an ESD-appropriate inner layer with a honeycomb outer structure, and any supplier who tells you a plain paper board is an ESD solution is overselling.',
          ],
        },
        {
          h: 'Specifying it properly',
          p: [
            'Three inputs drive the design: product weight and dimensions, its fragility level if known, and the transit profile including drop height, number of handling events, and journey length.',
            'From those, the honeycomb density, cushion thickness, and fitment geometry can be specified with far more confidence than by picking a catalogue box and filling the gaps.',
          ],
        },
      ],
      takeaways: [
        'Electronics usually fail from shock, vibration, humidity and static rather than crushing.',
        'Honeycomb absorbs impact through progressive cell-wall crushing, often in a thinner section than foam.',
        'Die-cut fitments restrain the product, which is what controls vibration damage on long transits.',
        'Standard kraft honeycomb is not an ESD material; static protection belongs to the inner packaging layer.',
        'Specify from product weight, fragility level and transit profile rather than from a catalogue size.',
      ],
      faq: [
        {
          q: 'Is paper honeycomb antistatic or ESD-safe?',
          a: 'Standard kraft honeycomb is not an ESD-protective material and should not be relied on for static control. ESD protection comes from the inner packaging in contact with the device, such as static-shielding bags or dissipative liners. Honeycomb provides the outer structural and cushioning layer in that system.',
        },
        {
          q: 'Does honeycomb protect electronics as well as foam?',
          a: 'For shock and vibration, engineered honeycomb performs comparably and often in a thinner section, because it absorbs energy through progressive cell crushing rather than bulk. The correct comparison depends on the product fragility level and drop height, which determine the required cushion specification.',
        },
        {
          q: 'What information do you need to specify electronics packaging?',
          a: 'Product weight and dimensions, fragility level in G if you have it, expected drop height, number of handling events, and the transit route and duration. From those we can specify honeycomb density, cushion thickness and fitment geometry.',
        },
      ],
      ctaTitle: 'Specify protection, not guesswork',
      ctaText: 'Send your product weight, dimensions and transit profile and our engineers will specify the cushioning and fitments around it.',
      ctaPrimary: 'Talk to an Engineer',
      ctaSecondary: 'See Honeycomb Boxes',
      imageAlt: 'Close-up of a printed circuit board with surface-mounted components',
      tags: ['electronics export packaging', 'shock protection packaging', 'vibration damage transit electronics', 'ESD packaging electronics', 'honeycomb cushioning electronics'],
      relatedLabel: 'Continue reading',
      takeawaysLabel: 'Key takeaways',
      faqLabel: 'Frequently asked questions',
      readLabel: 'min read',
    },
    ms: {
      title: 'Menghantar Elektronik: Kejutan, Statik dan Kos Kesilapan',
      description: 'Elektronik bernilai tinggi gagal akibat kejutan, getaran, kelembapan dan statik jauh sebelum gagal akibat himpitan. Ini cara menetapkan pembungkusan yang melindungi margin dan produk.',
      excerpt: 'Pelayan yang terjatuh tidak perlu kelihatan rosak untuk menjadi kerugian total. Ini yang sebenarnya memusnahkan elektronik dalam transit.',
      intro: [
        'Elektronik ialah kargo paling tidak memaafkan dalam kontena. Kerosakan yang penting jarang kelihatan semasa ketibaan: sambungan pateri retak akibat getaran berulang, penyambung tertekan akibat satu jatuhan, kakisan bermula di bawah penyerap haba.',
        'Bagi konsainmen bernilai tinggi, pembungkusan bukan item kos. Ia perbezaan antara pesanan yang dihantar dan tuntutan waranti ke atas barangan yang sudah dihantar.',
      ],
      sections: [
        {
          h: 'Empat mod kegagalan',
          p: [
            'Kejutan. Satu jatuhan semasa pengendalian memindahkan pecutan puncak ke dalam produk. Pemasangan sensitif mempunyai tahap kerapuhan berdokumen, biasanya dinyatakan dalam G.',
            'Getaran. Perjalanan darat dan laut yang panjang mengenakan input berterusan yang melonggarkan pengikat dan melesukan sambungan pateri.',
            'Kelembapan dan kondensasi. Lembapan dalam kontena tertutup mengakis sentuhan dan boleh meninggalkan sisa pada papan litar.',
            'Nyahcas elektrostatik. Statik yang terjana semasa pengendalian boleh merosakkan semikonduktor secara tidak kelihatan.',
          ],
        },
        {
          h: 'Cara honeycomb menangani kejutan dan getaran',
          p: [
            'Honeycomb menyerap tenaga melalui pemampatan progresif dinding selnya, menukar tenaga hentaman kepada ubah bentuk terkawal dan bukan memindahkannya ke produk.',
            'Kerana kusyen itu terjurutera dan bukan sekadar pukal, keratan yang diperlukan selalunya lebih nipis daripada penyelesaian foam setara.',
            'Sisipan, blok sudut dan penyangga dalaman boleh dipotong acuan mengikut profil produk supaya item dipegang di tempatnya dan bukan terapung dalam pengisi rongga.',
          ],
        },
        {
          h: 'Tepat tentang statik',
          p: [
            'Di sinilah kami akan berhati-hati dan bukan promosi. Honeycomb kraft standard bukan bahan pelindung ESD dan tidak sepatutnya dipersembahkan sebagai satu.',
            'Perlindungan ESD disampaikan oleh pembungkusan primer yang bersentuhan dengan peranti: beg pelindung statik, pelapik pelesap, atau bahan dalaman dirawat antistatik.',
            'Honeycomb memainkan peranan struktur luar dalam sistem itu. Mana-mana pembekal yang memberitahu anda papan kertas biasa ialah penyelesaian ESD sedang melebih-lebihkan.',
          ],
        },
        {
          h: 'Menetapkannya dengan betul',
          p: [
            'Tiga input memacu reka bentuk: berat dan dimensi produk, tahap kerapuhannya jika diketahui, dan profil transit termasuk ketinggian jatuhan dan panjang perjalanan.',
            'Daripada itu, ketumpatan honeycomb, ketebalan kusyen dan geometri sisipan boleh ditetapkan dengan jauh lebih yakin.',
          ],
        },
      ],
      takeaways: [
        'Elektronik biasanya gagal akibat kejutan, getaran, kelembapan dan statik dan bukan himpitan.',
        'Honeycomb menyerap hentaman melalui pemampatan progresif dinding sel, selalunya dalam keratan lebih nipis daripada foam.',
        'Sisipan potong acuan menahan produk, yang mengawal kerosakan getaran pada transit panjang.',
        'Honeycomb kraft standard bukan bahan ESD; perlindungan statik milik lapisan pembungkusan dalaman.',
        'Tetapkan daripada berat produk, tahap kerapuhan dan profil transit dan bukan daripada saiz katalog.',
      ],
      faq: [
        {
          q: 'Adakah honeycomb kertas antistatik atau selamat ESD?',
          a: 'Honeycomb kraft standard bukan bahan pelindung ESD dan tidak boleh diharapkan untuk kawalan statik. Perlindungan ESD datang daripada pembungkusan dalaman yang bersentuhan dengan peranti. Honeycomb menyediakan lapisan struktur dan kusyen luar.',
        },
        {
          q: 'Adakah honeycomb melindungi elektronik sebaik foam?',
          a: 'Bagi kejutan dan getaran, honeycomb terjurutera berprestasi setara dan selalunya dalam keratan lebih nipis. Perbandingan tepat bergantung pada tahap kerapuhan produk dan ketinggian jatuhan.',
        },
        {
          q: 'Maklumat apa diperlukan untuk menetapkan pembungkusan elektronik?',
          a: 'Berat dan dimensi produk, tahap kerapuhan dalam G jika ada, ketinggian jatuhan dijangka, bilangan peristiwa pengendalian, serta laluan dan tempoh transit.',
        },
      ],
      ctaTitle: 'Tetapkan perlindungan, bukan tekaan',
      ctaText: 'Hantar berat, dimensi dan profil transit produk anda dan jurutera kami akan menetapkan kusyen dan sisipan mengikutnya.',
      ctaPrimary: 'Hubungi Jurutera',
      ctaSecondary: 'Lihat Peti Honeycomb',
      imageAlt: 'Pandangan dekat papan litar bercetak dengan komponen lekap permukaan',
      tags: ['pembungkusan eksport elektronik', 'pembungkusan perlindungan kejutan', 'kerosakan getaran transit elektronik', 'pembungkusan ESD elektronik'],
      relatedLabel: 'Teruskan membaca',
      takeawaysLabel: 'Intipati penting',
      faqLabel: 'Soalan lazim',
      readLabel: 'minit bacaan',
    },
    zh: {
      title: '电子产品运输：冲击、静电，以及做错的代价',
      description: '高价值电子产品往往先毁于冲击、振动、湿气和静电，而非挤压。本文讲解如何选配既保护产品也保护利润的包装。',
      excerpt: '一台跌落过的服务器，不需要看起来有损伤，就已经是全损。以下才是运输途中真正摧毁电子产品的东西。',
      intro: [
        '电子产品是集装箱里最不容出错的货物。真正要命的损伤在到货时往往看不出来：反复振动导致的焊点开裂、一次跌落造成的连接器受损、散热器下方悄悄开始的腐蚀。',
        '对高价值货物而言，包装不是一项成本，而是"顺利交付"与"对已发出货物提出保修索赔"之间的分界线。',
      ],
      sections: [
        {
          h: '四种失效模式',
          p: [
            '冲击。搬运中的一次跌落会把峰值加速度传入产品。敏感组件有明确的脆值（通常以G表示），超过该值即使外壳完好，内部也已受损。',
            '振动。长距离公路和海运会持续施加低量级输入，使紧固件松动、焊点疲劳、接触面磨损。',
            '湿气与冷凝。密闭柜内的水分会腐蚀触点并在电路板上留下残留 — 这一点在我们关于集装箱雨的文章中有详细展开。',
            '静电放电。搬运和拆包时产生的静电会以看不见的方式损伤半导体，表现为可靠性下降而非当场失效。',
          ],
        },
        {
          h: '蜂窝如何应对冲击与振动',
          p: [
            '蜂窝通过孔壁的渐进压溃吸收能量，把冲击能转化为受控变形，而不是传递给产品。这与航空航天和赛车吸能结构使用的原理相同，只是成本落在包装的量级上。',
            '由于缓冲来自工程结构而非堆料厚度，所需截面通常比等效泡沫方案更薄，从而同时降低计费体积和材料用量。',
            '内衬、护角和内部支撑可按产品轮廓模切，让产品被牢牢固定而不是漂浮在填充物里 — 这正是控制长途振动损伤的关键。',
          ],
        },
        {
          h: '关于静电，必须说准确',
          p: [
            '在这一点上我们选择严谨而非推销：标准牛皮蜂窝并不是ESD防护材料，也不应被包装成那样。',
            'ESD防护由与器件直接接触的初级包装提供：静电屏蔽袋、耗散型内衬，或经抗静电处理的内材，并按器件敏感度等级选型。',
            '蜂窝在这个体系中承担外层结构角色：承载、吸能、保持几何形状。任何告诉您"普通纸板就是ESD方案"的供应商，都在夸大其词。',
          ],
        },
        {
          h: '如何正确选配',
          p: [
            '三项输入决定设计：产品重量与尺寸、已知的脆值等级，以及运输剖面（跌落高度、搬运次数、行程长度）。',
            '有了这些，蜂窝密度、缓冲厚度和内衬几何就能被有把握地设计出来，而不是挑一个目录箱再把空隙塞满。',
          ],
        },
      ],
      takeaways: [
        '电子产品通常毁于冲击、振动、湿气和静电，而非挤压。',
        '蜂窝以孔壁渐进压溃吸能，所需截面往往比泡沫更薄。',
        '模切内衬固定产品，这是控制长途振动损伤的关键。',
        '标准牛皮蜂窝不是ESD材料；静电防护属于内层包装的职责。',
        '按产品重量、脆值和运输剖面选配，而不是按目录尺寸。',
      ],
      faq: [
        {
          q: '纸蜂窝是抗静电或ESD安全材料吗？',
          a: '标准牛皮蜂窝不是ESD防护材料，不应依赖它做静电控制。ESD防护来自与器件接触的内层包装，例如静电屏蔽袋或耗散型内衬。蜂窝在该体系中提供外层结构与缓冲。',
        },
        {
          q: '蜂窝保护电子产品的效果能赶上泡沫吗？',
          a: '在冲击与振动方面，工程蜂窝表现相当，且往往用更薄的截面即可，因为它靠孔壁渐进压溃而非堆料厚度吸能。准确比较取决于产品脆值和跌落高度。',
        },
        {
          q: '选配电子产品包装需要哪些信息？',
          a: '产品重量与尺寸、若已知的脆值（G）、预期跌落高度、搬运次数，以及运输航线与时长。据此我们可确定蜂窝密度、缓冲厚度和内衬几何。',
        },
      ],
      ctaTitle: '用规格说话，而不是靠猜',
      ctaText: '发送您的产品重量、尺寸和运输剖面，我们的工程师会据此设计缓冲与内衬。',
      ctaPrimary: '咨询工程师',
      ctaSecondary: '查看蜂窝箱',
      imageAlt: '带贴片元件的印刷电路板特写',
      tags: ['电子产品 出口包装', '防冲击包装', '运输振动 电子损伤', '电子 ESD 包装', '蜂窝 缓冲 电子'],
      relatedLabel: '继续阅读',
      takeawaysLabel: '要点速览',
      faqLabel: '常见问题',
      readLabel: '分钟阅读',
    },
    ja: {
      title: '電子機器の輸送：衝撃、静電気、そして間違えたときの代償',
      description: '高価な電子機器は、圧壊よりずっと前に衝撃・振動・湿気・静電気で故障します。製品だけでなく利益も守る梱包仕様の考え方を解説します。',
      excerpt: '落下したサーバーは、見た目に損傷がなくても全損になり得ます。輸送中に電子機器を壊しているものの正体を解説します。',
      intro: [
        '電子機器はコンテナの中で最も許容度の低い貨物です。問題となる損傷は到着時に見えないことがほとんどです。反復振動で入ったはんだクラック、一度の落下で応力を受けたコネクタ、ヒートシンクの下で始まった腐食。',
        '高額貨物にとって梱包はコスト項目ではありません。納品完了と、出荷済み品への保証クレームとを分ける境界線です。',
      ],
      sections: [
        {
          h: '4つの故障モード',
          p: [
            '衝撃。荷役中の一度の落下が製品にピーク加速度を伝えます。敏感な組立品には許容脆弱値（通常G表示）があり、これを超えると筐体が無傷でも内部が損傷します。',
            '振動。長い陸送・海上区間は低レベルの入力を継続的に与え、締結を緩め、はんだ接合を疲労させ、接触面を摩耗させます。',
            '湿気と結露。密閉コンテナ内の水分は接点を腐食させ、基板に残渣を残します。詳細はコンテナ内降雨の記事で扱っています。',
            '静電気放電。荷役や開梱時に生じた静電気は半導体を目に見えない形で損傷させ、即時故障ではなく信頼性低下として現れます。',
          ],
        },
        {
          h: 'ハニカムが衝撃と振動に効く仕組み',
          p: [
            'ハニカムはセル壁の逐次圧壊によってエネルギーを吸収し、衝撃を製品に伝えるのではなく制御された変形に変換します。航空宇宙やモータースポーツの吸収構造と同じ原理を、梱包の経済性で使います。',
            '緩衝が嵩ではなく設計によるため、必要断面は同等の発泡材より薄くなることが多く、課金容積と材料使用量の両方を減らせます。',
            '内装、コーナーブロック、内部補強は製品形状に合わせて打ち抜けるため、製品が緩衝材の中で泳がず保持されます。長距離輸送の振動損傷を抑えるのはこの保持です。',
          ],
        },
        {
          h: '静電気については正確に',
          p: [
            'ここは宣伝ではなく慎重に述べます。標準的なクラフトハニカムはESD保護材ではなく、そのように提示すべきではありません。',
            'ESD保護はデバイスに接する一次包装が担います。静電シールドバッグ、散逸性ライナー、帯電防止処理された内材を、デバイスの感度区分に応じて選定します。',
            'ハニカムはそのシステムの外層構造を担い、荷重を支え、衝撃を吸収し、形状を保ちます。ただの紙製ボードをESD対策だと説明する供給者は、明らかに過剰な売り込みです。',
          ],
        },
        {
          h: '正しく仕様化する',
          p: [
            '設計を決めるのは3つの入力です。製品重量と寸法、判明していれば脆弱値、そして落下高さ・荷役回数・行程長を含む輸送プロファイル。',
            'これらがあれば、ハニカム密度、緩衝厚、内装形状をカタログ箱に隙間を詰めるより遥かに高い確度で仕様化できます。',
          ],
        },
      ],
      takeaways: [
        '電子機器は圧壊よりも衝撃・振動・湿気・静電気で故障します。',
        'ハニカムはセル壁の逐次圧壊で吸収し、発泡材より薄い断面で済むことが多くあります。',
        '打ち抜き内装が製品を保持し、長距離輸送の振動損傷を抑えます。',
        '標準クラフトハニカムはESD材ではなく、静電対策は内層包装の役割です。',
        'カタログ寸法ではなく、製品重量・脆弱値・輸送プロファイルから仕様化します。',
      ],
      faq: [
        {
          q: 'ペーパーハニカムは帯電防止・ESD対応ですか？',
          a: '標準的なクラフトハニカムはESD保護材ではなく、静電対策として頼るべきではありません。ESD保護はデバイスに接する内層包装（静電シールドバッグや散逸性ライナー等）が担い、ハニカムは外層の構造・緩衝を担当します。',
        },
        {
          q: 'ハニカムは発泡材と同等に電子機器を守れますか？',
          a: '衝撃と振動については同等の性能を、より薄い断面で発揮できることが多いです。嵩ではなくセルの逐次圧壊で吸収するためです。正確な比較は製品の脆弱値と落下高さによります。',
        },
        {
          q: '電子機器梱包の仕様化には何が必要ですか？',
          a: '製品重量と寸法、判明していればG単位の脆弱値、想定落下高さ、荷役回数、輸送経路と期間です。これらからハニカム密度、緩衝厚、内装形状を決定します。',
        },
      ],
      ctaTitle: '推測ではなく仕様で守る',
      ctaText: '製品重量・寸法・輸送プロファイルをお送りください。エンジニアが緩衝と内装を設計します。',
      ctaPrimary: 'エンジニアに相談',
      ctaSecondary: 'ハニカムボックスを見る',
      imageAlt: '表面実装部品が並ぶプリント基板のクローズアップ',
      tags: ['電子機器 輸出 梱包', '衝撃保護 梱包', '輸送 振動 電子 損傷', 'ESD 梱包 電子'],
      relatedLabel: '続けて読む',
      takeawaysLabel: '要点',
      faqLabel: 'よくあるご質問',
      readLabel: '分で読めます',
    },
    ko: {
      title: '전자제품 운송: 충격, 정전기, 그리고 틀렸을 때의 대가',
      description: '고가 전자제품은 압착보다 훨씬 먼저 충격, 진동, 습기, 정전기로 고장 납니다. 제품과 마진을 함께 지키는 포장 사양을 정리했습니다.',
      excerpt: '떨어뜨린 서버는 겉이 멀쩡해도 전손이 될 수 있습니다. 운송 중 전자제품을 실제로 망가뜨리는 것들을 정리했습니다.',
      intro: [
        '전자제품은 컨테이너 안에서 가장 관대하지 않은 화물입니다. 정작 중요한 손상은 도착 시 보이지 않습니다. 반복 진동으로 갈라진 납땜, 한 번의 낙하로 응력을 받은 커넥터, 히트싱크 아래에서 시작된 부식.',
        '고가 화물에서 포장은 비용 항목이 아닙니다. 정상 납품과, 이미 출하된 제품에 대한 보증 클레임을 가르는 경계선입니다.',
      ],
      sections: [
        {
          h: '네 가지 고장 모드',
          p: [
            '충격. 취급 중 한 번의 낙하가 제품에 최대 가속도를 전달합니다. 민감한 조립품에는 보통 G로 표시되는 취약도 기준이 있고, 이를 넘으면 외관이 멀쩡해도 내부가 손상됩니다.',
            '진동. 긴 육상·해상 구간은 저수준 입력을 지속적으로 가해 체결부를 풀고 납땜을 피로시키며 접촉면을 마모시킵니다.',
            '습기와 응결. 밀폐 컨테이너의 수분은 접점을 부식시키고 기판에 잔류물을 남깁니다. 컨테이너 레인 글에서 자세히 다뤘습니다.',
            '정전기 방전. 취급과 개봉 중 발생한 정전기는 반도체를 눈에 보이지 않게 손상시켜 즉시 고장이 아니라 신뢰성 저하로 나타납니다.',
          ],
        },
        {
          h: '허니컴이 충격과 진동에 작동하는 방식',
          p: [
            '허니컴은 셀 벽의 점진적 압괴로 에너지를 흡수해, 충격을 제품에 전달하는 대신 통제된 변형으로 바꿉니다. 항공우주와 모터스포츠의 에너지 흡수 구조와 같은 원리를 포장 경제성으로 구현한 것입니다.',
            '완충이 부피가 아닌 설계에서 나오므로 필요한 단면이 동등한 폼보다 얇은 경우가 많아, 청구 부피와 자재 사용량을 함께 줄입니다.',
            '내장재, 코너 블록, 내부 보강재를 제품 형상에 맞춰 타발할 수 있어 제품이 충전재 안에서 떠다니지 않고 고정됩니다. 장거리 운송의 진동 손상을 막는 것이 바로 이 고정입니다.',
          ],
        },
        {
          h: '정전기에 대해서는 정확하게',
          p: [
            '여기서는 홍보가 아니라 신중함을 택하겠습니다. 표준 크라프트 허니컴은 ESD 보호 소재가 아니며 그렇게 제시해서도 안 됩니다.',
            'ESD 보호는 디바이스와 접촉하는 1차 포장이 담당합니다. 정전기 차폐백, 소산성 라이너, 대전방지 처리된 내장재를 디바이스 민감도 등급에 맞춰 선정합니다.',
            '허니컴은 그 체계에서 외부 구조 역할을 맡아 하중을 지지하고 충격을 흡수하며 형상을 유지합니다. 일반 종이 보드가 ESD 솔루션이라고 말하는 공급사가 있다면 과장된 판매입니다.',
          ],
        },
        {
          h: '제대로 사양화하기',
          p: [
            '설계를 좌우하는 입력은 세 가지입니다. 제품 중량과 치수, 알고 있다면 취약도 등급, 그리고 낙하 높이·취급 횟수·여정 길이를 포함한 운송 프로파일입니다.',
            '이것들이 있으면 카탈로그 상자를 골라 빈 곳을 채우는 것보다 훨씬 높은 확신으로 허니컴 밀도, 완충 두께, 내장 형상을 정할 수 있습니다.',
          ],
        },
      ],
      takeaways: [
        '전자제품은 압착보다 충격, 진동, 습기, 정전기로 고장 나는 경우가 많습니다.',
        '허니컴은 셀 벽의 점진적 압괴로 충격을 흡수하며 폼보다 얇은 단면으로 가능한 경우가 많습니다.',
        '타발 내장재가 제품을 고정하며, 이것이 장거리 진동 손상을 제어합니다.',
        '표준 크라프트 허니컴은 ESD 소재가 아니며 정전기 보호는 내층 포장의 몫입니다.',
        '카탈로그 치수가 아니라 제품 중량, 취약도, 운송 프로파일로 사양화하십시오.',
      ],
      faq: [
        {
          q: '종이 허니컴은 대전방지 또는 ESD 안전 소재입니까?',
          a: '표준 크라프트 허니컴은 ESD 보호 소재가 아니며 정전기 제어를 위해 의존해서는 안 됩니다. ESD 보호는 디바이스와 접촉하는 내층 포장(정전기 차폐백, 소산성 라이너 등)이 담당하고, 허니컴은 외부 구조와 완충을 제공합니다.',
        },
        {
          q: '허니컴이 폼만큼 전자제품을 보호합니까?',
          a: '충격과 진동에서는 동등한 성능을 더 얇은 단면으로 내는 경우가 많습니다. 부피가 아니라 셀의 점진적 압괴로 에너지를 흡수하기 때문입니다. 정확한 비교는 제품 취약도와 낙하 높이에 달려 있습니다.',
        },
        {
          q: '전자제품 포장 사양화에는 어떤 정보가 필요합니까?',
          a: '제품 중량과 치수, 알고 있다면 G 단위 취약도, 예상 낙하 높이, 취급 횟수, 운송 노선과 기간입니다. 이를 바탕으로 허니컴 밀도, 완충 두께, 내장 형상을 정합니다.',
        },
      ],
      ctaTitle: '추측이 아니라 사양으로 보호하십시오',
      ctaText: '제품 중량, 치수, 운송 프로파일을 보내주시면 엔지니어가 완충과 내장재를 설계해 드립니다.',
      ctaPrimary: '엔지니어에게 문의',
      ctaSecondary: '허니컴 박스 보기',
      imageAlt: '표면실장 부품이 배치된 인쇄회로기판 클로즈업',
      tags: ['전자제품 수출 포장', '충격 보호 포장', '운송 진동 전자 손상', '전자 ESD 포장'],
      relatedLabel: '이어서 읽기',
      takeawaysLabel: '핵심 요약',
      faqLabel: '자주 묻는 질문',
      readLabel: '분 소요',
    },
  },
};
