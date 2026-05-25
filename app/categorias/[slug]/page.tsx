import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  return {
    title: category ? `${category.name} | Antoér Joalheria` : "Categoria | Antoér Joalheria"
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.name);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{category.name}</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-ink sm:text-5xl">{category.name} Antoér</h1>
        <p className="mt-4 leading-7 text-taupe">{category.description}</p>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {category.subcategories.map((subcategory) => (
          <span key={subcategory} className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-ink">
            {subcategory}
          </span>
        ))}
      </div>
      <ProductGrid products={categoryProducts} />
    </section>
  );
}
