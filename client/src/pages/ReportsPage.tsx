import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn } from 'lucide-react';

// Rapor listesi ve kategorileri
const reports = [
  { id: 1, title: 'Aksesuar Satınalma Kılavuzu', category: 'stock', image: '/reports/Aksesuar Satınalma Kılavuzu.jpg' },
  { id: 2, title: 'Aylık İplik Envanteri', category: 'stock', image: '/reports/AYLIK IPLIK ENVANTERI.jpg' },
  { id: 3, title: 'Barkodlu Koli Etiketi', category: 'production', image: '/reports/BarkodluDahiliKoliustu7x7Etiket.jpg' },
  { id: 4, title: 'Günlük Numune Girişleri', category: 'production', image: '/reports/Bugün Girilmiş Numuneler.jpg' },
  { id: 5, title: 'Ön Maliyet Analizi', category: 'cost', image: '/reports/Darinda On Maliyet DAMA0545.jpg' },
  { id: 6, title: 'Aksesuar Eksik Listesi', category: 'stock', image: '/reports/Darinda-Aksesuarları Eksik ÇÖSler.jpg' },
  { id: 7, title: 'Günlük Üretim Hareketleri', category: 'production', image: '/reports/Darinda-Günlük Üretim Hareketleri.jpg' },
  { id: 8, title: 'Üretim Refakat Etiketi', category: 'production', image: '/reports/DarindaUretimRefakatEtiketiResimliRotali.jpg' },
  { id: 9, title: 'Dün Örülmüş Siparişler', category: 'production', image: '/reports/Dun Orulmus Siparisler.jpg' },
  { id: 10, title: 'Gecikmiş Aksesuar İşemirleri', category: 'planning', image: '/reports/Gecikmiş Aksesuar Satınalma İşemirleri.jpg' },
  { id: 11, title: 'Gecikmiş İplik İşemirleri', category: 'planning', image: '/reports/Gecikmiş Iplik Satınalma İşemirleri.jpg' },
  { id: 12, title: 'Günlük Fason Takip', category: 'production', image: '/reports/Günlük Fason Takip.jpg' },
  { id: 13, title: 'Günlük Stok Hareketleri', category: 'stock', image: '/reports/Günlük Stok Hareketleri.jpg' },
];

export default function ReportsPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState('all');

  const filteredReports = filter === 'all' 
    ? reports 
    : reports.filter(r => r.category === filter);

  const categories = [
    { id: 'all', label: t('reports.category.all') },
    { id: 'production', label: t('reports.category.production') },
    { id: 'stock', label: t('reports.category.stock') },
    { id: 'cost', label: t('reports.category.cost') },
    { id: 'planning', label: t('reports.category.planning') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('reports.page.title')}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('reports.page.subtitle')}
            </p>
          </div>

          {/* Filtre Butonları */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "default" : "outline"}
                onClick={() => setFilter(cat.id)}
                className="rounded-full"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Rapor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report) => (
              <Dialog key={report.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                      <img 
                        src={report.image} 
                        alt={report.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-background/90 backdrop-blur text-foreground px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-lg">
                          <ZoomIn className="w-4 h-4" />
                          {t('reports.view')}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t">
                      <h3 className="font-semibold text-lg truncate" title={report.title}>
                        {report.title}
                      </h3>
                      <p className="text-sm text-muted-foreground capitalize">
                        {t(`reports.category.${report.category}`)}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden flex flex-col">
                  <div className="p-4 border-b flex justify-between items-center bg-background z-10">
                    <h3 className="font-semibold text-lg">{report.title}</h3>
                    {/* Close button is handled by DialogContent default */}
                  </div>
                  <div className="flex-1 overflow-auto p-4 bg-muted/20 flex items-start justify-center">
                    <img 
                      src={report.image} 
                      alt={report.title}
                      className="max-w-full shadow-lg rounded-sm"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
