const cache = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
	// Return the value if it’s in the cache
	if (cache[c]) return cache[c];

	let minCoins = -1;

	// Find the best coin
	coins.forEach(coin => {
		if (c - coin >= 0) {
			let currMinCoins = makeChange(c - coin);
			if (minCoins === -1 || currMinCoins < minCoins) {
				minCoins = currMinCoins
			}
		}
	})

	// Save the value into the cache
	cache[c] = minCoins + 1;
	return cache[c];
}

console.log(makeChange(12));