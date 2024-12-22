import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups", // Ensures same-origin interaction
      "Cross-Origin-Embedder-Policy": "require-corp", // Ensures content is safe for embedding
    },
    
  },
});
