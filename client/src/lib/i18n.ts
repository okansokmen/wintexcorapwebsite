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
    'nav.about': 'Hakkımızda',
    'nav.features': 'Özellikler',
    'nav.modules': 'Modüller',
    'nav.reports': 'Raporlar',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'nav.requestDemo': 'Demo İste',
    'nav.getStarted': 'Başlayın',
    
    // Hero
    'hero.title': 'Çorap Üretiminde Dijital Dönüşüm',
    'hero.subtitle': 'Wintex Çorap Üretim Planlama ve Takip Sistemi',
    'hero.description': 'İplikten sevkiyata, tüm çorap üretim süreçlerinizi tek bir platformda yönetin. Verimliliği artırın, maliyetleri düşürün.',
    'hero.cta.primary': 'Hemen Başlayın',
    'hero.cta.secondary': 'Detaylı Bilgi',
    
    // Journey
    'journey.title': 'Bir Çorabın Yolculuğu: İplikten Sevkiyata',
    'journey.description': 'Wintex ile üretiminizin her aşamasını kontrol altına alın.',
    
    // Why Wintex
    'why.title': 'Neden Wintex Çorap?',
    'why.description': 'Çorap üretimine özel geliştirilmiş güçlü özellikler.',
    
    // Modules
    'modules.title': 'Kapsamlı Modül Yapısı',
    'modules.viewAll': 'Tüm Modülleri İncele',
    'modules.explore': 'İncele',
    
    'module.sample.title': 'Numune ve Modelhane',
    'module.sample.desc': 'Numune süreçlerini hızlandırın, maliyetleri düşürün.',
    
    'module.planning.title': 'Planlama ve Satın Alma',
    'module.planning.desc': 'İplik ihtiyacını otomatik hesaplayın, stokları optimize edin.',
    
    'module.production.title': 'Üretim Takibi',
    'module.production.desc': 'Örme makinelerini anlık izleyin, verimliliği artırın.',
    
    'module.costing.title': 'Maliyet Analizi',
    'module.costing.desc': 'Gerçekleşen maliyetleri anlık görün, kârlılığı yönetin.',
    
    'module.warehouse.title': 'Depo ve Stok Yönetimi',
    'module.warehouse.desc': 'Barkodlu takip ile kayıpları önleyin, stok doğruluğunu artırın.',
    
    'module.shipment.title': 'Sevkiyat ve Lojistik',
    'module.shipment.desc': 'Hatalı sevkiyatı önleyin, müşteri memnuniyetini artırın.',
    
    // Reports
    'reports.title': 'Güçlü Raporlama Altyapısı',
    'reports.viewAll': 'Tüm Raporları İncele',
    
    'report.cost.title': 'Gerçekleşen Maliyet Analizi',
    'report.cost.desc': 'Planlanan ve gerçekleşen maliyetleri kalem kalem karşılaştırın.',
    
    'report.performance.title': 'Tedarikçi Performans Karnesi',
    'report.performance.desc': 'Tedarikçilerinizi kalite ve termin performansına göre değerlendirin.',
    
    'report.shipment.title': 'Görsel Sevkiyat Planlama',
    'report.shipment.desc': 'Siparişlerinizi model resimleriyle planlayın.',
    
    // FAQ
    'faq.title': 'Sıkça Sorulan Sorular',
    
    // CTA
    'cta.title': 'Üretim Süreçlerinizi Dijitalleştirmeye Hazır mısınız?',
    'cta.desc': 'Wintex Çorap yazılımı ile verimliliğinizi artırın, hataları minimize edin.',
    'cta.demo': 'Ücretsiz Demo İste',
    'cta.contact': 'Bize Ulaşın',
    
    // Contact Page
    'contact.title': 'İletişim',
    'contact.subtitle': 'Sorularınız için bize ulaşın. Tekstil ERP yazılımı ve çorap üretim takip yazılımı hakkında bilgi alın.',
    'contact.back': 'Ana Sayfaya Dön',
    'contact.info.title': 'İletişim Bilgileri',
    'contact.info.person': 'Okan Sökmen',
    'contact.info.company': 'YaGe Yazılım Geliştirme Bilgisayar',
    'contact.form.title': 'Bize Yazın',
    'contact.form.name': 'Ad Soyad',
    'contact.form.email': 'E-posta Adresi',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Gönder',
    
    // Footer
    'footer.rights': 'Tüm hakları saklıdır.',
  },
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.features': 'Features',
    'nav.modules': 'Modules',
    'nav.reports': 'Reports',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.requestDemo': 'Request Demo',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.title': 'Digital Transformation in Sock Manufacturing',
    'hero.subtitle': 'Wintex Sock Production Planning and Tracking System',
    'hero.description': 'Manage all your sock production processes from yarn to shipment on a single platform. Increase efficiency, reduce costs.',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Detailed Info',
    
    // Journey
    'journey.title': 'Journey of a Sock: From Yarn to Shipment',
    'journey.description': 'Take control of every stage of your production with Wintex.',
    
    // Why Wintex
    'why.title': 'Why Wintex Socks?',
    'why.description': 'Powerful features developed specifically for sock production.',
    
    // Modules
    'modules.title': 'Comprehensive Module Structure',
    'modules.viewAll': 'View All Modules',
    'modules.explore': 'Explore',
    
    'module.sample.title': 'Sample & Model Room',
    'module.sample.desc': 'Accelerate sample processes, reduce costs.',
    
    'module.planning.title': 'Planning & Purchasing',
    'module.planning.desc': 'Automatically calculate yarn requirements, optimize inventory.',
    
    'module.production.title': 'Production Tracking',
    'module.production.desc': 'Monitor knitting machines instantly, increase efficiency.',
    
    'module.costing.title': 'Cost Analysis',
    'module.costing.desc': 'See actual costs instantly, manage profitability.',
    
    'module.warehouse.title': 'Warehouse & Inventory',
    'module.warehouse.desc': 'Prevent losses with barcode tracking, increase inventory accuracy.',
    
    'module.shipment.title': 'Shipment & Logistics',
    'module.shipment.desc': 'Prevent incorrect shipments, guarantee customer satisfaction.',
    
    // Reports
    'reports.title': 'Powerful Reporting Infrastructure',
    'reports.viewAll': 'View All Reports',
    
    'report.cost.title': 'Actual Cost Analysis',
    'report.cost.desc': 'Compare planned and actual costs item by item.',
    
    'report.performance.title': 'Supplier Performance Scorecard',
    'report.performance.desc': 'Evaluate your suppliers based on quality and deadline performance.',
    
    'report.shipment.title': 'Visual Shipment Planning',
    'report.shipment.desc': 'Plan your orders with model images.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    
    // CTA
    'cta.title': 'Ready to Digitize Your Production Processes?',
    'cta.desc': 'Increase your efficiency with Wintex Sock software, minimize errors.',
    'cta.demo': 'Request Free Demo',
    'cta.contact': 'Contact Us',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Reach out for your questions. Get information about textile ERP software and sock production tracking software.',
    'contact.back': 'Back to Home',
    'contact.info.title': 'Contact Information',
    'contact.info.person': 'Okan Sökmen',
    'contact.info.company': 'YaGe Software Development Computer',
    'contact.form.title': 'Write to Us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email address',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Contact Us',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  }
};

export const useI18n = create<I18nState>((set, get) => ({
  language: 'tr',
  setLanguage: (lang: Language) => set({ language: lang }),
  t: (key: string) => {
    const lang = get().language;
    return translations[lang][key as keyof typeof translations['tr']] || key;
  }
}));
