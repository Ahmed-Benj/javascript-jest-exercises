const removeFromArray = function(array) {
	let args = Array.prototype.slice.call(arguments, 1);
	for (const element of args) {
		array = array.filter(el => el !== element)
	}
    return(array);
};

// Do not edit below this line
module.exports = removeFromArray;
