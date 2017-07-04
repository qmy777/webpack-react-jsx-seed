module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            arrowFunctions: true,
            classes: true,
            modules: true,
            defaultParams: true
        },
        sourceType: "module"
    },
    parser: "babel-eslint",
    plugins: [
        "react"
    ],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': ['warn'],
        'no-console': 0,
        "no-empty": 0,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-case": 2,
        "no-extra-parens": [2, "functions"],
        "no-self-compare": 2,
        "accessor-pairs": 2,
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        "constructor-super": 2,
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-class-assign": 2,
        "no-cond-assign": 2,
        "semi": ["error", "always"],
    },
};