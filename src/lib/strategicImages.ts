// Home-page section imagery from src/assets/strategic/ (hero photos are reserved for the hero slideshow).
const modules = import.meta.glob("../assets/strategic/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" }) as Record<string, string>;
export const strategicImages: string[] = Object.entries(modules).sort(([a], [b]) => a.localeCompare(b)).map(([, s]) => s);
export const strategic = (i: number) => strategicImages[i % strategicImages.length];
