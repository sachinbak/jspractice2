// array iteration
var city= ["new york", "delhi","mumbai","paris"];
for(var i =0; i < city.length; i++){
    alert(city[i]);
}
// reverse
var city= ["new york", "delhi","mumbai","paris"];
for(var i =  city.length-1; i = 0; i--){
    console.log(city[i]);
}
// ForEach 
var city= ["new york", "delhi","mumbai","paris"];
city.forEach(function(){
    console.log("inside the for each");
});
//or
var city= ["new york", "delhi","mumbai","paris"];
city.forEach(function(){
    alert("inside the for each");
});
// discriptive way
var city= ["new york", "delhi","mumbai","paris"];
city.forEach(function(shehar){
    alert("inside the for each " + shehar);
});
// descriptive way 2
var city= ["new york", "delhi","mumbai","paris"];
city.forEach(function(shehar){
    for(var i = 0; i<city.length ; i++ ){

    
    alert("the  "+ i + " city is "+ shehar);
    }
    //alert("the  "+ i + " city is "+ shehar);
});
//for each array elements
function newCity(ncity){
    console.log("$$$$$$$$$$$$$$$$$$");
    console.log(ncity);
    console.log("$$$$$$$$$$$$$$$$$$$");
}
newCity("secunderabad");
city.forEach(newCity);
// discripttive way
function newCity(ncity){
    console.log("the city is " + ncity);
    console.log(ncity);
    console.log(ncity + " is the best.");
}
newCity("secunderabad");
city.forEach(newCity);
// array iteration using while loop
count=1;
while (count < city.length){
    console.log(city[count]);
    count++;
}

