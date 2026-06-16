// Dynamic product image resolver.
// Place files at src/assets/products/<slug>.<ext> (avif/webp/jpg/png).
// Naming follows the slug convention from product.name.

const modules = import.meta.glob(
  "../assets/products/*.{avif,webp,jpg,jpeg,png}",
  { eager: true, import: "default" },
) as Record<string, string>;

const bySlug: Record<string, string> = {};
for (const [path, src] of Object.entries(modules)) {
  const file = path.split("/").pop() ?? "";
  const slug = file.replace(/\.[^.]+$/, "").toLowerCase();
  bySlug[slug] = src;
}

export const slugify = (name: string): string =>
  name
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getProductImage = (nameOrSlug: string): string | null => {
  const slug = slugify(nameOrSlug);
  return bySlug[slug] ?? null;
};
