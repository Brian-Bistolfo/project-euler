function diffOfSquares (n) {
  function sumAll (num) {
    if (num <= 1) {
      return 1;
    } else {
      return num + sumAll(num - 1);
    }
  }

  function sumSqrs (max) {
    if (max <= 1) {
      return 1;
    } else {
      return (max * max) + sumSqrs(max - 1);
    }
  }

  return Math.pow(sumAll(n), 2) - sumSqrs(n);
} 
