import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { normalizeText } from "@/lib/format";
import type { CategoryName, Product } from "@/types/product";

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: CategoryName) {
  return products.filter((product) => product.category === category);
}

export function getMaterials(productList: Product[] = products) {
  return Array.from(new Set(productList.map((product) => product.material))).sort();
}

export function filterProducts({
  query,
  category,
  material
}: {
  query?: string;
  category?: string;
  material?: string;
}) {
  const normalizedQuery = normalizeText(query ?? "");

  return products.filter((product) => {
    const searchable = normalizeText(
      [product.name, product.category, product.subcategory, product.material, product.description].join(" ")
    );
    const matchesQuery = normalizedQuery ? searchable.includes(normalizedQuery) : true;
    const matchesCategory = category ? product.category === category : true;
    const matchesMaterial = material ? product.material === material : true;

    return matchesQuery && matchesCategory && matchesMaterial;
  });
}
