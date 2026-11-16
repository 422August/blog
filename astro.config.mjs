
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site = "https://blog.august0422.com";

export default defineConfig({
  site,
  base: "/blog",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
