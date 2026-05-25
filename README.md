# Antoér Joalheria e Relojoaria

E-commerce mobile-first em Next.js, TypeScript, Tailwind CSS, Context API e localStorage.

## Estrutura

- `app/`: rotas do App Router, páginas institucionais, catálogo, carrinho e checkout.
- `components/`: componentes reutilizáveis de UI, filtros e cards.
- `context/`: estado global do carrinho com persistência local.
- `data/`: produtos e categorias mockados.
- `lib/`: formatação, busca, catálogo e mensagens de WhatsApp.
- `types/`: tipos centrais do domínio.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Integrações futuras previstas

A estrutura está separada para evoluir com painel admin, Supabase, upload de imagens, controle de pedidos e pagamentos por Mercado Pago ou Stripe, sem reescrever o catálogo atual.
