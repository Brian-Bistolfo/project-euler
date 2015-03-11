function sumFibEven (n) {
	var 
		curNum = 1,
		prev = 1,
		twoPrev = 0,
		arr = [0];

	while (curNum < n) {
		arr.push(curNum);

		//move the fib sequence over one

		twoPrev = prev;
		prev = curNum;
		curNum = prev + twoPrev;
	}

	arr = arr.filter(function(item) {
		return (item % 2) == 0;
	});

	arr = arr.reduce(function(a,b){
		return a + b;
	});

	return arr;
};
