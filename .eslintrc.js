module.exports = {
    ecmaFeatures: {
        arrowFunctions: true,
        blockBindings: true,
        classes: true,
        defaultParams: true,
        destructuring: true,
        forOf: true,
        modules: true,
        objectLiteralComputedProperties: true,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        restParams: true,
        spread: true,
        superInFunctions: true,
        templateStrings: true,
        jsx: true,
        experimentalObjectRestSpread: true
    },
    env: {
        es6: true
    },
    rules: {
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
        'use-isnan': 2,
        'valid-jsdoc': 2,
        'valid-typeof': 2,

        'arrow-body-style': 2,
        'arrow-parens': [2, 'as-needed']
    }
};
