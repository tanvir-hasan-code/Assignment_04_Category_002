
function calculateVAT( price ) {
	if (typeof price !== "number" || price === isNaN || price < 0) {
		return "Invalid";
	}
	const result = price * 7.5 / 100;
	return result;
}


function validContact(contact) {
	if (typeof contact === "string") {
		if (contact.length === 11 && contact.startsWith("01") && contact !== contact.includes(" ")) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return "Invalid";
	}
}


function  willSuccess( marks ) {
	if (Array.isArray(marks)) {
		let pass = 0;
		let fail = 0;
		for (const mark of marks) {
			if (typeof mark !== isNaN) {
				if (mark >= 50) {
					pass++;
				}
				else {
					fail++;
				}
			}
		}
		return fail < pass;
	}
	else {
		return "Invalid";
	}
}


function  validProposal( person1 , person2 ) {
	if (typeof person1 === "object" && typeof person2 === "object") {
		if (person1.gender === person2.gender) {
			return false;
		}
		else {
			const ageDefarance = Math.abs(person1.age - person2.age);
			if (ageDefarance > 7) {
				return false;
			}
			else {
				return true;
			}
		}
	}
	else {
		return "Invalid";
	}
}


function  calculateSleepTime( times ) {
	if (times.every(time => typeof time === "number")) {
		let totalTime = 0;
		for (const time of times) {
			totalTime += time
		}
		const hour = parseInt(totalTime / 3600);
		const minute = parseInt((totalTime % 3600) / 60);
		const second = parseInt(totalTime % 60);
		return { hour, minute, second };
	}
	else {
		return "Invalid";
	}
}

