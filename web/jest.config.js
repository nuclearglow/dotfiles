module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    testPathIgnorePatterns: ['/node_modules/', 'dist'],
    testEnvironment: 'jest-environment-jsdom-twelve',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/app/**/*.ts',
        // ignore all index.ts
        '!**/index.ts',
        // ignore all mocks
        '!**/*.mock.ts',
        // ignore all module definition files
        '!**/*.module.ts',
        // ignore all routes files
        '!**/routes.ts',
        '!**/*.routes.ts'
    ],
    coverageDirectory: '../public/frontend/unit_test_coverage_report',
    coveragePathIgnorePatterns: ['<rootDir>/node_modules', 'setup-jest.ts'],
    coverageReporters: ['html', 'json', 'lcov', 'text'],
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60
        }
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                // TODO: replace with your project name With Spaces
                pageTitle: 'Auto Frontend Unit Test Report',
                publicPath: '../public/frontend/unit_test_report',
                filename: 'index.html',
                logoImgPath: './src/favicon.ico',
                expand: true
            }
        ]
    ]
};
