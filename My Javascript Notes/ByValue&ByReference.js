// // pass by value
// function change(b) {
//     b = 2;
// }

// var a = 1;
// change(a);
// console.log(a);   // a=1   //don't change



// // pass by reference
// function changeObj(d) {
//     d.prop1=function () {};
//     d.prop2 ={}
// }
// var c = {};
// c.prop1 = {};
// changeObj(c);
// console.log(c);        // Object {prop1:[function] , prop2: {} }
// // it changed.