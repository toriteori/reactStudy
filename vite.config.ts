import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 개발자 도구 scss 소스맵 활성화
  css: {
    devSourcemap: true,
  },
  server: {
    open: true, // 시스템 기본 브라우저로 열기
  },
  resolve: {
    alias: {
      // scss 경로 간소화
      '@styles': path.resolve(__dirname, 'src/scss'),
      '@components': path.resolve(__dirname, 'src/app/components'),
    },
  },
  
});
