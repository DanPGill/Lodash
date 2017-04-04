var gillFamily = [{name: "john", age: 20},
{name: "richard", age: 27},
{name: "debbie", age: 55},
{name: "dan", age: 25},
{name: "robin", age: 60}];
var over26 = _.map(gillFamily, function(o){
	_.remove(over26, o.age>26)
});
console.log(over26);