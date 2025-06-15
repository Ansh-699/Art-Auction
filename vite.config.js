import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "jwt-decode": path.resolve(__dirname, "node_modules/jwt-decode"),
    },
  },
});
