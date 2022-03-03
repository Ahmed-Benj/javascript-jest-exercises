const caesar = function(word,number) {
	let result = '', asciiOfTarget;
	while (number > 26)
		number -= 26;
	while (number < -26)
		number += 26;
	for (var i = 0; i < word.length; i++) {
		if (!(word.charAt(i)).match(/[.,:!? ]/)){
			asciiOfTarget = word.charCodeAt(i)+number;
			if (word.charCodeAt(i) <= 90 & asciiOfTarget > 90){
				asciiDiff = asciiOfTarget - 90;
				asciiOfTarget = 64 + asciiDiff;
			}
			else if (word.charCodeAt(i) <= 90 & asciiOfTarget < 65){
				asciiDiff = 65 - asciiOfTarget;
				asciiOfTarget = 91 - asciiDiff;
			}
			else if (word.charCodeAt(i) >= 97 & asciiOfTarget < 97){
				asciiDiff = 97 - asciiOfTarget;
				asciiOfTarget = 123 - asciiDiff;
			}
			else if (word.charCodeAt(i) >= 97 & asciiOfTarget > 122){
				asciiDiff = asciiOfTarget - 122;
				asciiOfTarget = 96 + asciiDiff;
			}
			result = result + String.fromCharCode(asciiOfTarget);
			
		}
		else
			result = result + word.charAt(i);
	}
	//console.log(result);
	return(result);
};

// Do not edit below this line
module.exports = caesar;
