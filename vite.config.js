// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path"; // ⬅️ Importamos 'dirname' de 'path'
import { fileURLToPath } from "url"; // ⬅️ Importamos 'fileURLToPath'

// --- Definindo __dirname para ambiente ESM/Vite ---
// Isso recria a variável __dirname que o Node.js tradicional injetava
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// --- Fim da definição ---

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // ✅ AGORA resolve(__dirname, "./src") funcionará
      "@": resolve(__dirname, "./src"),
    },
  },
});
