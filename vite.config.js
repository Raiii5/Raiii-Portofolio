import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // INI KUNCINYA BRO, BIAR VITE NGERTI FILE 3D
  assetsInclude: ["**/*.glb"],
});
