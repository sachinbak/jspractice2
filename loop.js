//WHILE LOOP
//print no. till 10
var count =1;
while (count < 11) {
    console.log(" count is : " + count);
    count++;
}
//print multiple of two
 console.log("Multiple of 2");
 var two =2;
 while (two < 21){
     console.log("Multiple of two " + two);
     count +=2;
 }
 // print multiple of two secind way 
 console.log("Multiple of two")
 var t =1;
 while (t <=20 ){
     if(2 % t == 0){
         console.log(t);
     }
     t++;
 }
 // print multiple of two in discriptive way
 console.log("Multiple of 2");
 var t =2, i=1;
 while (t < 21){
     while (i<10){
     console.log("two multiply by  "+ i +"  is equal to " + t);
     
     i++;
     t +=2;
     }
     
 }
//print string individually
 console.log("print string individually ");
 var str = "SACHIN KUMAR MISHRA";
 var count = 0;
 while(count < str.length) {
     console.log(str[count]);
     count++;
 }
//print sting indivisually in discriptive way
 console.log("print string with there position no.");
 var str =" SACHIN KUMAR MISHRA";
 var position = 0;
 var i =1;
 while( position< str.length){
     while(i< str.length+1){
     console.log("the string at  "+ i +" position is "+ str[position]);
    i++;
    position++; 
    }
 }
//PROBLEM SETS 
//Print all no. btw -10 and19

console.log("no. btw -10 and 19");
var a = -10;
while(a <= 19){
    console.log(a);
    a++;
}
// Print all even no. between 10  and 40
console.log("even no. btw 10 and 40");
var even = 10;
while(even<= 40){
    if(even % 2 == 0){
        console.log(even);
    }
    even++;
    
}

//Print all odd no. btw 300 and 333
console.log("odd no. btw 300 and 333");
var odd = 300;
while(odd<= 333){
    if(odd % 2 == 1){
        console.log(odd);
    }
    odd++;
    
}
//Print all no. divisible by 5 and 3 between 5 and 50
console.log("no. divisible by 5 and 3 between 5 and 50");
var tough = 5;
while(tough<= 50){
    if(tough % 3 == 0 && tough % 5 == 0){
       // if(tough % 5 == 0){
            console.log(tough);
        }
        tough++;
    
}

//FOR LOOP
// pront no. from 1 to 5
for(var count = 1; count<6 ; count++) {
    console.log(count);
}

// print multiple of 2
for(var count=1; count <= 20 ; count++) {
    if( count % 2== 0){
        console.log(count);
    }
}

// print each character of string indivisually
var str= " SACHIN KUMAR MISHRA";
for(var i=1; str.length > i ; i++){
    console.log(str[i]);
}
// print each character off string individually with description
var c = 0;
var co = "SACHIN KUMAR MISHRA";
for(var i = 0; co.length> i; i++){
   // for(var c = 0; c<co.length ; c++ ){
       if(c<co.length){
               console.log("the no. "+ c +" character of the word is "+ co[i]);
     }
     c++;
}
// print no. divisible by 3 and 5 btw 10 and 100
for( var i = 10; i <=100 ; i++ ){
    if(i%3 == 0 && i%5 ==0){
        console.log(i);
    }
}
