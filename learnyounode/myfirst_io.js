// Write a program that uses a single synchronous filesystem operation to read 
// a file and print the number of newlines it contains to the 
// console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first 
// command-line argument.

(function() {
  var data, fs;

  fs = require('fs');

  data = fs.readFileSync(process.argv[2], 'utf8');

  console.log(data.split('\n').length - 1);
}).call(this);




// official solution: 
    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1


    


// 'fs' module from Node score library required to perform filesystem op
// to load this module or any other 'global' module use - var fs = require('fs')

// all synchronous (aka blocking) filesystem methods in 'fs' module end with 'Sync'
// to read a file you need to use: 'fs.readFileSync('/path/to/file')'

// 'Buffer' objects are Node's way of efficiently representing arrays of data (ascii, binary, other fomats)
// can be converted to strings with method 'toString()'

// a JS 'String' can be '.split()' into an array of substring & '\n' you'll end 
// up with an array that has more than one more element than the array of new lines

