import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/todos-vue-pinia-ts/',
	plugins: [vue()],
	build: {
		target: 'esnext',
	},
});
