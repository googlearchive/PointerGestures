module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-karma');

  var sourceFiles = grunt.file.readJSON('build.json');
  grunt.initConfig({
    concat: {
      pointergestures: {
        options: {
          stripBanners: true,
          banner: grunt.file.read('LICENSE')
        },
        nonull: true,
        src: sourceFiles,
        dest: 'pointergestures.dev.js'
      }
    },
    uglify: {
      pointergestures: {
        options: {
          banner: grunt.file.read('LICENSE'),
          sourceMap: 'pointergestures.js.map',
        },
        nonull: true,
        dest: 'pointergestures.min.js',
        src: sourceFiles
      }
    },
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          exclude: 'docs,third_party,node_modules,tools,tests',
          extension: '.js,.html',
          paths: '.',
          outdir: 'docs',
          linkNatives: 'true',
          tabtospace: 2,
          themedir: '../tools/doc/themes/bootstrap'
        }
      }
    },
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      polymer: {
      },
      buildbot: {
        reporters: 'crbot',
        logLevel: 'OFF'
      }
    },
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('docs', 'yuidoc');
  grunt.registerTask('test', 'karma:polymer');
  grunt.registerTask('test-buildbot', 'karma:buildbot');
};
