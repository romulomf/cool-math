import {defineConfig} from 'vite'
import {resolve} from 'node:path'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			name: 'Cool Math'
		},
		minify: false,
		rolldownOptions: {
			/**
			 * remove as dependências externas do código resultante,
			 * evitando que ela seja incluída como artefato de build
			 * gerado pela própria aplicação.
			 */
			external: ['uuid']
		}
	}
})