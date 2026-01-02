import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useI18n } from "@/lib/i18n";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location !== '/') {
        setLocation('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'nav.about', href: '/about' },
    { key: 'nav.journey', href: '/digital-journey' },
    { key: 'nav.features', href: '/digital-journey' },
    { key: 'nav.modules', href: '#modules' },
    { key: 'nav.reports', href: '/reports' },
    { key: 'nav.videos', href: '/videos' },
    { key: 'nav.contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground">
                W
              </div>
              <span>Wintex</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
              >
                {t(item.key)}
              </a>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t(item.key)}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleLanguage} title="Dil Değiştir / Switch Language">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Switch Language</span>
            <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-primary text-primary-foreground px-1 rounded">
              {language.toUpperCase()}
            </span>
          </Button>
          
          <Button variant="ghost" size="icon" onClick={toggleTheme} title="Tema Değiştir / Switch Theme">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle Theme</span>
          </Button>
          
          <Button>{t('nav.requestDemo')}</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary cursor-pointer"
                >
                  {t(item.key)}
                </a>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              )
            ))}
          </nav>
          <div className="flex items-center gap-4 pt-4 border-t">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex gap-2">
              <Globe className="h-4 w-4" />
              {language === 'tr' ? 'English' : 'Türkçe'}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="flex gap-2">
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
          <Button className="w-full">{t('nav.requestDemo')}</Button>
        </div>
      )}
    </header>
  );
}
