require("babel-register")({
    presets: ['es2015']
});

const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const reporter = new HtmlScreenshotReporter({
    dest: 'screenshots',
    filename: 'my-report.html',
    showSummary: true,
    showQuickLinks: true,
    showConfiguration: true,
    reportTitle: "Book flight Test Report",
    reportFailedUrl: true,
    inlineImages: true,
    cleanDestination: true,
    captureOnlyFailedSpecs: false,
    pathBuilder: (currentSpec, suites, browserCapabilities) => {
        // will return chrome/your-spec-name.png
        return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
      }
});

exports.config = {
    sauceUser: "EDarashenka",
    sauceKey: "cf30c4ab-2052-43bc-9301-592922aea9f3",
    //directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'https://en.belavia.by',
    framework: 'jasmine',
    specs: ['test/bookFlightTest.js'],

    beforeLaunch: () => {
        // Setup the report before any tests start
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();

        // better jasmine 2 reports...
        const SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'specs' }));
        jasmine.getEnv().addReporter(reporter);

    },

    afterLaunch: function (exitCode) {
        // Close the report after all tests finish
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => { },
        defaultTimeoutInterval: 50000
    },

    multiCapabilities: [{
        browserName: 'safari',
        platform: 'macOS 10.12',
        version: '10.1',
        name: "safari-tests",
        shardTestFiles: true,
        maxInstances: 25
    },
//     { 
//     browserName: 'firefox',
//     platform: 'Windows 10',
//     version: '64',
//     name: "firefox-tests",
//     shardTestFiles: true,
//     maxInstances: 25
// }, 
    {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }],
};