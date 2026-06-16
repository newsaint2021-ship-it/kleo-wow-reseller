// Dynamically map all hero slideshow images.
// Drop new images into src/assets/hero-screen/ (preferred) or src/assets/hero/
// and they'll be picked up automatically — no code changes needed.

const modules = {
  ...import.meta.glob("../assets/hero-screen/*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    import: "default",
  }),
  ...import.meta.glob("../assets/hero/*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    import: "default",
  }),
} as Record<string, string>;

export const heroImages: string[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);
