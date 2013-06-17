module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma-0.9.1');

  var os = require('os').type();
  var browsers = ['Chrome', 'Firefox'];
  if (os == 'Darwin') {
    browsers.push('ChromeCanary');
  }
  if (os == 'Windows_NT') {
    browsers.push('IE');
  }

  grunt.initConfig({
    uglify: {
      pointergestures: {
        options: {
          sourceMap: 'build/pointergestures.js.map',
          sourceMappingURL: 'pointergestures.js.map',
          sourceMapRoot: '..'
        },
        dest: 'build/pointergestures.js',
        src: [
          'src/PointerGestureEvent.js',
          'src/initialize.js',
          'src/sidetable.js',
          'src/pointermap.js',
          'src/dispatcher.js',
          'src/hold.js',
          'src/track.js',
          'src/flick.js',
          'src/tap.js'
        ]
      }
    },
    karma: {
      options: {
        browsers: browsers,
        configFile: 'karma.conf.js'
      },
      polymer: {
      },
      buildbot: {
        reporters: 'crbot',
        logLevel: 'OFF'
      },
      browserstack: {
        browsers: "BrowserStack:IE:Win"
      }
    },
    clean: ['build', 'docs']
  });

  grunt.registerTask('default', 'uglify');
  grunt.registerTask('test', 'karma:polymer');
  grunt.registerTask('test-buildbot', 'karma:buildbot');
};
