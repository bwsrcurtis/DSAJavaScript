function joinElements(array, joinString) {

	function recurse(index, resultSoFar) {
		resultSoFar += array[index];

		if (index === array.length - 1) {
			return resultSoFar;
		} else {
			return recurse(index + 1, resultSoFar + joinString);
		}
	}

	return recurse(0, '');
}

// joinElements(['s', 'cr', 't cod', ' :) :)'], 'e');

function iterativeJoin(array, joinString) {

	let joinedString = '';

	for (let i = 0; i < array.length - 1; i++) {
		joinedString += array[i] + joinString
	}

	return joinedString + array[array.length - 1];
}

console.log(iterativeJoin(['s', 'cr', 't cod', ' :) :)'], 'e'));