import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, Mail, MapPin, Phone, User } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
      <Header />
      
      <main className="flex-1 container py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="h-4 w-4" />
              {t('contact.back')}
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{t('contact.title')}</h1>
            <p className="text-muted-foreground text-lg">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>{t('contact.info.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('contact.info.person')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.info.company')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mobile</h3>
                    <a href="tel:+905425343855" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +90 542 534 38 55
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <a href="mailto:okansokmen@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      okansokmen@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-sm text-muted-foreground">Istanbul, Turkey</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.form.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t('contact.form.name')}
                    </label>
                    <Input id="name" placeholder={t('contact.form.name')} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t('contact.form.email')}
                      </label>
                      <Input id="email" type="email" placeholder={t('contact.form.email')} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        {t('contact.form.phone')}
                      </label>
                      <Input id="phone" type="tel" placeholder={t('contact.form.phone')} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t('contact.form.message')}
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder={t('contact.form.message')} 
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
