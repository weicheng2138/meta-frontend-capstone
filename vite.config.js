import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/meta-frontend-capstone/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test.config.js",
  },
});
