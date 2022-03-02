const caesar = function(word,number) {
	let result = '';
	for (var i = 0; i < word.length; i++) {
		//console.log(word.charAt(i));
		//console.log(!!(word.charAt(i)).match(/[.,:!?]/g));
		if (!(word.charAt(i)).match(/[.,:!? ]/))
			result = result + String.fromCharCode(word.charCodeAt(i)+number);
		else
			result = result + word.charAt(i);
	}
	
	return(result);
};

// Do not edit below this line
module.exports = caesar;
