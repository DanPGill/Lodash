var gillFamily = [{name: "john", age: 20},
{name: "richard", age: 27},
{name: "debbie", age: 55},
{name: "dan", age: 25},
{name: "robin", age: 60}];
var underFifty = _.filter(gillFamily, function(age){
	return age.age < 50;
}
)
var listUnderFifty = _.map(underFifty, function(name){
	return name.name + " gill";
}).join(", ");
console.log(listUnderFifty);