import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isGitHubPages = mode === 'github'
  
  return {
    plugins: [react()],
    base: isGitHubPages ? '/portfolio/' : '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom']
          }
        }
      }
    },
    server: {
      port: 3000,
      host: true
    },
    define: {
      __DEPLOYMENT_TARGET__: JSON.stringify(isGitHubPages ? 'github' : 'nginx')
    }
  }
})
