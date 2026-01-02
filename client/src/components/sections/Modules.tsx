import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { BarChart3, Box, Calculator, Factory, Palette, Truck } from "lucide-react";

export default function Modules() {
  const { t } = useI18n();

  const modules = [
    {
      icon: Palette,
      title: 'modules.sample',
      desc: 'modules.sample.desc',
      color: 'text-pink-500',
      bg: 'bg-pink-500/10'
    },
    {
      icon: Calculator,
      title: 'modules.planning',
      desc: 'modules.planning.desc',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Factory,
      title: 'modules.production',
      desc: 'modules.production.desc',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10'
    },
    {
      icon: BarChart3,
      title: 'modules.cost',
      desc: 'modules.cost.desc',
      color: 'text-green-500',
      bg: 'bg-green-500/10'
    },
    {
      icon: Box,
      title: 'modules.inventory',
      desc: 'modules.inventory.desc',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      icon: Truck,
      title: 'modules.quality',
      desc: 'modules.quality.desc',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    }
  ];

  return (
    <section id="modules" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t('modules.title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('modules.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-muted bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${module.bg} ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <module.icon className="h-6 w-6" />
                </div>
                <CardTitle>{t(module.title)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t(module.desc)}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {t('hero.learn_more')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            {t('hero.learn_more')}
          </Button>
        </div>
      </div>
    </section>
  );
}
