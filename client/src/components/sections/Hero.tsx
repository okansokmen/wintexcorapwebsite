import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              Wintex Çorap v2.0
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" onClick={() => window.location.href = 'mailto:okansokmen@gmail.com?subject=Wintex%20%C3%87orap%20Bilgi%20Talebi'}>
                {t('hero.cta.primary')}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Link href="/digital-journey">
                <Button size="lg" variant="outline" className="gap-2">
                  <PlayCircle className="h-4 w-4" />
                  {t('hero.cta.secondary')}
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>%30 Verimlilik Artışı</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>%100 Stok Doğruluğu</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] w-full hidden lg:block">
            {/* Abstract 3D Illustration Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl backdrop-blur-3xl" />
            <img 
              src="/images/production-flow.jpg" 
              alt="Production Flow" 
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
