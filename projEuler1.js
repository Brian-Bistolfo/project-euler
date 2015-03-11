function returnNaturalsBelow1000() {
  var resultArr = [];

  for (var i = 1; i < 1000; i++){
    if ((i % 3) == 0) {
      resultArr.push(i);
    } else if ((i % 5) == 0) {
      resultArr.push(i);
    }
  }

  resultArr = resultArr.reduce(function(a,b){
    return a + b;
  });

  return resultArr;
}
