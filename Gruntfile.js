module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-hub');
  grunt.initConfig({
    hub: {
      pe: {
        src: 'src/PointerEvents/Gruntfile.js'
      }
    },
    uglify: {
      pointergestures: {
        dest: 'build/pointergestures.js',
        src: [
          'src/PointerEvents/build/pointerevents.js',
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
    }
  });
  grunt.registerTask('default', ['hub', 'uglify']);
};
