let arr = [];
nextPrime:
  for (let i = 2; i <= 100; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
          continue nextPrime;
        }
    }
    arr.push(i);
}
arr.forEach(function(items) {
    console.log(items + " - делители этого числа: " + 1 + " и " + items);
});
