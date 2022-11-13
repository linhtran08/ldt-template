import { defineConfig } from 'vituum'
import twig from "@vituum/twig";
import tailwind from "@vituum/tailwind";

export default defineConfig({
	// your config goes here
	integrations: [
		twig(),
		tailwind()
	],
	templates: {
		format: 'twig'
	},
	vite: {
		build: {
			rollupOptions: {
				output: {
					assetFileNames: ({name}) => {
						if(/.png|.jp?eg|.svg|.webp/.test(name)){
							const arrayPath = name.split("/")
							const result = arrayPath.slice(arrayPath.indexOf('images'),arrayPath.length -1).join('/')
							return `assets/${result}/[name][extname]`
						}
						return 'assets/styles/[name][extname]'
					}
				}
			}
		}
	}
})