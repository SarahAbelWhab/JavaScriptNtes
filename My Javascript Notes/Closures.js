// use or access variable into function invocked and its execution context ended
// other developer can't change these variables

// -----------------------example-----------------------\\
// function makeCounter() {
//     let count=2;
//     return function () {
//         return count++;
//     };
// };

// let counter = makeCounter();

// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());



// -----------------------example-----------------------\\
// Immediately-invoked Function Expressions (IIFE)
// var add = function () {counter += 1; return counter}
// with variable counter in execution context

// var add = (function () {
//     var counter = 0;
//     return function () {counter += 1; return counter;}
//   })();
  
//  alert(add()) ;
//  alert(add()) ;
//  alert(add()) ;
 