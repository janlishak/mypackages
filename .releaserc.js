module.exports = {
  // Specify the plugins to use
  plugins: [
    '@semantic-release/commit-analyzer', // Analyzes commits to determine the release type
    '@semantic-release/release-notes-generator', // Generates release notes
    '@semantic-release/github', // Publishes releases to GitHub
  ],
  // Specify branches to release from (e.g., main, master)
  branches: ['main'],
  // GitHub configuration
  repositoryUrl: 'https://github.com/username/repository', // Replace with your GitHub repository URL
  // Define the format of the release notes
  preset: 'angular',
};
