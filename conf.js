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
    directConnect: true,
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

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log',
                '--headless',
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => { },
        defaultTimeoutInterval: 50000
    }
};