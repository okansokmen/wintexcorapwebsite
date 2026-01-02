import { create } from 'zustand';

type Language = 'tr' | 'en';

interface I18nState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.features': 'Özellikler',
    'nav.modules': 'Modüller',
    'nav.reports': 'Raporlar',
    'nav.contact': 'İletişim',
    'nav.faq': 'SSS',
    'nav.demo': 'Demo İste',
    'nav.about': 'Hakkımızda',
    'nav.videos': 'Videolar',
    'nav.journey': 'Dijital Yolculuk',

    // Hero Section
    'hero.badge': 'Wintex Çorap v2.0',
    'hero.title': 'Çorap Üretiminde Dijital Dönüşüm',
    'hero.desc': 'İplikten sevkiyata, tüm çorap üretim süreçlerinizi tek bir platformda yönetin. Verimliliği artırın, maliyetleri düşürün.',
    'hero.cta': 'Hemen Başlayın',
    'hero.learn_more': 'Detaylı Bilgi',
    'hero.stat1': '%30 Verimlilik Artışı',
    'hero.stat2': '%100 Stok Doğruluğu',

    // Modules Section
    'modules.title': 'Kapsamlı Modüller',
    'modules.subtitle': 'Üretiminizin her aşaması için özelleştirilmiş çözümler',
    'modules.sample': 'Numune Yönetimi',
    'modules.sample.desc': 'Numune taleplerini, reçeteleri ve maliyetleri tek ekrandan yönetin.',
    'modules.planning': 'Üretim Planlama',
    'modules.planning.desc': 'Makine parkurunuzu verimli planlayın, darboğazları önleyin.',
    'modules.production': 'Üretim Takip',
    'modules.production.desc': 'Barkodlu sistem ile anlık üretim takibi ve performans analizi.',
    'modules.inventory': 'Stok Yönetimi',
    'modules.inventory.desc': 'İplik, aksesuar ve mamul stoklarını hatasız yönetin.',
    'modules.cost': 'Maliyet Analizi',
    'modules.cost.desc': 'Gerçek zamanlı maliyet takibi ile karlılığınızı artırın.',
    'modules.quality': 'Kalite Kontrol',
    'modules.quality.desc': 'Üretim hatalarını minimize edin, kalite standartlarını koruyun.',

    // Reports Section
    'reports.title': 'Gelişmiş Raporlama',
    'reports.subtitle': 'Veriye dayalı kararlar almanızı sağlayan detaylı raporlar',
    'reports.view': 'Raporu İncele',
    'reports.download': 'İndir',

    // Footer
    'footer.desc': 'Çorap üreticileri için geliştirilmiş, uçtan uca üretim takip ve planlama yazılımı.',
    'footer.rights': 'Tüm hakları saklıdır.',

    // CTA Section
    'cta.title': 'Üretiminizi Dijitalleştirmeye Hazır mısınız?',
    'cta.desc': 'Wintex Çorap yazılımı ile verimliliğinizi artırın, hataları minimize edin.',
    'cta.demo': 'Ücretsiz Demo İste',
    'cta.contact': 'Bize Ulaşın',
    
    // About Page
    'about.title': 'Hakkımızda',
    'about.subtitle': 'WinTex Üretim, Planlama ve Takip Programı',
    'about.intro': 'WinTex, tasarım ve numune talebinden başlayarak, satın alma ve fason tedarik süreçlerindeki maliyetlendirme farklılıklarına, üretim planlama ve takibine, barkod tabanlı envanter ve kalite kontrol sistemlerine kadar tüm üretim yaşam döngüsünü ele almaktadır.',
    'about.system.title': 'WinTex Üretim Planlama ve Takip Sistemi',
    'about.system.desc': 'WinTex, çorap ve tekstil üretimi için tasarlanmış, numune talebinden son sevkiyata kadar tüm süreçleri kapsayan entegre bir planlama ve takip sistemidir. Sistem, barkodlu takip, mobil entegrasyon ve detaylı raporlama gibi modern teknolojileri kullanarak operasyonel verimliliği artırmayı hedefler.',
    'about.capabilities.title': 'Sistemin Genel Yetenekleri ve Teknolojileri',
    'about.capabilities.desc': 'WinTex, modüler yapısı ve geniş fonksiyon yelpazesi ile uçtan uca bir çözüm sunar.',
    'about.capabilities.core': 'Temel Yetenekler',
    'about.capabilities.tech': 'Kullanılan Teknolojiler',
    'about.flow.title': 'Akış Şeması ve Modüller Arası İlişki',
    'about.flow.desc': 'WinTex sistemi, üretim sürecindeki adımları mantıksal bir akış şeması içinde birbirine bağlar.',
    
    // Videos Page
    'videos.title': 'Tanıtım Filmleri',
    'videos.subtitle': 'Wintex Çorap yazılımının özelliklerini ve kullanımını videolarımızla keşfedin.',
    'videos.watch': 'İzle',
    
    // Digital Journey Page
    'journey.title': 'Bir Ürünün Dijital Yolculuğu',
    'journey.subtitle': 'WinTex ile Fikirden Müşteriye Tekstil Süreç Yönetimi',
    'journey.roadmap.title': 'Yol Haritamız: Entegre Bir Süreç',
    'journey.roadmap.desc': 'Bir ürünün hayat döngüsünü, dört ana dijital kilometre taşı üzerinden takip ediyoruz.',
    'journey.step1.title': '1. Fikir & Tasarım',
    'journey.step1.desc': 'Yaratıcılığın dijitalleşmesi.',
    'journey.step2.title': '2. Maliyet & Tedarik',
    'journey.step2.desc': 'Veriye dayalı stratejik kararlar.',
    'journey.step3.title': '3. Üretim & Kalite',
    'journey.step3.desc': 'Sahada tam kontrol ve şeffaflık.',
    'journey.step4.title': '4. Paketleme & Sevkiyat',
    'journey.step4.desc': 'Kusursuz operasyon ve izlenebilirlik.',
    
    // Journey Modals
    'journey.modal.close': 'Kapat',
    'journey.modal.step1.title': 'Fikir ve Tasarım Süreci',
    'journey.modal.step1.content': 'Tasarım ekibi, trend analizleri ve pazar araştırmaları sonucunda ortaya çıkan fikirleri dijital ortamda teknik föylere dönüştürür. Bu aşamada iplik türleri, renk varyantları, örgü teknikleri ve ölçü tabloları belirlenir. Oluşturulan teknik föy, tüm üretim sürecinin referans noktası olur.',
    'journey.modal.step2.title': 'Maliyet ve Tedarik Yönetimi',
    'journey.modal.step2.content': 'Teknik föy verileri kullanılarak otomatik maliyet hesaplamaları yapılır. İplik sarfiyatları, işçilik giderleri ve genel üretim giderleri analiz edilir. Üretimin şirket içinde mi yoksa fason olarak mı yapılacağına karar verilir ve gerekli hammadde siparişleri otomatik olarak oluşturulur.',
    'journey.modal.step3.title': 'Üretim ve Kalite Kontrol',
    'journey.modal.step3.content': 'Üretim planlama modülü ile makine parkuru optimize edilir. Barkodlu takip sistemi sayesinde her bir çorap çiftinin hangi makinede, hangi operatör tarafından ve ne zaman üretildiği kayıt altına alınır. Kalite kontrol istasyonlarında yapılan denetimler anlık olarak sisteme işlenir.',
    'journey.modal.step4.title': 'Paketleme ve Sevkiyat',
    'journey.modal.step4.content': 'Üretimi tamamlanan ürünler, müşteri siparişlerine göre paketlenir ve kolilenir. Çeki listeleri otomatik oluşturulur ve sevkiyat planlaması yapılır. Müşteriye özel etiketleme ve paketleme talimatları sistem üzerinden takip edilir.',

    'journey.techsheet.title': 'Her Şey Bir Fikirle Başlar: Dijital Teknik Föy Oluşturma',
    'journey.techsheet.desc': 'Tasarım bölümü, trend analizleri ve Ürün Yönetimi onayı sonrası, modelin tüm DNA\'sını içeren Model İstek Formu\'nu (Teknik Föy) WinTex üzerinde oluşturur. Bu form, sürecin geri kalanı için tek gerçeklik kaynağı haline gelir.',
    'journey.strategy.title': 'Stratejik Kavşak: Fason Üretim mi, Komple Satın Alma mı?',
    'journey.strategy.desc': 'Teknik Föy tamamlandıktan sonra Ürün Yöneticisi, modelin üretim stratejisine karar verir. WinTex, bu kararı veriye dayalı olarak almayı sağlayacak altyapıyı sunar.',
    'journey.production.title': 'Üretim ve Kalite Kontrol',
    'journey.production.desc': 'Gantt şeması ile makine planlaması yapılır, barkodlu takip sistemi ile üretim her aşamada izlenir.',
    'journey.shipping.title': 'Paketleme ve Sevkiyat',
    'journey.shipping.desc': 'Ürünler son kontrolden geçer, çeki listeleri oluşturulur ve sevkiyat planlanır.',

    // Contact Page
    'contact.title': 'İletişim',
    'contact.subtitle': 'Sorularınız için bize ulaşın. Tekstil ERP yazılımı ve çorap üretim takip yazılımı hakkında bilgi alın.',
    'contact.back': 'Ana Sayfaya Dön',
    'contact.info.title': 'İletişim Bilgileri',
    'contact.info.person': 'Okan Sökmen',
    'contact.info.company': 'YaGe Yazılım Geliştirme Bilgisayar',
    'contact.info.address': 'İstanbul, Türkiye',
    'contact.form.title': 'Bize Yazın',
    'contact.form.name': 'Adınız Soyadınız',
    'contact.form.email': 'E-posta Adresiniz',
    'contact.form.phone': 'Telefon Numaranız',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Gönder',
    'contact.form.success': 'Mesajınız başarıyla gönderildi!',

    // FAQ
    'faq.title': 'Sıkça Sorulan Sorular',
    'faq.subtitle': 'Wintex Çorap hakkında merak ettiğiniz her şey',
    'faq.q1': 'Program barkod takibini destekliyor mu?',
    'faq.a1': 'Evet, Wintex Çorap hammadde girişinden ürün sevkiyatına kadar tam barkod desteği sunar. Tüm hareketleri el terminalleri veya barkod okuyucularla takip edebilirsiniz.',
    'faq.q2': 'Maliyet hesaplama nasıl yapılıyor?',
    'faq.a2': 'Sistem; hammadde fiyatları, işçilik, genel giderler ve döviz kurlarını dikkate alarak maliyetleri otomatik hesaplar. Reçete bazlı hesaplama ile dinamik maliyetlendirme sunar.',
    'faq.q3': 'Muhasebe programlarıyla entegre çalışır mı?',
    'faq.a3': 'Evet, Wintex popüler muhasebe yazılımlarıyla (Logo, Mikro, Netsis vb.) entegre olabilir. Fatura ve cari hareketler otomatik olarak aktarılır.',
    'faq.q4': 'Kurulum ve eğitim süreci ne kadar sürer?',
    'faq.a4': 'Firmanızın büyüklüğüne bağlı olarak kurulum ve temel eğitim süreci genellikle 2-4 hafta içinde tamamlanır. Uzman ekibimiz yerinde ve uzaktan destek sağlar.',
    'faq.q5': 'Program fason üretim takibi için uygun mu?',
    'faq.a5': 'Kesinlikle. Fasona giden ve gelen ürünleri takip edebilir, fason yerindeki stokları yönetebilir ve fire oranlarını izleyebilirsiniz.',

    // Reports Page
    'reports.page.title': 'Detaylı Raporlar',
    'reports.page.subtitle': 'Wintex Çorap ile alabileceğiniz yüzlerce rapordan seçilmiş örnekler.',
    'reports.category.all': 'Tümü',
    'reports.category.production': 'Üretim',
    'reports.category.stock': 'Stok',
    'reports.category.cost': 'Maliyet',
    'reports.category.planning': 'Planlama',
    'reports.modal.close': 'Kapat',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.modules': 'Modules',
    'nav.reports': 'Reports',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.demo': 'Request Demo',
    'nav.about': 'About Us',
    'nav.videos': 'Videos',
    'nav.journey': 'Digital Journey',

    // Hero Section
    'hero.badge': 'Wintex Sock v2.0',
    'hero.title': 'Digital Transformation in Sock Production',
    'hero.desc': 'Manage all your sock production processes from yarn to shipment on a single platform. Increase efficiency, reduce costs.',
    'hero.cta': 'Get Started',
    'hero.learn_more': 'Learn More',
    'hero.stat1': '30% Efficiency Increase',
    'hero.stat2': '100% Inventory Accuracy',

    // Modules Section
    'modules.title': 'Comprehensive Modules',
    'modules.subtitle': 'Customized solutions for every stage of your production',
    'modules.sample': 'Sample Management',
    'modules.sample.desc': 'Manage sample requests, recipes and costs from a single screen.',
    'modules.planning': 'Production Planning',
    'modules.planning.desc': 'Plan your machine park efficiently, prevent bottlenecks.',
    'modules.production': 'Production Tracking',
    'modules.production.desc': 'Instant production tracking and performance analysis with barcode system.',
    'modules.inventory': 'Inventory Management',
    'modules.inventory.desc': 'Manage yarn, accessory and finished goods stocks flawlessly.',
    'modules.cost': 'Cost Analysis',
    'modules.cost.desc': 'Increase your profitability with real-time cost tracking.',
    'modules.quality': 'Quality Control',
    'modules.quality.desc': 'Minimize production errors, maintain quality standards.',

    // Reports Section
    'reports.title': 'Advanced Reporting',
    'reports.subtitle': 'Detailed reports enabling data-driven decisions',
    'reports.view': 'View Report',
    'reports.download': 'Download',

    // Footer
    'footer.desc': 'End-to-end production tracking and planning software developed for sock manufacturers.',
    'footer.rights': 'All rights reserved.',

    // CTA Section
    'cta.title': 'Ready to Digitize Your Production?',
    'cta.desc': 'Increase your efficiency and minimize errors with Wintex Sock software.',
    'cta.demo': 'Request Free Demo',
    'cta.contact': 'Contact Us',
    
    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'WinTex Production, Planning and Tracking Program',
    'about.intro': 'WinTex covers the entire production lifecycle, starting from design and sample requests, to costing differences in purchasing and subcontracting processes, production planning and tracking, barcode-based inventory and quality control systems.',
    'about.system.title': 'WinTex Production Planning and Tracking System',
    'about.system.desc': 'WinTex is an integrated planning and tracking system designed for sock and textile production, covering all processes from sample request to final shipment. The system aims to increase operational efficiency by using modern technologies such as barcode tracking, mobile integration and detailed reporting.',
    'about.capabilities.title': 'General Capabilities and Technologies of the System',
    'about.capabilities.desc': 'WinTex offers an end-to-end solution with its modular structure and wide range of functions.',
    'about.capabilities.core': 'Core Capabilities',
    'about.capabilities.tech': 'Technologies Used',
    'about.flow.title': 'Flow Chart and Relationship Between Modules',
    'about.flow.desc': 'WinTex system connects the steps in the production process within a logical flow chart.',
    
    // Videos Page
    'videos.title': 'Promotional Videos',
    'videos.subtitle': 'Discover the features and usage of Wintex Sock software with our videos.',
    'videos.watch': 'Watch',
    
    // Digital Journey Page
    'journey.title': 'A Product\'s Digital Journey',
    'journey.subtitle': 'Textile Process Management from Idea to Customer with WinTex',
    'journey.roadmap.title': 'Our Roadmap: An Integrated Process',
    'journey.roadmap.desc': 'We track a product\'s lifecycle through four main digital milestones.',
    'journey.step1.title': '1. Idea & Design',
    'journey.step1.desc': 'Digitization of creativity.',
    'journey.step2.title': '2. Cost & Procurement',
    'journey.step2.desc': 'Data-driven strategic decisions.',
    'journey.step3.title': '3. Production & Quality',
    'journey.step3.desc': 'Full control and transparency in the field.',
    'journey.step4.title': '4. Packaging & Shipment',
    'journey.step4.desc': 'Flawless operation and traceability.',
    
    // Journey Modals
    'journey.modal.close': 'Close',
    'journey.modal.step1.title': 'Idea and Design Process',
    'journey.modal.step1.content': 'The design team transforms ideas emerging from trend analysis and market research into technical sheets in a digital environment. At this stage, yarn types, color variants, knitting techniques and size charts are determined. The created technical sheet becomes the reference point for the entire production process.',
    'journey.modal.step2.title': 'Cost and Procurement Management',
    'journey.modal.step2.content': 'Automatic cost calculations are made using technical sheet data. Yarn consumption, labor costs and general production expenses are analyzed. It is decided whether production will be done in-house or outsourced, and necessary raw material orders are automatically created.',
    'journey.modal.step3.title': 'Production and Quality Control',
    'journey.modal.step3.content': 'Machine park is optimized with the production planning module. Thanks to the barcode tracking system, which machine, which operator and when each pair of socks was produced is recorded. Inspections made at quality control stations are instantly processed into the system.',
    'journey.modal.step4.title': 'Packaging and Shipment',
    'journey.modal.step4.content': 'Completed products are packaged and boxed according to customer orders. Packing lists are automatically created and shipment planning is done. Customer-specific labeling and packaging instructions are tracked through the system.',

    'journey.techsheet.title': 'Everything Starts with an Idea: Creating a Digital Technical Sheet',
    'journey.techsheet.desc': 'After trend analysis and Product Management approval, the design department creates the Model Request Form (Technical Sheet) containing the entire DNA of the model on WinTex. This form becomes the single source of truth for the rest of the process.',
    'journey.strategy.title': 'Strategic Crossroads: Contract Manufacturing or Complete Purchase?',
    'journey.strategy.desc': 'After the Technical Sheet is completed, the Product Manager decides on the production strategy of the model. WinTex provides the infrastructure to make this decision based on data.',
    'journey.production.title': 'Production and Quality Control',
    'journey.production.desc': 'Machine planning is done with Gantt chart, production is monitored at every stage with barcode tracking system.',
    'journey.shipping.title': 'Packaging and Shipment',
    'journey.shipping.desc': 'Products pass final inspection, packing lists are created and shipment is planned.',

    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact us for your questions. Get information about textile ERP software and sock production tracking software.',
    'contact.back': 'Back to Home',
    'contact.info.title': 'Contact Information',
    'contact.info.person': 'Okan Sökmen',
    'contact.info.company': 'YaGe Software Development Computer',
    'contact.info.address': 'Istanbul, Turkey',
    'contact.form.title': 'Write to Us',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email Address',
    'contact.form.phone': 'Your Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Your message has been sent successfully!',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you wonder about Wintex Sock',
    'faq.q1': 'Does the program support barcode tracking?',
    'faq.a1': 'Yes, Wintex Sock offers full barcode support from raw material entry to product shipment. You can track all movements with handheld terminals or barcode readers.',
    'faq.q2': 'How is cost calculation done?',
    'faq.a2': 'The system automatically calculates costs by taking into account raw material prices, labor, overheads and exchange rates. It offers dynamic costing with recipe-based calculation.',
    'faq.q3': 'Does it work integrated with accounting programs?',
    'faq.a3': 'Yes, Wintex can integrate with popular accounting software (Logo, Mikro, Netsis etc.). Invoices and current account movements are transferred automatically.',
    'faq.q4': 'How long does the installation and training process take?',
    'faq.a4': 'Depending on the size of your company, the installation and basic training process is usually completed within 2-4 weeks. Our expert team provides on-site and remote support.',
    'faq.q5': 'Is the program suitable for contract manufacturing tracking?',
    'faq.a5': 'Absolutely. You can track products going to and coming from subcontractors, manage stocks at the subcontractor site and monitor waste rates.',

    // Reports Page
    'reports.page.title': 'Detailed Reports',
    'reports.page.subtitle': 'Selected examples from hundreds of reports you can get with Wintex Sock.',
    'reports.category.all': 'All',
    'reports.category.production': 'Production',
    'reports.category.stock': 'Stock',
    'reports.category.cost': 'Cost',
    'reports.category.planning': 'Planning',
    'reports.modal.close': 'Close',
  }
};

export const useI18n = create<I18nState>((set, get) => ({
  language: 'tr',
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => {
    const lang = get().language;
    return translations[lang][key as keyof typeof translations['tr']] || key;
  },
}));
