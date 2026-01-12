import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 개발자 도구 scss 소스맵 활성화
  css: {
    devSourcemap: true,
  },
});
