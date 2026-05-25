import Link from "next/link";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="font-serif text-3xl font-semibold">Antoér</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            Joalheria e relojoaria com curadoria de peças especiais, alianças sob medida e serviços técnicos com atendimento próximo.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Loja</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <Link href="/produtos">Produtos</Link>
            <Link href="/categorias">Categorias</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/checkout">Checkout</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contato</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <a className="inline-flex items-center gap-2" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp oficial
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> Atendimento em São Paulo
            </span>
            <span className="inline-flex items-center gap-2">
              <Instagram size={16} /> @antoerjoalheria
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © 2026 Antoér Joalheria e Relojoaria. Estrutura preparada para catálogo, pedidos e integrações futuras.
      </div>
    </footer>
  );
}
