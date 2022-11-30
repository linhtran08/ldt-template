import { defineConfig } from 'vituum'
import twig from "@vituum/twig";
import tailwind from "@vituum/tailwind";

export default defineConfig({
	input: ['./src/views/**/*.html','./src/assets/images/*.{jpg,jpeg,webp,png,svg}', './src/emails/*.html', './src/styles/*.{css,pcss,scss,sass,less,styl,stylus}', './src/scripts/*.{js,ts,mjs}'],
	// your config goes here
	integrations: [
		twig({
			data: 'src/data/**/*.json'
		}),
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