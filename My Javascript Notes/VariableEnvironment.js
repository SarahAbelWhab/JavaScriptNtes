// // priority for local variable over global variable

// function d() {
//     function f() {
//         console.log(myVar);   // 4  as 'f()' invoked after myVar declared 
//         // if we switch the declaration below the invocation we got 'undefined'
//     }
//     var myVar = 4;
//     f();
// }

// function c() {
//     console.log(myVar);   // 1
// }

// function b() {
//     var myVar;
//     console.log(myVar);  //Undefined
// }

// function a() {
//     var myVar = 2;
//     console.log(myVar);  // 2
//     b();
// }

// var myVar = 1;
// console.log(myVar);      // 1
// a();
// d();
// // f();   // threw error as its lexical environment into d()