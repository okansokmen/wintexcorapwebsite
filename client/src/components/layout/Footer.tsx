import { useI18n } from "@/lib/i18n";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer">
                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground">
                  W
                </div>
                <span>Wintex</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('nav.modules')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">{t('module.sample.title')}</Link></li>
              <li><Link href="/" className="hover:text-primary">{t('module.planning.title')}</Link></li>
              <li><Link href="/" className="hover:text-primary">{t('module.production.title')}</Link></li>
              <li><Link href="/" className="hover:text-primary">{t('module.costing.title')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('nav.reports')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">{t('report.cost.title')}</Link></li>
              <li><Link href="/" className="hover:text-primary">{t('report.performance.title')}</Link></li>
              <li><Link href="/" className="hover:text-primary">{t('report.shipment.title')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>okansokmen@gmail.com</li>
              <li>+90 542 534 38 55</li>
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
