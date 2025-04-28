function counter(arr) {
    let negatives = 0;
    let zeros = 0;
    let positives = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
  
      switch (true) {
        case value < 0:
          negatives++;
          break;
        case value === 0:
          zeros++;
          break;
        case value > 0:
          positives++;
          break;
        default:
          // Handle cases where the value is not a number (optional)
          break;
      }
    }
  
    return {
      negatives: negatives,
      zeros: zeros,
      positives: positives,
    };
  }
  
  // Example usage:
  const myArray = [-5, 0, 10, -2, 0, 8, -1, 0, 3];
  const counts = counter(myArray);
  console.log(counts); // Output: { negatives: 3, zeros: 3, positives: 3 }
  
  const myArray2 = [1,2,3,4];
  const counts2 = counter(myArray2);
  console.log(counts2); // output: {negatives: 0, zeros: 0, positives: 4}
  
  const myArray3 = [-1,-2,-3];
  const counts3 = counter(myArray3);
  console.log(counts3); // output: {negatives: 3, zeros: 0, positives: 0}
  
  const myArray4 = [0,0,0,0];
  const counts4 = counter(myArray4);
  console.log(counts4); // output: {negatives: 0, zeros: 4, positives: 0}
  
  const myArray5 = [];
  const counts5 = counter(myArray5);
  console.log(counts5); // output: {negatives: 0, zeros: 0, positives: 0}