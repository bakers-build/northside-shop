import { defineConfig } from 'vite'

// esbuild compiles the JSX for the build and for the tests, so no React plugin is needed.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
})
