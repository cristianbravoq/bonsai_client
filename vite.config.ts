import { defineConfig } from 'vite';
import Checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@contexts', replacement: path.resolve( path.join(__dirname, '/src/contexts')) },
      { find: '@components', replacement: path.resolve( path.join(__dirname, '/src/components'))},
      { find: '@interfaces', replacement: path.resolve(path.join(__dirname, '/src/interfaces'))},
      { find: '@services', replacement: path.resolve(path.join(__dirname, '/src/services'))},
      { find: '@utilities', replacement: path.resolve(path.join(__dirname, '/src/utilities'))},
      { find: '@styles', replacement: path.resolve(path.join(__dirname, '/src/styles'))},
      { find: '@hooks', replacement: path.resolve(path.join(__dirname, '/src/hooks'))},
      { find: '@pages', replacement: path.resolve(path.join(__dirname, '/src/pages'))},
    ],
  },
})