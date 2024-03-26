import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@pages': '/src/pages',
			'@routes': '/src/routes',
			'@services': '/src/services',
			'@components': '/src/shared/components',
			'@contexts': '/src/shared/contexts',
			'@themes': '/src/shared/themes',
			// '@types': '/src/shared/types',
			'@utils': '/src/shared/utils',
		},
	},
})
