var gillFamily = [{name: "john", age: 20},
{name: "richard", age: 27},
{name: "debbie", age: 55},
{name: "dan", age: 25},
{name: "robin", age: 60}];
var html = "<script type =\"text/template\" id=\"grid-template\">\n" +
"<table>\n" +
"<tbody>\n" +
"<tr> \n" +
"<th>Name</th> \n" +
"<th>Age</th> \n" +
"</tr> \n" +
"<% forEach_.(gillFamily, function(value){ %>\n" +
"<tr> \n" +
"<td><%-name%></td> \n" +
"<td><%-age%></td> \n" +
"</tr> \n" +
"<%})%>\n" +
"</tbody> \n" +
"</table> \n" +
"</script>"
console.log(html);
