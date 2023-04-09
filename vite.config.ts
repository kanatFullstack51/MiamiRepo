import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      // { find: "~", styles: path.join(__dirname, "styles") },
    ],

    // alias: {
    //   "@": path.resolve(__dirname, "src"),
    // },
  },
});
