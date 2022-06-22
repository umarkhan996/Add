var obj = { num: 2 };
var addToThis = function(a) {
    return this.num + a;

};
console.log(addToThis.call(obj, 3)); //functionname.call (obj ,functionarguments) 


var obj = { num: 2 };
var addToThis = function(a, b, c) {
    return this.num + a + b + c;

};
// console.log(addToThis.call(obj, 1, 2, 3));  //functionname.call (obj ,functionarguments)

var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));



var obj1 = { num: 2 };
var obj2 = { num: 5 };
var addToThis = function(a, b, c) {
    return this.num + a + b + c;

};
// console.log(addToThis.call(obj, 1, 2, 3)); //functionname.call (obj ,functionarguments)

var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj2, arr));




// Bind

var obj = { num: 2 };
var addToThis = function(a, b, c) {
    return this.num + a + b + c;

};
var arr = [1, 2, 3];
var bound = addToThis.bind(obj);
console.dir(bound);
console.log(bound(1, 2, 3));

console.log(addToThis.bind(obj, arr));