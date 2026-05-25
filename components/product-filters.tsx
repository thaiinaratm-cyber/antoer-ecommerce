"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { filterProducts, getMaterials } from "@/lib/products";
import { ProductGrid } from "@/components/product-grid";

export function ProductFilters() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");

  const materials = useMemo(() => getMaterials(), []);
  const filteredProducts = useMemo(() => filterProducts({ query, category, material }), [query, category, material]);

  return (
    <section className="grid gap-6">
      <div className="grid gap-3 rounded-lg border border-black/10 bg-white p-4 shadow-sm lg:grid-cols-[1fr_220px_220px]">
        <label className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-taupe" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por joia, material ou serviço"
            className="h-12 w-full rounded-md border border-black/10 bg-pearl pl-10 pr-4 text-sm outline-none transition focus:border-gold"
          />
        </label>
        <label className="relative">
          <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-taupe" size={18} />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-12 w-full rounded-md border border-black/10 bg-pearl pl-10 pr-4 text-sm outline-none transition focus:border-gold"
          >
            <option value="">Todas as categorias</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <select
          value={material}
          onChange={(event) => setMaterial(event.target.value)}
          className="h-12 w-full rounded-md border border-black/10 bg-pearl px-4 text-sm outline-none transition focus:border-gold"
        >
          <option value="">Todos os materiais</option>
          {materials.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <p className="text-sm text-taupe">{filteredProducts.length} itens encontrados em {products.length} cadastrados.</p>
      <ProductGrid products={filteredProducts} />
    </section>
  );
}
