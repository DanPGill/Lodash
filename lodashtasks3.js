var gillFamily = [{name: "john", age: 20},
{name: "richard", age: 27},
{name: "debbie", age: 55},
{name: "dan", age: 25},
{name: "robin", age: 60}];
var sumOfAges = _.sumBy(gillFamily, "age");
console.log(sumOfAges);