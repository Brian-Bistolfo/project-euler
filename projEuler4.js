function largest3DigitPalindrome() {
  var threeDigitProducts = [];
  var palindromes = [];
  for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
      threeDigitProducts.push(i*j);
    }
  }

  while (threeDigitProducts.length) {
    var current, reversed;
    current = threeDigitProducts.pop();
    reversed = parseInt(current.toString().split('').reverse().join(''));
    if (current === reversed) {
      palindromes.push(current);
    }
  }

  palindromes = palindromes.sort(function(a, b){
    return a - b;
  });

  return palindromes[palindromes.length-1];
}
