module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: true,
            experimentalObjectRestSpread: true
        }
    },
    extends: ['eslint:recommended', 'plugin:react/recommender', 'prettier', 'prettier:react'],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 0,
        'no-var': 'error',
        quotes: [2, 'single', { avoidEscape: true }],
        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 2
            }
        ],
        'spaced-comment': ['error', 'always'],
        'keyword-spacing': 'error',
        curly: 'error'
    },
    plugins: ['prettier'],
    settings: {
        react: {
            version: '17'
        }
    }
}
