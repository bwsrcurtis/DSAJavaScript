// Slowest method. Loop inside of loop. O(N^2) complexity
let isUnique = (arr) => {
	let result = true;

	for (let i = 0; i < arr.length; i++) {
		console.log(`Outer Loop ${i}`);

		for (let j = 0; j < arr.length; j++) {
			console.log(`Inner Loop ${j}`);
			if (i !== j && arr[i] === arr[j]) {
				result = false;
			}
		}
	}
}

// Add memoization, or caching to improve time complexity to linear time, O(N), at the cost of space complexity
isUnique = (arr) => {
	const breadcrumbs = {};
	let result = true;

	for (let i = 0; i < arr.length; i++) {
		console.log(`Loop ${i}`);
		if (breadcrumbs[arr[i]]) {
			result = false;
		} else {
			breadcrumbs[arr[i]] = true;
		}
	}
	return result;
}

// Implementation of a unique sort with memoization
const uniqSort = function (arr) {
	const breadcrumbs = {};
	let uniqArr = []

	for (let i = 0; i < arr.length; i++) {
		console.log(`Loop ${i}`);
		if (!breadcrumbs[arr[i]]) {
			uniqArr.push(arr[i]);
			breadcrumbs[arr[i]] = true;
		}

	}
	return uniqArr.sort((a, b) => a - b);
};
uniqSort([2, 3, 5, 4, 4, 4, 2])