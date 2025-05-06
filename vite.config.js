import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/fdl/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/pages/index/index.html"),
        about: resolve(__dirname, "src/pages/about/about.html"),
        about_news: resolve(__dirname, "src/pages/about/news/news.html"),
        news_page: resolve(
          __dirname,
          "src/pages/about/news/news-page/news-page.html"
        ),
        services: resolve(__dirname, "src/pages/services/services.html"),
        clients: resolve(__dirname, "src/pages/clients/clients.html"),
        partners: resolve(__dirname, "src/pages/partners/partners.html"),
        contacts: resolve(__dirname, "src/pages/contacts/contacts.html"),
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    open: "src/pages/index/index.html",
  },
});
