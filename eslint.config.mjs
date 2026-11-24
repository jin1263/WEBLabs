import js from '@eslint/js';
import globals from 'globals';

export default [
    { ignores: ['node_modules/**', 'dist/**', '.vs/**'] },
    js.configs.recommended,
    {
        languageOptions: { globals: globals.node },
        rules: { eqeqeq: 'error' }
    }
];
