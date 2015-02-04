 // Andrew Ribicki CMP 237 ch.4 "The sum of a range"
 function range (start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
        for ( var i = start; i <=end; i += step)
          array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
