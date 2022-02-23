const sumAll = function(n, m) {
	if ( !Number.isFinite(n) || !Number.isFinite(m) || (n < 0) || (m < 0))
		return 'ERROR';
	else {
		let max = n, min = m, result = 0;
		if (n < m) {
			max = m;
			min = n;
		}
		while (max >= min) {
			result = result + max ;
			max = max -1;
		}
	return result;
	}
	
	
};

// Do not edit below this line
module.exports = sumAll;
