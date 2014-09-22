// Write a program that accepts one or more numbers as command-line 
// arguments and prints the sum of those numbers to the console (stdout).

(function() {
  var i, x, _i, _len, _ref;

  x = 0;

  _ref = process.argv.slice(2);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    i = _ref[_i];
    x += parseInt(i);
  }
  console.log(x);

}).call(this);

  // official solution
    // var result = 0

    // for (var i = 2; i < process.argv.length; i++)
    //   result += Number(process.argv[i])

    // console.log(result)




// access CL arguments via global 'process' object.
// the 'process' object has 'argv' property which is an array containing complete CL i.e. 'process.argv'


