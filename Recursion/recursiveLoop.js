const loopNTimes = (n) => {

	console.log('n ===', n);

	if (n <= 1) {
		return 'complete';
	}
	return loopNTimes(n - 1);
};

loopNTimes(3);


function computeFactorial(num) {

	if (num === 1) {
		console.log('hitting the base case');
		return 1;
	} else {
		console.log(`returning ${num} * computeFactorial(${num - 1})`);
		return num * computeFactorial(num - 1);
	}
}
computeFactorial(5);


function logNumbers(start, end) {

	console.log(`iteratively looping from ${start} until ${end}`);

	for (var i = start; i <= end; i++) {
		console.log('hitting index', i);
	}
}

console.log('~~~ logNumbers ~~~')
logNumbers(1, 2);

function logNumbersRecursively(start, end) {

	console.log(`recursively looping from ${start} until ${end}`);

	function recurse(i) {
		console.log('hitting index', i);

		if (i < end) {
			recurse(i + 1);
		}
	}

	recurse(start);
}

console.log('~~~ logNumbersRecursively ~~~')
logNumbersRecursively(1, 3);