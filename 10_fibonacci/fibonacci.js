const fibonacci = function(a) {
	if (a<0)
		return "OOPS";
	let arrFib = [1,1];
	for (let i = 0; i < a ; i++){
		arrFib.push(arrFib[i]+arrFib[i+1]);
	}
	console.log(arrFib);
	return arrFib[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
