var gillFamily = [{name: "john", age: 20},
{name: "richard", age: 27},
{name: "debbie", age: 55},
{name: "dan", age: 25},
{name: "robin", age: 60}];
var beginsWithD = _.filter (gillFamily, function(d){
	if (d.name.charAt(0) == "d"){
		return d.name;
	}
});
	
console.log(beginsWithD);