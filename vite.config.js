import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { ChemicalVitePlugin } from "chemicaljs";

export default defineConfig({
  plugins: [svelte(), ChemicalVitePlugin()],
  server: {
    port: 5173,
  },
  build: {
    outDir: "build",
  },
});
