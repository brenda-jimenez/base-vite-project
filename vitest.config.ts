import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // This allows to use describe, it, expect, etc., without importing them into every file. 
    globals: true,
    // Simulates a browser environment using jsdom, necessary for testing things like the DOM 
    environment: 'jsdom',
    // Allows importing and using CSS inside your components during tests.
    css: true,
    setupFiles: ['./vitest.setup.ts'],
  }
})