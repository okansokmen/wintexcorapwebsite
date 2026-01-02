import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Videos() {
  const { t } = useI18n();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      title: "WinTex Çorap Üretim Planlama ve Takip Sistemi",
      file: "WinTex Çorap Üretim Planlama ve Takip Sistemi.mp4",
      thumbnail: "/images/production-flow.jpg"
    },
    {
      title: "WinTex Çorap Barkodlu Kolileme ve Sevkiyat",
      file: "WinTex Çorap Barkodlu Kolileme ve Sevkiyat.mp4",
      thumbnail: "/images/mobile-app.jpg"
    },
    {
      title: "WinTex Çorap Mobil Kalite Kontrol",
      file: "WinTex Çorap Mobil Kalite Kontrol.mp4",
      thumbnail: "/images/quality-control.jpg"
    },
    {
      title: "WinTex Çorap Üretim Sakat Talepleri",
      file: "WinTex Çorap Üretim Sakat Talepleri.mp4",
      thumbnail: "/images/dashboard-mockup.jpg"
    },
    {
      title: "Wintex Socks Education",
      file: "Wintex Socks Education-2.mp4",
      thumbnail: "/images/hero-bg.jpg"
    }
  ];

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

        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{t('videos.title')}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('videos.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-muted bg-card/50 backdrop-blur-sm">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <PlayCircle className="h-6 w-6 ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                        {video.title}
                      </CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 group-hover:text-primary">
                        {t('videos.watch')}
                      </Button>
                    </CardFooter>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
                  <DialogHeader className="sr-only">
                    <DialogTitle>{video.title}</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video w-full">
                    <video 
                      controls 
                      autoPlay 
                      className="w-full h-full"
                      src={`/videos/${video.file}`}
                    >
                      Your browser does not support the video tag.
                    </video>
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
