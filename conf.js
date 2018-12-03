require("babel-register")({
    presets: [ 'es2015' ]
});

const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const reporter = new HtmlScreenshotReporter({
  dest: '/belaviaTest/screenshots',
  filename: 'my-report.html',
  showSummary: true,
  showQuickLinks: true,
  showConfiguration: true,
  reportTitle: "Book flight Test Report",
  reportFailedUrl: true,
  inlineImages: true,

});

exports.config = {
  // ...

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
}
exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'https://en.belavia.by',
    framework: 'jasmine',
    specs: ['test/bookFlightTest.js'],

    onPrepare: () => {
        browser.ignoreSynchronization=true;
        browser.manage().window().maximize();
        
        // better jasmine 2 reports...
        const SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));

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
                'log-path=/tmp/chromedriver.log'
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
        print: () => {},
        defaultTimeoutInterval: 50000
    }
};