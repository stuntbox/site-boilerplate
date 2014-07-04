module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    tag: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss Z") %> */'
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          banner: '<%= tag.banner %>'
        },
        files: {
          'css/main.css': 'css/main.scss'
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'js/main.js'],
      options: {
        'smarttabs': true,
        'globals': {
          jQuery: true
        }
      }
    },

    uglify: {
      dist: {
        options: {
          banner: '<%= tag.banner %>\n'
        },
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },

    watch: {
      javascript: {
        files: ['Gruntfile.js', 'js/main.js'],
        tasks: ['jshint', 'uglify', 'notify:js']
      },
      css: {
        files: ['css/main.scss'],
        tasks: ['sass', 'notify:css']
      }
    },

    notify: {
      js: {
        options: {
          title: 'JavaScript Build Complete',
          message: 'JSHint and Uglify finished without errors.',
        }
      },
      css: {
        options: {
          title: 'Sass Conversion Complete',
          message: 'Sass finished without errors.',
        }
      },
      build: {
        options: {
          title: 'Build Complete',
          message: 'JSHint, Uglify, and Sass finished without errors.',
        }
      }
    },

    svgmin: { 
        options: { 
            plugins: [
              { removeViewBox: false },
              { removeUselessStrokeAndFill: false }
            ]
        },
        dist: {
            files: [{ 
                expand: true,
                cwd: 'img/_source',
                src: ['**/*.svg'],
                dest: 'img/',
                ext: '.min.svg'
            }]
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-svgmin');
  
  grunt.registerTask('default', ['sass', 'jshint', 'uglify', 'watch']);
  grunt.registerTask('build', ['sass', 'jshint', 'uglify', 'notify:build']);
  grunt.registerTask('svg', ['svgmin']);
  
};