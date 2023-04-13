function binarySearch(list, item) {
	let start = 0
	let end = list.length - 1;


	while (start < end) {
		let mid = Math.floor((start + end) / 2);
		if (list[mid] < item) {
			start = mid + 1;
		} else if (list[mid] > item) {
			end = mid - 1;
		} else {
			return true
		}
	}
	return false;
}

console.log(binarySearch([2, 6, 7, 90, 103], 90));