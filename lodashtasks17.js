var gillFamily = [{name: "john", age: 20},
{name: "richard", age: 27},
{name: "debbie", age: 55},
{name: "dan", age: 25},
{name: "robin", age: 60}];
var aInName = _.filter(gillFamily, function(a){
	return a.name.indexOf("a") !== -1
	});
var youngestMemberWithA = _.minBy(aInName, function(m){
return m.age;
});
console.log (youngestMemberWithA);