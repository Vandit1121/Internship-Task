import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    cors:false
  },
  plugins: [react()],
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
});