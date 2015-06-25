module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('bower.json'),

		uglify: {
		  options: {
		    manage: false
		  },
			my_target: {
		      files: {
		      'jss/main.min.js': ['trial/input.js']
		    }
		  }
		},

	});
	grunt.loadNpmTasks('grunt-contrib-ug­lify');

	//grunt.loadNpmTasks('grunt-contrib-cssmin');

};
