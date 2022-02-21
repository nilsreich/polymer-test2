import preactRefresh from '@prefresh/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxFactory: 'Preact.h',
    jsxFragment: 'Preact.Fragment',
  },
  plugins: [preactRefresh()],
})
