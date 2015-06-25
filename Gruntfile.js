module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['**/*.js'],
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: false,
        browser: true,
        indent: 2,
        quotmark: 'single',
        unused: false,
        ignores: ['node_modules/**/*.js'],
        globals: {
          jQuery: true
        },
      },
    },
    jsonlint: {
      sample: {
        src: [ 'package.json' ]
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      json: {
        files: ['**/*.json'],
        tasks: ['newer:jsonlint'],
        options: {
          spawn: false
        }
      }
    },
    nodeunit: {
      all: ['test.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('default',['watch']);
  grunt.registerTask('test',['jshint', 'jsonlint', 'nodeunit']);
};