import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Modules from "@/components/sections/Modules";
import Reports from "@/components/sections/Reports";
import FAQ from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Journey Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t('journey.title')}</h2>
              <p className="text-muted-foreground text-lg">
                {t('journey.subtitle')}
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border shadow-xl bg-background">
              <img 
                src="/images/production-flow.jpg" 
                alt="Production Process" 
                className="w-full h-auto object-cover max-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
                  {[
                    "Planlama & Tedarik",
                    "Örme & Üretim",
                    "Kalite Kontrol",
                    "Depo & Sevkiyat"
                  ].map((step, i) => (
                    <div key={i} className="bg-background/80 backdrop-blur p-4 rounded-lg text-center border shadow-sm">
                      <div className="text-2xl font-bold text-primary mb-1">0{i+1}</div>
                      <div className="font-medium">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Modules />
        
        <Reports />
        
        <FAQ />

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
              {t('cta.title')}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              {t('cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2 text-primary font-bold">
                {t('cta.demo')}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                {t('cta.contact')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
