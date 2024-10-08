import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: [], // Add paths to setup files if needed
    coverage: {
      reporter: ['lcov'],
      provider: 'v8',
    },
  },
  esbuild: {
    target: 'es2016',
  },
});
