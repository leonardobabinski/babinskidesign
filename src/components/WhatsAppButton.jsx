import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5541987807482?text=' +
  encodeURIComponent("Hi Leonardo! I found your portfolio and I'd like to talk about a project.");

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="md:hidden fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg active:scale-95 transition-transform"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
