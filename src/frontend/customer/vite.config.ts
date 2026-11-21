import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'customer',
      filename: 'remoteEntry.js',
      exposes: {
        './customer': './src/app.tsx',
      },
      shared: {
        react:{singleton: true},
        reactDom:{singleton: true},
      },
    }),
  ],
  server: {
    port: 2000,
  },
})
