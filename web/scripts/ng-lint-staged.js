const { execSync } = require('child_process');
const stagedGitFiles = require('staged-git-files');

stagedGitFiles((error, stagedFiles) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    if (stagedFiles && stagedFiles.length) {
        const stagedAngularTSFiles = stagedFiles.filter(
            (file) =>
                // no staged deleted files
                file.status !== 'Deleted' &&
                // in src folder
                file.filename.indexOf('src/') >= 0 &&
                // we accept typescript and component.html files
                (file.filename.endsWith('.ts') || file.filename.endsWith('.component.html'))
        );
        lint(stagedAngularTSFiles);
    } else {
        console.log('No Angular TS files staged...\n');
    }
});

const lint = (files) => {
    if (files.length) {
        let eslint = `eslint --fix `;
        for (const { filename } of files) {
            eslint = eslint.concat(`${filename.replace('frontend/', '')} `);
        }
        console.log(`Linting ${files.length} staged files...\n`);
        execSync(eslint, { stdio: 'inherit' });
    } else {
        console.log(`No Angular TS files staged...\n`);
    }
};
