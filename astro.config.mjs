// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nk2417.github.io",
  integrations: [sitemap({ filter: (page) => !page.includes("404") })],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
