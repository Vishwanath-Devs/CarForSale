import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),

        buy: resolve(__dirname, "pages/buy.html"),
        sell: resolve(__dirname, "pages/sell.html"),
        exchange: resolve(__dirname, "pages/exchange.html"),
        about: resolve(__dirname, "pages/about.html"),
        contact: resolve(__dirname, "pages/contact.html"),
      },
    },
  },
});