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
      // assertions: {
      //   "categories:performance": ["warn", { minScore: 0.9 }],
      //   "categories:accessibility": ["error", { minScore: 1 }],
      // },
      preset: "lighthouse:no-pwa",
      assertions: {
        "dom-size": ["error", { maxNumericValue: 1000 }],
        "offscreen-images": "off",
        "color-contrast": "off",
        "tap-targets": "off",
      },
    },
    upload: {
      // upload options here
      target: "filesystem",
      outputDir: "./lhci_reports",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
