import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Box, FileText, GitMerge, Lightbulb, Settings, Truck } from "lucide-react";
import { useState } from "react";

export default function DigitalJourney() {
  const { t } = useI18n();
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: t('journey.step1.title'),
      desc: t('journey.step1.desc'),
      icon: Lightbulb,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      modalTitle: t('journey.modal.step1.title'),
      modalContent: t('journey.modal.step1.content')
    },
    {
      id: 2,
      title: t('journey.step2.title'),
      desc: t('journey.step2.desc'),
      icon: GitMerge,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      modalTitle: t('journey.modal.step2.title'),
      modalContent: t('journey.modal.step2.content')
    },
    {
      id: 3,
      title: t('journey.step3.title'),
      desc: t('journey.step3.desc'),
      icon: Settings,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      modalTitle: t('journey.modal.step3.title'),
      modalContent: t('journey.modal.step3.content')
    },
    {
      id: 4,
      title: t('journey.step4.title'),
      desc: t('journey.step4.desc'),
      icon: Truck,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      modalTitle: t('journey.modal.step4.title'),
      modalContent: t('journey.modal.step4.content')
    }
  ];

  const activeStep = steps.find(s => s.id === selectedStep);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-muted/30">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t('journey.title')}
              </h1>
              <p className="text-xl font-medium text-foreground mb-4">
                {t('journey.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Overview */}
        <section className="py-16 container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('journey.roadmap.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('journey.roadmap.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border -z-10" />

            {steps.map((step, index) => (
              <div 
                key={step.id} 
                onClick={() => setSelectedStep(step.id)}
                className="relative bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all group cursor-pointer hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto ${step.bg} ${step.color} border ${step.border}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-muted-foreground/30 h-6 w-6" />
                )}
              </div>
            ))}
          </div>
        </section>

        <Dialog open={!!selectedStep} onOpenChange={(open) => !open && setSelectedStep(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${activeStep?.bg} ${activeStep?.color} border ${activeStep?.border}`}>
                {activeStep && <activeStep.icon className="h-6 w-6" />}
              </div>
              <DialogTitle className="text-xl">{activeStep?.modalTitle}</DialogTitle>
              <DialogDescription className="pt-4 text-base leading-relaxed">
                {activeStep?.modalContent}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Detailed Sections */}
        <div className="space-y-24 pb-24">
          {/* Step 1: Idea & Design */}
          <section className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium mb-6">
                  <Lightbulb className="h-4 w-4" />
                  {t('journey.step1.title')}
                </div>
                <h2 className="text-3xl font-bold mb-6">{t('journey.techsheet.title')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t('journey.techsheet.desc')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <FileText className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">Model İstek Formu (Teknik Föy)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Box className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">Tek Gerçeklik Kaynağı (Single Source of Truth)</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white p-8">
                <img 
                  src="/images/digital-journey-sock.jpg" 
                  alt="Digital Journey" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Step 2: Cost & Supply */}
          <section className="container bg-muted/30 py-16 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white p-8">
                  <img 
                    src="/images/strategy-sock.jpg" 
                    alt="Strategy Decision" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
                  <GitMerge className="h-4 w-4" />
                  {t('journey.step2.title')}
                </div>
                <h2 className="text-3xl font-bold mb-6">{t('journey.strategy.title')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t('journey.strategy.desc')}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-background p-6 rounded-xl border border-border/50">
                    <h4 className="font-bold mb-2">Fason Üretim</h4>
                    <p className="text-sm text-muted-foreground">Operasyonlar (kumaş, aksesuar, kesim, dikim) kontrolünüzde, parça parça ilerler.</p>
                  </div>
                  <div className="bg-background p-6 rounded-xl border border-border/50">
                    <h4 className="font-bold mb-2">Satın Alma</h4>
                    <p className="text-sm text-muted-foreground">Tüm üretim süreci tedarikçi sorumluluğunda, anahtar teslim ilerler.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3 & 4: Production & Shipping */}
          <section className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">
                  <Settings className="h-4 w-4" />
                  {t('journey.step3.title')}
                </div>
                <h2 className="text-2xl font-bold mb-4">{t('journey.production.title')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('journey.production.desc')}
                </p>
                <img 
                  src="/images/production-flow.jpg" 
                  alt="Production" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg border border-border/50"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-6">
                  <Truck className="h-4 w-4" />
                  {t('journey.step4.title')}
                </div>
                <h2 className="text-2xl font-bold mb-4">{t('journey.shipping.title')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('journey.shipping.desc')}
                </p>
                <img 
                  src="/images/dashboard-mockup.jpg" 
                  alt="Shipping" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg border border-border/50"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
