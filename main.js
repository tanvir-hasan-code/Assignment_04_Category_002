
function calculateVAT(num){
	if (typeof num === 'number' && num > 0) {
        return num*7.5/100;
    }
    else{
		return "Invalid";
    }
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

function willSuccess(arr){
    if(Array.isArray(arr)){
		let pass = 0;
		let fail = 0; 
        for(const num of arr){
			if (typeof num === 'number') {
                if(num>=50){
					pass++;
                }else{
					fail++;
                }
            }else{
				return 'Invalid';
            }
        }
        return pass > fail;
    }
    else{
		return 'Invalid';
    }
}

function  validProposal( person1, person2 ) {
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
		const second = totalTime % 60;
		return { hour, minute, second };
	}
	else {
		return "Invalid";
	}
}