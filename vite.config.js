import { defineConfig } from "vite"

export default defineConfig({
  plugins: [],
  server: {
    historyApiFallback: false,
  },
  appType: "mpa", // Disables fallback to index.html
})
