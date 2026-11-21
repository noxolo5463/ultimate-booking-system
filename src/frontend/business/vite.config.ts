import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'business',
      filename: 'remoteEntry.js',
      exposes: {
        './business': './src/app.tsx',
      },
      shared: {
        react:{singleton: true},
        reactDom:{singleton: true},
      },
    }),
  ],
  server: {
    port: 7000,
  },
})


