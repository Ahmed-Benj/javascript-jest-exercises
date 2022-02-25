const palindromes = function (inStr) {
	let innStr = inStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	innStr = innStr.replace(/\s{1,}/g,"");
	innStr= innStr.toLowerCase();
	return (innStr == innStr.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;


