module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:compat/recommended',
                'plugin:sonarjs/recommended',
                'plugin:jest/style',
                'prettier/@typescript-eslint',
                'plugin:prettier/recommended',
                'prettier'
            ],
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly'
            },
            env: {
                browser: true,
                node: true,
                jest: true,
                jasmine: true,
                es6: true,
                es2017: true
            },
            plugins: ['@typescript-eslint', 'compat', 'prefer-arrow', 'import', 'prettier', 'sonarjs', 'jest'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: ['./tsconfig.eslint.json'],
                ecmaVersion: 6,
                sourceType: 'module',
                ecmaFeatures: {
                    modules: true
                }
            },
            settings: {
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx']
                },
                'import/resolver': {
                    typescript: {
                        project: ['./tsconfig.eslint.json']
                    }
                },
                // eslint-plugin-compat: define available polyfills for IE11
                polyfills: ['Promise', 'Reflect', 'Array.prototype.includes', 'Object.entries']
            },
            rules: {
                /* Activate Prettier Ruleset */
                'prettier/prettier': 'error',
                /* Browser Compatibility Errors */
                'compat/compat': 'error',
                /* Warn if console is used */
                'no-console': 'warn',
                /* Disable node unsupported import rule */
                'node/no-unsupported-features/es-syntax': 'off',
                'max-classes-per-file': ['error', 1],
                'capitalized-comments': 'off',
                /* General ESLint Rules */
                'eol-last': 'error',
                eqeqeq: ['error', 'smart'],
                'guard-for-in': 'error',
                'no-bitwise': 'error',
                'no-caller': 'error',
                'no-cond-assign': 'error',
                'no-debugger': 'error',
                'no-duplicate-case': 'error',
                'no-duplicate-imports': 'error',
                'constructor-super': 'error',
                curly: 'error',
                'no-eval': 'error',
                'no-extra-bind': 'error',
                'no-new-func': 'error',
                'no-new-wrappers': 'error',
                'no-redeclare': 'error',
                'no-return-await': 'error',
                'no-sequences': 'error',
                'no-shadow': [
                    'error',
                    {
                        hoist: 'all'
                    }
                ],
                'no-sparse-arrays': 'error',
                'no-template-curly-in-string': 'error',
                'no-throw-literal': 'error',
                'no-trailing-spaces': 'error',
                'no-undef-init': 'error',
                'no-fallthrough': 'error',
                'no-unsafe-finally': 'error',
                'no-unused-labels': 'error',
                'no-var': 'error',
                'object-shorthand': 'error',
                'one-var': ['error', 'never'],
                'prefer-arrow/prefer-arrow-functions': 'error',
                'prefer-const': 'error',
                'prefer-object-spread': 'error',
                radix: 'error',
                'space-before-function-paren': 'off',
                'spaced-comment': 'off',
                'use-isnan': 'error',
                'no-use-before-define': 'off',
                /* SonarJS adjustments */
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/cognitive-complexity': 'off',
                /* Jest Rules */
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/no-test-prefixes': 'error',
                'jest/no-test-return-statement': 'error',
                'jest/prefer-to-have-length': 'warn',
                'jest/no-disabled-tests': 'warn',
                'jest/valid-expect': 'error',
                /* TypeScript Rules */
                '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        // Interfaces need to start with I
                        selector: 'interface',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^I[A-Z]',
                            match: true
                        }
                    },
                    {
                        // classes need PascalNameConvention
                        selector: 'class',
                        format: ['PascalCase']
                    }
                ],
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        typedefs: true,
                        variables: true,
                        functions: true,
                        classes: false
                    }
                ],
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/array-type': 'error',
                '@typescript-eslint/ban-types': 'error',
                '@typescript-eslint/consistent-type-assertions': 'error',
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: ['static-field', 'instance-field', 'static-method', 'instance-method']
                    }
                ],
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/no-require-imports': 'error',
                '@typescript-eslint/no-this-alias': 'error',
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-function-type': 'error',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/triple-slash-reference': 'error',
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/unified-signatures': 'error',
                '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
                // warnings
                '@typescript-eslint/prefer-readonly': 'warn',
                'import/no-deprecated': 'warn',
                // disabled
                '@typescript-eslint/explicit-member-accessibility': [
                    'off',
                    {
                        accessibility: 'explicit'
                    }
                ],
                '@typescript-eslint/indent': 'off',
                '@typescript-eslint/member-delimiter-style': [
                    'off',
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
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/no-parameter-properties': 'off',
                '@typescript-eslint/semi': ['off', null],
                '@typescript-eslint/space-within-parens': ['off', 'never'],
                'arrow-body-style': 'off',
                'arrow-parens': ['off', 'as-needed'],
                camelcase: 'off',
                complexity: 'off',
                'dot-notation': 'off',
                'id-blacklist': 'off',
                'id-match': 'off',
                'import/no-extraneous-dependencies': 'off',
                'import/no-internal-modules': 'off',
                'import/order': 'off',
                'linebreak-style': 'off',
                'max-len': 'off',
                'new-parens': 'off',
                'newline-per-chained-call': 'off',
                'no-empty': 'off',
                'no-extra-semi': 'off',
                'no-invalid-this': 'off',
                'no-irregular-whitespace': 'off',
                'no-multiple-empty-lines': 'off',
                'no-underscore-dangle': 'off',
                'no-unused-expressions': 'off',
                'quote-props': 'off',
                'valid-typeof': 'off'
            }
        },
        {
            files: ['*.component.html'],
            parser: '@angular-eslint/template-parser',
            plugins: ['@angular-eslint/template'],
            rules: {
                '@angular-eslint/template/no-negated-async': 'error',
                '@angular-eslint/template/banana-in-a-box': 'warn',
                '@angular-eslint/template/no-call-expression': 'warn',
                '@angular-eslint/template/cyclomatic-complexity': 'off',
                '@angular-eslint/template/i18n': 'off'
            }
        }
    ]
};
