import { sentryVitePlugin } from '@sentry/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'oppa-app',
      project: 'london-trade-fe',
      include: './dist',
      authToken: 'a7f4317743274ea6bd7c09e2c4354aafd38e919e7a2644c0937481b0d3498a1c',
    }),
  ],
})
