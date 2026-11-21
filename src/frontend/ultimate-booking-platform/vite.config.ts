
import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  const customerUrl = env.VITE_CUSTOMER_URL;
  const businessUrl = env.VITE_BUSINESS_URL;

  if (!customerUrl || !businessUrl) {
    throw new Error('Missing remote URLs in environment variables');
  }

  return {
    plugins: [
      react(),
      federation({
        name: 'host',
        remotes: {
          customer: {
            type: 'module',
            name: 'customer',
            entry: `${customerUrl}/remoteEntry.js`,
          },
          business: {
            type: 'module',
            name: 'business',
            entry: `${businessUrl}/remoteEntry.js`,
          },
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
      }),
    ],
    server: {
      port: 5000,
      strictPort: true,
    },
  };
});
