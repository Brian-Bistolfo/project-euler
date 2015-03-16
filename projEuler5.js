	(function smallestNumDiv() {
	  
	  loop1:
	  for (var i = 1; i < 1000000000; i++) {

	  	loop2:
	  	for (var j = 1; j <= 20; j++) {

	  		if ((i % j) !== 0) {
	  			break loop2;
	  		} else if (j === 20) {
	  			return i;
	  		}		
	  	}
	  }

	  return -1;
	})();
