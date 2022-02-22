const repeatString = function(word, n_times) {
	let result = '';
	if (n_times>=0){
	for (let i = 0; i<n_times; i++)
		result = result+word;
	}
	else
		result = 'ERROR';
		return result;
};

// Do not edit below this line
module.exports = repeatString;
