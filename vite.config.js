import { config } from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Cargar variables de entorno desde el archivo .env
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
