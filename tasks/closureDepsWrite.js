/*
 * grunt-closure
 * https://github.com/Orlac/grunt-closure
 *
 * Copyright (c) 2014 Orlac
 * Licensed under the MIT license.
 */

'use strict';
var exec  = require('child_process').exec
module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('closureDepsWrite', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      depswriter: '',
      root: '',
      root_with_prefix: '',
      output_file: '',
    });
    var compileDone = this.async();

    //--root="assets" --root_with_prefix="assets/app ../../app"  --output_file="assets/closure/goog/deps.js"

    var params = [
       'python '+ options.depswriter,
       '--root="'+options.root+'"',
       '--root_with_prefix="'+options.root_with_prefix+'"',
       '--output_file="'+options.output_file+'"',
    ];

    var cmd = params.join(' ');
    exec(cmd, compileDone)

    /*// Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });*/
  });

};
