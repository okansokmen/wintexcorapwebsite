import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "905425343855";
  const message = encodeURIComponent("Merhaba, Wintex Çorap yazılımı hakkında bilgi almak istiyorum.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-16 bg-white text-black px-3 py-1 rounded-md text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        WhatsApp ile Ulaşın
      </span>
    </a>
  );
}
