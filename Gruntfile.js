'use strict';
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // watch our project for changes
        watch: {
            less: {
				files: ['public/assets/less/*','admin/assets/css/*'],
                tasks: ['less']
            },
            js: {
                files: [
                    '<%= jshint.all %>'
                ],
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: { livereload: true },
                files: ['public/assets/**/*', '**/*.html', '**/*.php', 'public/assets/img/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },
        // style (Sass) compilation via Compass
		less: {
		  	adminLess: {
		    	options: {
		      		paths: ["admin/assets/css/*"],
		      		cleancss:true
		    	},
		    	files: {
		     	 	"admin/assets/css/style.css": "admin/assets/css/style.less"
		    	}
		  	},
		  	publicLess: {
		    	options: {
		      		paths: ["public/assets/less"],
		      		cleancss:true
		    	},
		    	files: {
		      		"public/assets/css/ai-core.min.css": "public/assets/less/style.less"
		    	}
		  	}
		},
        // make sure js is clean
        jshint: {
            options: {
                "bitwise": true,
                "browser": true,
                "curly": true,
                "eqeqeq": true,
                "eqnull": true,
                "es5": true,
                "esnext": true,
                "immed": true,
                "jquery": true,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "node": true,
                "strict": false,
                "trailing": true,
                "undef": true,
                "globals": {
                    "jQuery": true,
                    "alert": true
                }
            },
            all: [
                'Gruntfile.js',
                'public/assets/js/*.js',
                'admin/assets/js/*.js'
            ]
        },
        // concatenation and minification all in one
   		uglify: {
   			adminscripts: {
                options: {
                    sourceMap: 'admin/assets/js/generator.js.map',
                    sourceMappingURL: 'generator.js.map',
                    sourceMapPrefix: 2
                },
               	files: {
                    'admin/assets/js/generator.min.js': [
                     	'admin/assets/js/generator.js',
                     	'admin/assets/js/transition.js',
                     	'admin/assets/js/tooltip.js'
                    ]
                }
            },
            publicscripts: {
                options: {
                    sourceMap: 'public/assets/js/ai-core.js.map',
                    sourceMappingURL: 'ai-core.js.map',
                    sourceMapPrefix: 10
                },
               	files: {
                    'public/assets/js/ai-core.min.js': [
                     	'public/assets/js/fit-vids.js',
                     	'public/assets/js/swipebox.js',
                     	'public/assets/js/waypoints.js',
                     	'public/assets/js/fotorama.js',
                     	'public/assets/js/scroll-nav.js',
                     	'public/assets/js/wookmark.js',
                     	'public/assets/js/images-loaded.js',
                     	'public/assets/js/pdf-object.js',
                     	'public/assets/js/slabtext.js',
                     	'public/assets/js/cookie.js',
                     	'public/assets/js/parallax.js',
                     	'public/assets/js/methods.js'
                    ]
                }
            }
        }
    });

    // register task
    grunt.registerTask('default', ['watch']);

};