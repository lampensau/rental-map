import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte({
      hot: !process.env.VITEST
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/vitest-setup.ts'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    alias: {
      $lib: path.resolve(__dirname, './src/lib'),
      $app: path.resolve(__dirname, './src/tests/mocks/app')
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/tests/'],
    },
    reporters: ['default'],
    testTimeout: 10000
  },
  resolve: {
    conditions: ['browser', 'import', 'default'],
    alias: {
      $lib: path.resolve(__dirname, './src/lib'),
      $app: path.resolve(__dirname, './src/tests/mocks/app')
    }
  },
  define: {
    'import.meta.env.SSR': false,
    'process.env.SVELTE_BUILD_ENVIRONMENT': JSON.stringify('browser')
  }
});
