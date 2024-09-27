import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    passWithNoTests: true,
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.ts']
    }
  }
})
