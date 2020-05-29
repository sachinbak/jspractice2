
var color =["color","red","blue","indigo"];
color
// push add at the end of array
color.push("brown");
color
//pop removes the element in the last array
color.pop();
color
// shift remove the element  from the begining of the array
color.shift();
color
//unshift add the element  from the begining of the array
color.unshift("grey");
color
//indexof
var friends = ["Arya","Aldous","Dhruv","Miya","Jayat","Arya","dravid"];
friends.indexOf("Arya");
friends.indexOf("dravid");
friends.indexOf("Jayat");
friends.indexOf("Karina");

//slice
var place =["Goa","Jabalpur","Delhi","Panji"];
var nonGoa = place.slice(1,3);
var copyCities = place.slice();
