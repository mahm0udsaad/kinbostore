import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site-config";

// Desktop only — on mobile the bottom tab bar already has an Order tab.
export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappLink("Hi KINBO, I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed right-6 bottom-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 md:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
