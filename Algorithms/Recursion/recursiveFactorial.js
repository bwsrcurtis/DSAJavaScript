// Task 1: Write your own recursive factorial method
function recursiveFactorial(n) {
	let factorial = 1
	function recurse(n) {
		if (n === 1) {
			return factorial;
		} else {
			factorial *= n;
			return recurse(n - 1);
		}
	}

	return recurse(n)
}

console.log(recursiveFactorial(5)) //120

// Task 2: Memoize your factorial method

const memoize = (cb) => {
	let cache = {};
	return (n) => {
		if (cache[n]) {
			console.log('Fetching from cache:', n);
			return cache[n];
		} else {
			console.log('Calculating result', n);
			let result = cb(n);
			cache[n] = result;
			return result;
		}
	}
}

const memoizedRecursiveFactorial = memoize(recursiveFactorial);
try {
	console.log('Task 4 calculated value:', memoizedRecursiveFactorial(9));	// calculated
	console.log('Task 4 cached value:', memoizedRecursiveFactorial(9));	// cached
} catch (e) {
	console.error('Task 4:', e)
}