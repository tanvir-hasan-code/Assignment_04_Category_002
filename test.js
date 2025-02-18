// Extra solution

function calculateSleepTime(times) {
	if (times.every(time => typeof time === "number")) {
		let totalTime = 0;
		for (const time of times) {
			totalTime += time;
		}
		const hour = Math.floor(totalTime / 3600);
		const minute = Math.floor((totalTime % 3600) / 60);
		const second = totalTime % 60;
		return { hour, minute, second };
	}
	else {
		return "Invalid";
	}
}

const time = [100, 3800, 90 ];
const times = calculateSleepTime(time);
console.log(times);


// Problem-01 

function calculateVAT( price ) {
	if (typeof price !== "number" || price === isNaN || price < 0) {
		return "Invalid";
	}
	const result = price * 7.5 / 100;
	return result;
}

const price = calculateVAT(1000);
console.log(price);


// Problem-02

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

const contact = validContact("01796255213");
console.log(contact)



// Problem-03

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

const marks = [60, 70, 80, 40, 30];
const exam = willSuccess(marks);
console.log(exam);


// Problem-04 

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


const person1 = { name: "Rahul", gender: "female", age: 14 };
const person2 = { name: "Joya", gender: "male", age: 21 };

const result = validProposal(person1, person2);
console.log(result);

// Problem-05 

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

const countTime = [100, 3800, 90];
const totalSleep = calculateSleepTime(countTime)
console.log(totalSleep)