// square of a number
function square(num) {
        console.log("The square of number "+ num + " is "+num * num);
}
square(10);
// greet with name
function greet(name) {
    console.log("Greetings "+ name+ " !!");
}
greet("Sachin");
//area of rectangle
function rectangle(length,width){
    console.log("The area is "+ length*width );
}
rectangle(2,7);
//greet multiple people
function greet(name,name1,name2) {
    console.log("Greetings "+ name+ " !!");
    console.log("Greetings "+ name1+ " !!");
    console.log("Greetings "+ name2+ " !!");
}
greet("Sachin","Rohan","Venkat");
// Return Function
// 1st letter capital
function city(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);
}
var name = "mumbai";
var capital = city(name);
city();
// input only string 1st lrtter capital
function city(str) {
    if(typeof str === "number"){
        return "that's not a string!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var name = "mumbai";
var capital = city(name);
var num = 31;
var capital = city(num);
city("paris");
city(31);

//PROBLEM SET

// chech the no. is even or odd
function number(num) {
    if(num % 2== 0){
        return "even";
    }
    return "odd";
}
number(3);
number(4);
//factorial of a no.
function factorial(num){
    var result=1;
    for(var i = 2; i <= num; i++ ){
       // result = result * i;
       result *= i;
    }
    return result;
}
// kebabtosnake replace - with _
function hoha(str) {
    var newStr = str.replace(/-/g , "_");
}
return newStr;