// sample of arrays
let arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
let arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

// basic implementation
function bubbleSortBasic(array) {
	let countOuter = 0;
	let countInner = 0;
	let countSwap = 0;

	for (let i = 0; i < array.length; i++) {
		countOuter++;
		for (let j = 1; j < array.length; j++) {
			countInner++;
			if (array[j - 1] > array[j]) {
				countSwap++;
				swap(array, j - 1, j);
			}
		}
	}

	console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
	return array;
}
console.log('~~~ ~~~ BASIC ~~~ ~~~');

console.log('\n~~~ basic: arrayRandom ~~~');
bubbleSortBasic(arrayRandom.slice());

console.log('\n~~~ basic: arrayOrdered ~~~');
bubbleSortBasic(arrayOrdered.slice());

console.log('\n~~~ basic: arrayReversed ~~~')
bubbleSortBasic(arrayReversed.slice());

// optimized
function bubbleSort(array) {
	let countOuter = 0;
	let countInner = 0;
	let countSwap = 0;

	let swapped;
	do {
		countOuter++;
		swapped = false;
		for (let i = 0; i < array.length; i++) {
			countInner++;
			if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
				countSwap++;
				swap(array, i, i + 1);
				swapped = true;
			}
		}
	} while (swapped);

	console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
	return array;
}

console.log('\n\n~~~ ~~~ OPTIMIZED ~~~ ~~~');

console.log('\n~~~ optimized: arrayRandom ~~~');
bubbleSort(arrayRandom.slice());

console.log('\n~~~ optimized: arrayOrdered ~~~');
bubbleSort(arrayOrdered.slice());

console.log('\n~~~ optimized: arrayReversed ~~~');
bubbleSort(arrayReversed.slice());