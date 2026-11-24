import { fileURLToPath } from 'node:url';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import content from './src/data/recipes.json' with { type: 'json' };
import t from './src/i18n/en.json' with { type: 'json' };

const page = (name) => fileURLToPath(new URL(name, import.meta.url));

export default {
    base: './',
    plugins: [ViteEjsPlugin({ ...content, t }, { ejs: { rmWhitespace: true } })],
    server: {
        watch: { ignored: ['**/.vs', '**/.vs/**'] }
    },
    build: {
        rolldownOptions: {
            input: {
                home: page('index.html'),
                cookbook: page('cookbook.html'),
                recipe: page('recipe.html'),
                saved: page('saved.html')
            }
        }
    }
};
