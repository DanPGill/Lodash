var gillFamily = [{name: "john", age: 20},
{name: "richard", age: 27},
{name: "debbie", age: 55},
{name: "dan", age: 25},
{name: "robin", age: 60}];
var over26 = _.map(gillFamily, function(age){
	if(age.age>26){
		return age.name
	}	
	else {return age.name + age.age}
});
console.log(over26);