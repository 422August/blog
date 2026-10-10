
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site = "https://422August.github.io";

export default defineConfig({
  site,
  base: "/blog",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
