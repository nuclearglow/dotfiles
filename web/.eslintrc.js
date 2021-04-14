module.exports = {
    root: true,
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
                'plugin:@angular-eslint/recommended',
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:compat/recommended',
                'plugin:sonarjs/recommended',
                'plugin:jest/style',
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
                        alwaysTryTypes: true,
                        project: ['./tsconfig.eslint.json']
                    }
                },
                // eslint-plugin-compat: define available polyfills for IE11
                polyfills: ['Promise', 'Reflect', 'Array.prototype.includes', 'Object.entries']
            },
            rules: {
                // Activate Prettier Ruleset
                'prettier/prettier': 'error',

                // Browser Compatibility Errors
                'compat/compat': 'error',

                // Warn if console is used
                'no-console': 'warn',

                // Disable node unsupported import rule
                'node/no-unsupported-features/es-syntax': 'off',
                'max-classes-per-file': ['error', 1],
                'capitalized-comments': 'off',

                // General ESLint Rules
                'eol-last': 'error',
                'no-loop-func': 'error',
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
                'no-shadow': 'off',
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
                'use-isnan': 'error',
                radix: 'error',
                'space-before-function-paren': 'off',
                'spaced-comment': 'off',
                'no-use-before-define': 'off',
                'keyword-spacing': 'off',
                'space-infix-ops': 'off',
                'object-curly-spacing': 'off',
                'comma-spacing': 'off',

                // SonarJS adjustments
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/cognitive-complexity': 'off',

                // Jest Rules
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/no-test-prefixes': 'error',
                'jest/no-test-return-statement': 'error',
                'jest/prefer-to-have-length': 'warn',
                'jest/no-disabled-tests': 'warn',
                'jest/valid-expect': 'error',

                // @angular-eslint rules
                '@angular-eslint/component-class-suffix': [
                    'error',
                    {
                        suffixes: ['Component', 'View']
                    }
                ],
                // TODO: @angular-eslint: these should be activated as soon as possible!!!
                '@angular-eslint/no-lifecycle-call': 'warn',
                '@angular-eslint/component-selector': 'warn',
                '@angular-eslint/directive-selector': 'warn',
                '@angular-eslint/contextual-lifecycle': 'warn',
                '@angular-eslint/use-lifecycle-interface': 'warn',
                '@angular-eslint/no-conflicting-lifecycle': 'warn',
                '@angular-eslint/prefer-output-readonly': 'warn',
                /* Angular ESLint Warnings */
                '@angular-eslint/no-input-prefix': 'warn',
                '@angular-eslint/no-input-rename': 'warn',
                '@angular-eslint/no-output-on-prefix': 'warn',
                '@angular-eslint/no-output-rename': 'warn',
                '@angular-eslint/use-component-selector': 'warn',
                '@angular-eslint/use-component-view-encapsulation': 'warn',
                '@angular-eslint/no-host-metadata-property': 'warn',
                '@angular-eslint/no-inputs-metadata-property': 'warn',
                '@angular-eslint/no-outputs-metadata-property': 'warn',
                '@angular-eslint/no-queries-metadata-property': 'warn',
                '@angular-eslint/component-max-inline-declarations': 'warn',
                '@angular-eslint/pipe-prefix': 'warn',
                '@angular-eslint/use-pipe-transform-interface': 'warn',
                '@angular-eslint/contextual-decorator': 'warn',
                '@angular-eslint/no-attribute-decorator': 'warn',
                '@angular-eslint/no-output-native': 'warn',
                '@angular-eslint/no-pipe-impure': 'warn',
                '@angular-eslint/use-injectable-provided-in': 'warn',

                // @angular-eslint disabled - consider activating those at some time in the future
                '@angular-eslint/prefer-on-push-component-change-detection': 'off',
                '@angular-eslint/no-forward-ref': 'off',
                '@angular-eslint/directive-class-suffix': 'off',
                '@angular-eslint/relative-url-prefix': 'off',

                /* @typescript-eslint Rules */
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/array-type': 'error',
                '@typescript-eslint/ban-ts-comment': 'error',
                '@typescript-eslint/ban-tslint-comment': 'error',
                '@typescript-eslint/ban-types': 'error',
                '@typescript-eslint/class-literal-property-style': 'error',
                '@typescript-eslint/consistent-type-assertions': 'error',
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: ['static-field', 'instance-field', 'static-method', 'instance-method']
                    }
                ],
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
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                '@typescript-eslint/no-confusing-void-expression': 'error',
                '@typescript-eslint/no-dynamic-delete': 'error',
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-extra-non-null-assertion': 'error',
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/no-invalid-void-type': 'error',
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
                '@typescript-eslint/no-require-imports': 'error',
                '@typescript-eslint/no-this-alias': 'error',
                '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/non-nullable-type-assertion-style': 'error',
                '@typescript-eslint/prefer-as-const': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-function-type': 'error',
                '@typescript-eslint/prefer-literal-enum-member': 'error',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/triple-slash-reference': [
                    'error',
                    {
                        path: 'never',
                        types: 'never',
                        lib: 'never'
                    }
                ],
                '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
                '@typescript-eslint/keyword-spacing': 'error',
                '@typescript-eslint/space-infix-ops': [
                    'error',
                    {
                        int32Hint: false
                    }
                ],
                '@typescript-eslint/no-shadow': 'error',
                '@typescript-eslint/comma-spacing': 'error',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        typedefs: true,
                        variables: true,
                        functions: true,
                        classes: false
                    }
                ],
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/unified-signatures': 'error',
                '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

                // @typescript-eslint warnings - consider activating those in the future
                '@typescript-eslint/prefer-readonly': 'warn',
                '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
                '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
                // TODO: re-evaluate after rxjs7
                'import/no-deprecated': 'warn',
                '@typescript-eslint/no-base-to-string': 'warn',
                '@typescript-eslint/no-for-in-array': 'warn',
                '@typescript-eslint/prefer-enum-initializers': 'warn',
                '@typescript-eslint/prefer-includes': 'warn',
                '@typescript-eslint/prefer-nullish-coalescing': 'warn',
                '@typescript-eslint/prefer-regexp-exec': 'warn',
                '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
                '@typescript-eslint/prefer-ts-expect-error': 'warn',
                '@typescript-eslint/require-array-sort-compare': 'warn',
                '@typescript-eslint/restrict-plus-operands': 'warn',
                '@typescript-eslint/explicit-module-boundary-types': 'warn',

                // Import Resolver
                'import/no-unresolved': 'off',

                // @typescript-eslint disabled - reconsider those once in a while
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/consistent-indexed-object-style': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/await-thenable': 'off',
                '@typescript-eslint/consistent-type-imports': 'off',
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
                '@typescript-eslint/no-extraneous-class': 'off',
                '@typescript-eslint/semi': ['off', null],
                '@typescript-eslint/space-within-parens': ['off', 'never'],
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
                '@typescript-eslint/no-unnecessary-type-arguments': 'off',
                '@typescript-eslint/prefer-namespace-keyword': 'off',
                '@typescript-eslint/no-unnecessary-condition': 'off',
                '@typescript-eslint/prefer-readonly-parameter-types': 'off',
                '@typescript-eslint/no-implicit-any-catch': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',

                // ESLint Basic Rules disabled
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
                'no-unused-vars': 'off',
                'quote-props': 'off',
                'valid-typeof': 'off'
            }
        },
        {
            files: ['**/*.component.html'],
            parser: '@angular-eslint/template-parser',
            extends: ['plugin:@angular-eslint/template/recommended'],
            rules: {
                // TODO: Angular Template Errors: these should be activated as soon as possible
                '@angular-eslint/template/no-positive-tabindex': 'warn',
                '@angular-eslint/template/banana-in-box': 'warn',
                '@angular-eslint/template/no-autofocus': 'warn',
                '@angular-eslint/template/no-distracting-elements': 'warn',
                '@angular-eslint/template/no-negated-async': 'warn',
                '@angular-eslint/template/conditional-complexity': 'warn',
                '@angular-eslint/template/no-any': 'warn',
                /* Angular Template Warnings */
                '@angular-eslint/template/use-track-by-function': 'warn',
                '@angular-eslint/template/accessibility-alt-text': 'warn',
                '@angular-eslint/template/accessibility-elements-content': 'warn',
                '@angular-eslint/template/accessibility-label-for': 'warn',
                '@angular-eslint/template/accessibility-table-scope': 'warn',
                '@angular-eslint/template/accessibility-valid-aria': 'warn',

                /* @angular-eslint Template Rules */
                '@angular-eslint/template/mouse-events-have-key-events': 'off',
                '@angular-eslint/template/click-events-have-key-events': 'off',
                '@angular-eslint/template/no-call-expression': 'off',
                '@angular-eslint/template/i18n': 'off',
                '@angular-eslint/template/cyclomatic-complexity': 'off'
            }
        }
    ]
};
