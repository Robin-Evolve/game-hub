import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      proxy: {
        // Fix proxy to RAWG API for local development
        "/api/rawg-proxy": {
          target: "https://api.rawg.io/api", // Ensure this target is correct
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/rawg-proxy/, ""), // Correctly rewrite path
          secure: false,
        },
      },
      port: 5173,
    },
    define: {
      "import.meta.env.VITE_RAWG_API_KEY": JSON.stringify(
        env.VITE_RAWG_API_KEY
      ),
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
        env.VITE_API_BASE_URL
      ),
    },
  };
});
