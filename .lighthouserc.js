module.exports = {
  ci: {
    collect: {
      // collect options here
      staticDistDir: "./build",
      url: ["http://localhost:5000"],
      numberOfRuns: 5,
      startServerCommand: "npm run deploy",
    },
    assert: {
      // assert options here
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 1 }],
      },
    },
    upload: {
      // upload options here
      target: "temporary-public-storage",
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
