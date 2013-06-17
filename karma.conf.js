// Karma configuration
// Generated on Fri May 31 2013 11:01:14 GMT-0700 (PDT)


// base path, that will be used to resolve files and exclude
basePath = '';


// frameworks to use
frameworks = ['mocha'];


// list of files / patterns to load in the browser
files = [
  'node_modules/chai/chai.js',
  'node_modules/chai-spies/chai-spies.js',
  '../PointerEvents/src/boot.js',
  '../PointerEvents/src/PointerEvent.js',
  '../PointerEvents/src/pointermap.js',
  '../PointerEvents/src/sidetable.js',
  '../PointerEvents/src/dispatcher.js',
  '../PointerEvents/src/installer.js',
  '../PointerEvents/src/platform-events.js',
  '../PointerEvents/src/capture.js',
  'src/PointerGestureEvent.js',
  'src/initialize.js',
  'src/sidetable.js',
  'src/pointermap.js',
  'src/dispatcher.js',
  'src/hold.js',
  'src/track.js',
  'src/flick.js',
  'src/tap.js',
  'tests/setup.js',
  'tests/!(setup).js'
];


// list of files to exclude
exclude = [];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;


// plugins to load
plugins = [
  'karma-mocha',
  'karma-chrome-launcher',
  'karma-firefox-launcher',
  'karma-script-launcher',
  'karma-crbot-reporter'
];
