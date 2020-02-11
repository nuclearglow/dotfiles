module.exports = {
    preset: 'jest-preset-angular',
    globals: {
        // using jest-preset-angular@7 (uses ts-jest@23.10.5 brings these ignore options for our coverage, fixes missing coverage for Angular Decorators)
        'ts-jest': {
            ignoreCoverageForDecorators: true,
            ignoreCoverageForAllDecorators: true
        }
    },
    roots: ['src'],
    setupFilesAfterEnv: ['<rootDir>src/setup-jest.ts'],
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    testPathIgnorePatterns: ['<rootDir>/src/test.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        // ignore all index.ts
        '!src/**/index.ts',
        // ignore all module definition files
        '!src/**/*.module.ts',
        // ignore all routes files
        '!src/**/*.routes.ts',
        // ignore all public api files
        '!src/**/*.public-api.ts',
        // coverage from all of our lib folders
        'src/lib/**/*.ts'
    ],
    coverageDirectory: 'public/unit_test_coverage_report_library',
    coveragePathIgnorePatterns: ['/.*mock.*/', '<rootDir>/node_modules', 'setup-jest.ts'],
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
            '<rootDir>/node_modules/jest-html-reporter',
            {
                pageTitle: 'Unit Test Report',
                outputPath: './public/unit_test_report_library/index.html',
                includeConsoleLog: true,
                theme: 'lightTheme',
                logo: '../icons/dwp_logo.png',
                dateFormat: 'dd.mm.yyyy HH:MM:ss'
            }
        ]
    ]
};
