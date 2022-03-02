const findTheOldest = function(people) {
	let max = 0,current,year, maxPerson;
	let result = people.map( person => {
		if (person.yearOfDeath == undefined){
			year = new Date().getFullYear();
			currentPersonAge = year - person.yearOfBirth;
		}
		else
			currentPersonAge = person.yearOfDeath - person.yearOfBirth;
		if (currentPersonAge> max){
			max = currentPersonAge;
			maxPerson = person;
		}
	});
	return(maxPerson);

};

// Do not edit below this line
module.exports = findTheOldest;
