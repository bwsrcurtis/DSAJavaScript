// coin values: 5, 10, 25

const makeChange = (coins, amount) => {
	coins.sort((a, b) => b - a);
	let coinTotal = 0;
	let i = 0;
	while (amount > 0) {
	  if (coins[i] <= amount) {
		amount -= coins[i];
		coinTotal++;
	  } else {
		i++;
	  }
	}
	return coinTotal;
  };
  
  makeChange([5, 10, 25], 50);
  
  
  
  // input amount: 40 , output # of coins: 3 (25, 10, 5)
  
  
  // input amount: 35, output # of coins: 2 (25, 10)