module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            arrowFunctions: true,
            blockBindings: true,
            classes: true,
            defaultParams: true,
            destructuring: true,
            forOf: true,
            modules: true,
            objectLiteralComputedProperties: true,
            objectLiteralDuplicateProperties: true,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            regexUFlag: true,
            regexYFlag: true,
            restParams: true,
            spread: true,
            superInFunctions: true,
            templateStrings: true,
            unicodeCodePointEscapes: true,
            globalReturn: true,
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        'arrow-body-style': 2,
        'arrow-parens': [2, 'as-needed'],
        'comma-dangle': [2, 'never'],
        'no-cond-assign': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 2,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used', 'varsIgnorePattern': '^React$'}],
        'use-isnan': 2,
        'valid-jsdoc': [2, {
            preferType: {
                object: 'Object',
                function: 'Function',
                array: 'Array',
                Number: 'number',
                String: 'string',
                Boolean: 'boolean',
                Null: 'null',
                Symbol: 'symbol',
                Undefined: 'undefined'
            },
            requireReturn: false,
            requireParamDescription: false,
            requireReturnDescription: false
        }],
        'valid-typeof': 2,

        'react/jsx-uses-vars': 2,
        'react/jsx-uses-react': 2
    },
    plugins: [
        'react'
    ],
    settings: {
        react: {
            pragma: 'React',
            version: '15.4.1'
        }
    }
};
