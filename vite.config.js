import { defineConfig } from "vite";

export default defineConfig({
	build: {
		manifest: true,
		rollupOptions: {
			output: {
				entryFileNames: 'assets/js/[name].js',
				assetFileNames: 'assets/css/[name].css'
			}
		}
	}	
});