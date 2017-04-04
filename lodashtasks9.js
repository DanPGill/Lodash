var gillFamily = [{name: "john", age: 20},
{name: "richard", age: 27},
{name: "debbie", age: 55},
{name: "dan", age: 25},
{name: "robin", age: 60}];

var tableContents = _.map(gillFamily, function(t){
  return "<tr>\n" + "<td>" + t.name + "</td>\n" +
  "<td>" + t.age + "</td>\n" + "</tr>\n";
});

var html = "<table>\n" +
"<tbody>\n" +
"<tr> \n" +
"<th>Name</th> \n" +
"<th>Age</th> \n" +
"</tr>\n" +
tableContents +
"</tbody> \n" +
"</table> \n"
console.log(html);
