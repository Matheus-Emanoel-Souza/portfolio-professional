import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-professional/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  // Code splitting por rota é feito via React.lazy em src/routes; o Rollup
  // já separa vendor de app code automaticamente a partir daí.
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: true,
    // O primeiro teste do arquivo paga o cold-start do jsdom (+ fontes/CSS
    // importados) e passa de 5s por vezes com o default — sem isso, falha
    // por timeout mesmo sem nada de errado (confirmado rodando isolado).
    testTimeout: 10000,
  },
})
