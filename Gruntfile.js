module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                options: {
                    frameworks: ['mocha'],
                    autoWatch: true,
                    browsers: ['PhantomJS'],
                    singleRun: false,
                    files: ['test/**/*.js']
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        }
    });

    grunt.registerTask('default', ['mochaTest']);
};
