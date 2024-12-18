import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@chakra-ui/react": resolve("packages/react/src"),
      compositions: resolve("apps/compositions/src"),
    },
  },
  test: {
    globals: true,
    watch: false,
    environment: "jsdom",
    include: ["**/*test.{ts,tsx,jsx}"],
    setupFiles: ["vitest.setup.ts"],
    coverage: {
      include: ["packages"],
    },
  },
  plugins: [react()],
  server: {//configuraciones para desarrollo en docker-compose.yml
    watch: {//configuraciones para desarrollo en docker-compose.yml
      usePolling: true,//configuraciones para desarrollo en docker-compose.yml
    },//configuraciones para desarrollo en docker-compose.yml
    host: '0.0.0.0',//configuraciones para desarrollo en docker-compose.yml
    port: 5173//configuraciones para desarrollo en docker-compose.yml
  },//configuraciones para desarrollo en docker-compose.yml  
})