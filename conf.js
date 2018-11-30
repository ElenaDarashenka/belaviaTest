require("babel-register")({
    presets: [ 'es2015' ]
});

exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'https://en.belavia.by',
    framework: 'jasmine',

    multiCapabilities: [
        {
            "browserName": "chrome",        
            shardTestFiles: true,
            maxInstances: 2,
            specs: ['test/bookFlightTest.js', 'test/bookHotelTest.js']
        },
    ],

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