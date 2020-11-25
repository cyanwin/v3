module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
        '@vue/typescript/recommended',
        'eslint:recommended',
        '@vue/prettier/@typescript-eslint'
    ],
    parser: 'vue-eslint-parser',
    plugins: [ '@typescript-eslint' ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-var': 'error',
        'comma-spacing': [ 'error', { after: true } ],
        'array-bracket-spacing': [ 'error', 'always' ],
        '@typescript-eslint/interface-name-prefix': [
            'error',
            { prefixWithI: 'always' }
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: true
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false
                }
            }
        ],
        quotes: [ 'error', 'single' ],
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-self-closing': 'error',
        'vue/multiline-html-element-content-newline': 'error',
        'vue/array-bracket-spacing': [ 'error', 'always' ],
        'vue/arrow-spacing': 'error',
        'vue/no-setup-props-destructure': 'off',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 2,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1
            }
        ]
    }
}
