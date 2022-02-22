const repeatString = function(word, n_times) {
	let result = '';
	for (let i = 0; i<n_times; i++)
		result = result+word;
	return result;
};

// Do not edit below this line
module.exports = repeatString;
