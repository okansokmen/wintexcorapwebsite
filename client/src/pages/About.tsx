import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useI18n } from "@/lib/i18n";
import { CheckCircle2, Cpu, Database, GitBranch, Layers, Smartphone } from "lucide-react";

export default function About() {
  const { t, language } = useI18n();

  const coreCapabilities = [
    "Numune ve Müşteri Yönetimi (Talep, Kart, Görüşme Takibi)",
    "Ön Maliyet ve Gerçekleşen Maliyet Analizi",
    "ÇÖS / Çorap Ön Sipariş Yönetimi",
    "Üretim ve Malzeme Planlama (Model Kartı, MTF)",
    "İplik ve Aksesuar Satın Alma ve Depo Yönetimi (Barkodlu/Raf Adresli)",
    "Üretim Planlama ve Takip (Gantt Şeması, Makine Dairesi, Atölye Takibi)",
    "Kalite Kontrol (Mobil ve Yüz Tanıma ile Giriş)",
    "Hata/Kayıp Yönetimi ve DÖF (Düzeltici Önleyici Faaliyetler)",
    "Kapasite, Dashboard ve Muhasebe Raporlaması",
    "Sevkiyat Yönetimi (Çeki Listesi)"
  ];

  const coreCapabilitiesEn = [
    "Sample and Customer Management (Request, Card, Meeting Tracking)",
    "Pre-Cost and Actual Cost Analysis",
    "Sock Pre-Order Management",
    "Production and Material Planning (Model Card, MRP)",
    "Yarn and Accessory Purchasing and Warehouse Management (Barcode/Shelf Addressed)",
    "Production Planning and Tracking (Gantt Chart, Machine Room, Workshop Tracking)",
    "Quality Control (Mobile and Face Recognition Entry)",
    "Defect/Loss Management and CAPA (Corrective and Preventive Actions)",
    "Capacity, Dashboard and Accounting Reporting",
    "Shipment Management (Packing List)"
  ];

  const technologies = [
    { title: "Veritabanı", desc: "Microsoft SQL Server", icon: Database },
    { title: "Entegrasyonlar", desc: "Microsoft Office (Excel / Word), Logo Muhasebe Programı, Elektronik tartı ve spektrometre", icon: Layers },
    { title: "Mobil Erişim", desc: "Windows CE, iOS / Android tabletler ve cep telefonları", icon: Smartphone },
    { title: "Otomasyon", desc: "Otomatik e-posta gönderimi, Periyodik raporlama ve otomatik uyarı sistemi", icon: Cpu }
  ];

  const technologiesEn = [
    { title: "Database", desc: "Microsoft SQL Server", icon: Database },
    { title: "Integrations", desc: "Microsoft Office (Excel / Word), Logo Accounting Program, Electronic scales and spectrometers", icon: Layers },
    { title: "Mobile Access", desc: "Windows CE, iOS / Android tablets and mobile phones", icon: Smartphone },
    { title: "Automation", desc: "Automatic email sending, Periodic reporting and automatic warning system", icon: Cpu }
  ];

  const flowSteps = [
    { title: "1. Numune Süreçleri", desc: "Numune Talep ile başlar, Numune Kartı oluşturulur, Numune Üretim Takibi yapılır ve Numune Showroom'a aktarılır." },
    { title: "2. Sipariş ve Planlama", desc: "Ön Maliyet çalışması yapılır, ÇÖS (Ön Sipariş) alınır, Üretim Siparişi oluşturulur ve buna bağlı Model Rota ve Reçetesi hazırlanır." },
    { title: "3. Malzeme Yönetimi", desc: "Malzeme Talep Föyü (MTF) ile ihtiyaçlar belirlenir, İplik ve Aksesuar Satın Alma İş Emirleri oluşturulur, Depo Ön Kabul ve Barkodlama ile malzemeler depoya alınır." },
    { title: "4. Üretim", desc: "Örgü Makina Planlaması (Gantt) yapılır, Örme Dairesinden İplik Talebi ile iplik çekilir, Örgü Makine İş Emri ile üretim başlar. Üretimden çıkan ürünler barkodlu olarak Burun Açık Depo'da toplanır ve parti takibi yapılır." },
    { title: "5. Son İşlemler ve Sevkiyat", desc: "Üretim İş Emirleri ve Fason Sözleşmeleri ile sonraki adımlar (yıkama, baskı, nakış vb.) planlanır. Ürünler son maliyet analizinden sonra paketlenir, Çeki Listesi hazırlanır ve sevkiyat yapılır." },
    { title: "6. Entegrasyon", desc: "Tüm bu süreçler Logo Muhasebe Programı ile entegre çalışır." }
  ];

  const flowStepsEn = [
    { title: "1. Sample Processes", desc: "Starts with Sample Request, Sample Card is created, Sample Production Tracking is done and transferred to Sample Showroom." },
    { title: "2. Order and Planning", desc: "Pre-Cost study is done, Pre-Order is taken, Production Order is created and related Model Route and Recipe are prepared." },
    { title: "3. Material Management", desc: "Needs are determined with Material Request Form (MRP), Yarn and Accessory Purchasing Work Orders are created, materials are taken to warehouse with Warehouse Pre-Acceptance and Barcoding." },
    { title: "4. Production", desc: "Knitting Machine Planning (Gantt) is done, yarn is withdrawn with Yarn Request from Knitting Department, production starts with Knitting Machine Work Order. Products coming out of production are collected in Toe Open Warehouse with barcodes and batch tracking is done." },
    { title: "5. Finishing and Shipment", desc: "Next steps (washing, printing, embroidery etc.) are planned with Production Work Orders and Subcontracting Contracts. Products are packaged after final cost analysis, Packing List is prepared and shipment is made." },
    { title: "6. Integration", desc: "All these processes work integrated with Logo Accounting Program." }
  ];

  const currentCapabilities = language === 'tr' ? coreCapabilities : coreCapabilitiesEn;
  const currentTechnologies = language === 'tr' ? technologies : technologiesEn;
  const currentFlowSteps = language === 'tr' ? flowSteps : flowStepsEn;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-muted/30">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t('about.title')}
              </h1>
              <p className="text-xl font-medium text-foreground mb-4">
                {t('about.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.intro')}
              </p>
            </div>
          </div>
        </section>

        {/* System Description */}
        <section className="py-16 container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.system.title')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.system.desc')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.capabilities.desc')}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src="/images/production-flow.jpg" 
                alt="WinTex System" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Capabilities & Technologies */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Core Capabilities */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Layers className="h-6 w-6 text-primary" />
                  {t('about.capabilities.core')}
                </h3>
                <ul className="space-y-4">
                  {currentCapabilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Cpu className="h-6 w-6 text-primary" />
                  {t('about.capabilities.tech')}
                </h3>
                <div className="grid gap-6">
                  {currentTechnologies.map((tech, index) => (
                    <div key={index} className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <tech.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{tech.title}</h4>
                          <p className="text-sm text-muted-foreground">{tech.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flow Chart */}
        <section className="py-16 container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('about.flow.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('about.flow.desc')}
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12 relative">
              {currentFlowSteps.map((step, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`bg-card p-8 rounded-2xl border border-border/50 shadow-lg relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {/* Arrow for Desktop */}
                      <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-card border-t border-r border-border/50 rotate-45 ${index % 2 === 0 ? '-right-2 border-l-0 border-b-0' : '-left-2 border-t-0 border-r-0 border-l border-b'}`} />
                      
                      <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary shadow-xl shrink-0">
                    <GitBranch className="h-5 w-5 text-primary" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
