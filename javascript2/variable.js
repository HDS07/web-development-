alert("hey what's up!!");
console.log("hey this work is for variable in js");
var A1=105;   //var is globally scoped
let a=5;     //let and const are block scoped 
 var b=10;
 console.log( "The sum is: " + (a+b));

{
    let a=10;
    console.log(a);
    var A1= 110;
 }
 console.log("this prints the first value of a: " +a);
 console.log("this prints the first value of A1: " +A1);

 var _name="harsh";
 var _name2=_name+"deep";
 console.log(_name2);

console.log(typeof _name2,typeof b);

const c=6;
// c=c+1;         shows an error because c is const     
console.log(c);


let x="shakya";
let y=24;
const z=true;
let xyz=undefined;
let pqr=null;
console.log(typeof x,typeof y,typeof z,typeof xyz,typeof pqr);



 