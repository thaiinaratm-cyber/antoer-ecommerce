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
npm run import-products
npm run build
```

## Cadastro de produtos por CSV

Edite a planilha em `data/import/produtos.csv` e rode:

```bash
npm run import-products
```

O CSV deve ser salvo em UTF-8 e separado por ponto e vírgula (`;`). Esse é o formato esperado pelo Excel em português do Brasil, mantendo as colunas separadas e acentos corretos como `Alianças`, `Anéis`, `Serviços` e `Orçamento`.

O script lê o CSV e recria automaticamente `data/products.ts`, que é o arquivo usado pela loja. As colunas são:

`name`, `category`, `subcategory`, `material`, `price`, `priceLabel`, `installments`, `description`, `image`, `featured`, `isCustomOrder`, `allowWhatsappQuote`, `stockStatus`.

Regras importantes:

- Use `;` como separador de colunas.
- Para centavos, use vírgula, por exemplo `249,90`.
- `price` vazio gera produto sob orçamento com `price: null`.
- `featured`, `isCustomOrder` e `allowWhatsappQuote` aceitam `sim` ou `não`.
- `stockStatus` aceita `disponível`, `sob encomenda` ou `indisponível`.
- A coluna `image` deve ter só o nome do arquivo, por exemplo `anel-ouro.jpg`; o script gera `/produtos/anel-ouro.jpg`.
- Coloque as imagens reais em `public/produtos/` com o mesmo nome informado na planilha.
- O script gera `id` e `slug` automaticamente a partir do nome do produto.

## Integrações futuras previstas

A estrutura está separada para evoluir com painel admin, Supabase, upload de imagens, controle de pedidos e pagamentos por Mercado Pago ou Stripe, sem reescrever o catálogo atual.
