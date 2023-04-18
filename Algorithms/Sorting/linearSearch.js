// TASK: Implement linear search.

function linearSearch(list, item) {
	for (let i = 0; i < list.length; i++) {
		if (item === list[i]) {
			return true;
		}
	}
	return false;
}

console.log(linearSearch([2, 6, 7, 90, 103], 90));