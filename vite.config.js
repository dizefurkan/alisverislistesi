import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      src: "/src",
    },
  },
  plugins: [react()],
  define: {
    // Some libraries use the global object, even though it doesn't exist in the browser.
    // Alternatively, we could add `<script>window.global = window;</script>` to index.html.
    // https://github.com/vitejs/vite/discussions/5912
    global: {},
  },
});
