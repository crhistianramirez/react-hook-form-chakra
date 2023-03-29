import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), typescript({ tsconfig: 'tsconfig.lib.json' })],
  build: {
    outDir: 'dist',
    lib: {
      fileName: 'index',
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'react-hook-form-chakra',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-hook-form', '@chakra-ui/react']
    }
  }
})
