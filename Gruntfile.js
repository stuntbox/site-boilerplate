
// get current project directory
var url_slug = __dirname.substr(__dirname.lastIndexOf('/') + 1);

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
        },
        files: {
          '_site/assets/css/main.css': 'assets/css/main.scss',
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'assets/js/main.js'],
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
          'assets/js/main.temp.js': 'assets/js/main.js',
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['assets/js/main.temp.js',
              // 'assets/js/TKTKTKTKTKTKT.js',        // Add custom JS file here
              // 'assets/js/TKTKTKTKTKTKT.js',        // Add custom JS file here
              // 'assets/js/TKTKTKTKTKTKT.js',        // Add custom JS file here
              // 'assets/js/lib/howler.min.js',
              'assets/js/lib/jquery.fitvids.min.js',
              'assets/js/lib/jquery.waypoints.min.js',
              'assets/js/lib/shortcuts/inview.min.js',
              'assets/js/lib/matchMedia.min.js',
              'assets/js/lib/picturefill.min.js'],
        dest: '_site/assets/js/main.js'
      }
    },

    clean: {
      js: ['assets/js/*.temp.js']
    },

    copy: {
      js: {
        expand: true,
        cwd: 'assets/js/lib/',
        src: ['**'],
        dest: '_site/assets/js/lib/',
      },
      fonts: {
        expand: true,
        cwd: 'assets/fonts/',
        src: ['**'],
        dest: '_site/assets/fonts/',
      },
      img: {
        expand: true,
        cwd: 'assets/img/',
        src: ['**'],
        dest: '_site/assets/img/',
      },
    },

    connect: {
      server: {
        options: {
          port: 4000,
          hostname: '*',
          base: '_site/',
          // middleware: function(connect, options, middlewares) {
          //   middlewares.unshift(function(req, res, next) {
          //     var ARTICLE_RE = new RegExp("^/article/");
          //     if (ARTICLE_RE.exec(req.url)) {
          //       res.setHeader('Content-Type', 'text/html');
          //     }
          //     return next();
          //   });
          //   return middlewares;
          // }
        }
      }
    },

    watch: {
      js: {
        files: ['Gruntfile.js', 'assets/js/main.js'],
        tasks: ['jshint', 'uglify', 'notify:js', 'concat', 'clean', 'copy:js']
      },
      css: {
        files: ['assets/css/*.scss'],
        tasks: ['sass', 'notify:css']
      }
    },

    notify: {
      js: {
        options: {
          title: 'JavaScript Build Complete',
          message: 'JavaScript tasks finished without errors.',
        }
      },
      css: {
        options: {
          title: 'Sass Conversion Complete',
          message: 'Sass tasks finished without errors.',
        }
      },
      build: {
        options: {
          title: 'Build Complete',
          message: 'Build tasks finished without errors.',
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default',
    'Run all build tasks, launch web server, and watch for changes.',
    ['sass', 'jshint', 'uglify', 'concat', 'clean', 'copy', 'connect', 'watch']);

};
