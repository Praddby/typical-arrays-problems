
exports.min = function min (array) {
  if ( typeof(array) === 'undefined' || array.length === 0) return 0;
  return (array.sort((a,b)=>a-b))[0];
}

exports.max = function max (array) {
  if ( typeof(array) === 'undefined' || array.length === 0) return 0;
  return (array.sort((a,b)=>b-a))[0];
}

exports.avg = function avg (array) {
  if ( typeof(array) === 'undefined' || array.length === 0) return 0;
  let result = array.reduce((sum, curr) => sum + curr, 0);
	return parseFloat((result / array.length).toFixed(2));
}
