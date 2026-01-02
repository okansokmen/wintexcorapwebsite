import { useI18n } from "@/lib/i18n";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl text-primary">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground">
                W
              </div>
              <span>Wintex</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('nav.modules')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">{t('module.sample.title')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('module.planning.title')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('module.production.title')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('module.costing.title')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('nav.reports')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">{t('report.cost.title')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('report.performance.title')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('report.shipment.title')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@wintex.com</li>
              <li>+90 212 555 00 00</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Wintex. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
