function makeCounter() {
    let count = 0; 

    return function() {
      count += 1; 
      return count; 
    };
  }
  
  const counter = makeCounter();
  

  console.log(counter()); 
  console.log(counter()); 
  console.log(counter()); 
  

  const anotherCounter = makeCounter();
  console.log(anotherCounter()); 
  