/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
	test: {
		include: ['**/tests/*.spec.ts'], // glob pattern to include test files

	}
	// your config here
})
