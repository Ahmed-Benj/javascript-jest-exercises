const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(ar) {
	return ar.reduce((a, b) => a + b, 0);
};

const multiply = function(ar) {
	return ar.reduce((a, b) => a * b, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let result = 1;
	while(a > 0){
		result = a * result;
		a = a - 1;
	}
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
