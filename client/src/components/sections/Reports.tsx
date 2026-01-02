import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useI18n } from "@/lib/i18n";
import { FileText, PieChart, TrendingUp } from "lucide-react";

export default function Reports() {
  const { t } = useI18n();

  return (
    <section id="reports" className="py-20 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t('reports.title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('hero.description')}
            </p>
          </div>
          <Button variant="outline">{t('reports.viewAll')}</Button>
        </div>

        <Tabs defaultValue="cost" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-1 bg-muted/50 rounded-xl mb-8">
            <TabsTrigger value="cost" className="py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>{t('report.cost.title')}</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="performance" className="py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <div className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                <span>{t('report.performance.title')}</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="shipment" className="py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>{t('report.shipment.title')}</span>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <div className="relative rounded-2xl border bg-card overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 pointer-events-none" />
            
            <TabsContent value="cost" className="m-0 p-0">
              <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{t('report.cost.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('report.cost.desc')}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Reçete vs Gerçekleşen fark analizi
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Döviz bazlı maliyet takibi
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Görsel grafiklerle kolay analiz
                    </li>
                  </ul>
                  <Button className="mt-4">Örnek Raporu İndir (PDF)</Button>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border shadow-lg bg-muted">
                  <img src="/images/dashboard-mockup.jpg" alt="Cost Analysis Report" className="object-cover w-full h-full" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="m-0 p-0">
              <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{t('report.performance.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('report.performance.desc')}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Otomatik puanlama sistemi
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Geçmiş dönem karşılaştırmaları
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Kalite ve termin bazlı detaylı analiz
                    </li>
                  </ul>
                  <Button className="mt-4">Örnek Raporu İndir (PDF)</Button>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border shadow-lg bg-muted">
                  <img src="/images/quality-control.jpg" alt="Performance Report" className="object-cover w-full h-full" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipment" className="m-0 p-0">
              <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{t('report.shipment.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('report.shipment.desc')}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Model resimli sipariş listeleri
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Haftalık ve aylık sevkiyat takvimi
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Adet ve tutar bazlı özetler
                    </li>
                  </ul>
                  <Button className="mt-4">Örnek Raporu İndir (PDF)</Button>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border shadow-lg bg-muted">
                  <img src="/images/mobile-app.jpg" alt="Shipment Report" className="object-cover w-full h-full" />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
