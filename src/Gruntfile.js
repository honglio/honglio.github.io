// Generated on 2014-11-10 using
// generator-webapp-uncss 0.1.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= config.app %>/js/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      jstest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['test:watch']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      styles: {
        files: ['<%= config.app %>/css/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/{,*/}*.html',
          '.tmp/css/{,*/}*.css',
          '<%= config.app %>/images/{,*/}*'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      },
      test: {
        options: {
          open: false,
          port: 9001,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>',
          livereload: false
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jsbeautifier: {
        fix: {
           src: [
               '<%= config.app %>/js/**/*.js',
               '!<%= config.app %>/js/vendor/*.js',
               '<%= config.app %>/css/**/*.css',
               '<%= config.app %>/*.html',
               'test/spec/**/*.js',
           ],
           options: {
               html: {
                   braceStyle: 'collapse',
                   indentChar: ' ',
                   indentScripts: 'keep',
                   indentSize: 2,
                   maxPreserveNewlines: 10,
                   preserveNewlines: true,
                   unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u'],
                   wrapLineLength: 0
               },
               css: {
                   indentChar: ' ',
                   indentSize: 2
               },
               js: {
                   braceStyle: 'collapse',
                   breakChainedMethods: false,
                   e4x: false,
                   evalCode: false,
                   indentChar: ' ',
                   indentLevel: 0,
                   indentSize: 2,
                   indentWithTabs: false,
                   jslintHappy: false,
                   keepArrayIndentation: false,
                   keepFunctionIndentation: false,
                   maxPreserveNewlines: 10,
                   preserveNewlines: true,
                   spaceBeforeConditional: true,
                   spaceInParen: false,
                   unescapeStrings: false,
                   wrapLineLength: 0
               },
               mode: 'VERIFY_AND_WRITE'
           }
       },
       test: {
           src: [
               '<%= config.app %>/js/**/*.js',
               '!<%= config.app %>/js/vendor/*.js',
               '<%= config.app %>/css/**/*.css',
               '<%= config.app %>/*.html',
               'test/spec/**/*.js',
           ],
           options: {
               html: {
                   braceStyle: 'collapse',
                   indentChar: ' ',
                   indentScripts: 'keep',
                   indentSize: 2,
                   maxPreserveNewlines: 10,
                   preserveNewlines: true,
                   unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u'],
                   wrapLineLength: 0
               },
               css: {
                   indentChar: ' ',
                   indentSize: 2
               },
               js: {
                   braceStyle: 'collapse',
                   breakChainedMethods: false,
                   e4x: false,
                   evalCode: false,
                   indentChar: ' ',
                   indentLevel: 0,
                   indentSize: 2,
                   indentWithTabs: false,
                   jslintHappy: false,
                   keepArrayIndentation: false,
                   keepFunctionIndentation: false,
                   maxPreserveNewlines: 10,
                   preserveNewlines: true,
                   spaceBeforeConditional: true,
                   spaceInParen: false,
                   unescapeStrings: false,
                   wrapLineLength: 0
               },
               mode: 'VERIFY_ONLY'
           }
       }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/js/{,*/}*.js',
        '!<%= config.app %>/js/vendor/*.js',
        'test/spec/{,*/}*.js'
      ]
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/css/',
          src: '{,*/}*.css',
          dest: '.tmp/css/'
        }]
      }
    },

    // Automatically inject Bower components into the HTML file
    // wiredep: {
    //   app: {
    //     ignorePath: /^\/|\.\.\//,
    //     src: ['<%= config.app %>/index.html'],
    //     exclude: ['bower_components/bootstrap/dist/js/bootstrap.js']
    //   }
    // },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= config.dist %>/js/{,*/}*.js',
            '<%= config.dist %>/css/{,*/}*.css',
            '<%= config.dist %>/images/{,*/}*.*',
            '<%= config.dist %>/fonts/{,*/}*.*',
            '<%= config.dist %>/*.{ico,png}'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '/index.html',
      options: {
        dest: '',
        flow: {
          html: {
            steps: {
              // Disabled as we'll be using a manual
              // cssmin configuration later. This is
              // to ensure we work well with grunt-uncss
              // css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },
    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: [
          '<%= config.dist %>',
          '<%= config.dist %>/images',
          '<%= config.dist %>/css'
        ]
      },
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/css/{,*/}*.css']
    },

    uncss: {
      dist: {
        options: {
          // Take our Autoprefixed stylesheet main.css &
          // any other stylesheet dependencies we have..
          stylesheets: [
            // '../.tmp/css/main.css',
            '../<%= config.app %>/css/bootstrap.css',
            // '../<%= config.app %>/css/fallback.css',
            '../<%= config.app %>/css/font-awesome.css',
            // '../<%= config.app %>/css/print.css',
            // '../<%= config.app %>/css/style.css'
          ],
          // Ignore css selectors for async content with complete selector or regexp
          // Only needed if using Bootstrap
          ignore: [/dropdown-menu/,/\.collapsing/,/\.collapse/]
        },
        files: {
          '.tmp/css/vendor.css': ['<%= config.app %>/index.html']
        }
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '**/*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '{,*/}*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care
    // of minification. These next options are pre-configured if you do not
    // wish to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= config.dist %>/css/vendor.css': [
            '.tmp/css/vendor.css'
          ],
          '<%= config.dist %>/css/main.css': [
            '.tmp/css/style.css',
            '.tmp/css/jquery-ui-1.8.16.custom.css',
            '.tmp/css/lightbox.min.css',
          ],
          '<%= config.dist %>/css/print.css': [
            '.tmp/css/print.css'
          ],
          '<%= config.dist %>/css/fallback.css': [
            '.tmp/css/fallback.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= config.dist %>/js/vendor.js': [
            '<%= config.app %>/js/vendor/modernizr.custom.26633.js',
            '<%= config.app %>/js/vendor/jquery.min.js',
            '<%= config.app %>/js/vendor/bootstrap.min.js'
          ],
          '<%= config.dist %>/js/plugins.js': [
            '<%= config.app %>/js/vendor/jquery.gridrotator.js',
            '<%= config.app %>/js/vendor/jquery.placeholder.js',
            '<%= config.app %>/js/vendor/jquery.stickup.min.js',
            '<%= config.app %>/js/vendor/jquery.easing.min.js',
            '<%= config.app %>/js/vendor/jquery.easypiechart.js',
            '<%= config.app %>/js/vendor/jquery.isotope.js',
            '<%= config.app %>/js/vendor/jquery.contact.js',
            '<%= config.app %>/js/vendor/jquery.ui.widget.min.js',
            '<%= config.app %>/js/vendor/jquery.ui.rlightbox.js'
          ],
          '<%= config.dist %>/js/main.js': [
            '<%= config.app %>/js/custom.js'
          ]
        }
      }
    },
    concat: {
      dist: {}
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.webp',
            '{,*/}*.html',
            'fonts/{,*/}*.*'
          ]
        }, {
          src: 'node_modules/apache-server-configs/dist/.htaccess',
          dest: '<%= config.dist %>/.htaccess'
        }, {
          expand: true,
          dot: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= config.dist %>'
        }]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= config.app %>/css',
        dest: '.tmp/css/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    }
  });


  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      // 'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('test', function (target) {
    if (target !== 'watch') {
      grunt.task.run([
        'clean:server',
        'concurrent:test',
        'autoprefixer'
      ]);
    }

    grunt.task.run([
      'connect:test'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    // 'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'uncss',
    'cssmin',
    'concat',
    'uglify',
    'copy:styles',
    'copy:dist',
    'rev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('fix-lint', [
    'jsbeautifier:fix'
  ]);

  grunt.registerTask('default', [
    'jsbeautifier:test',
    'newer:jshint',
    'test',
    'build'
  ]);
};
