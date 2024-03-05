let heroes=["ironman","hulk","thor","spiderman","batman","antman"];

console.log(heroes.length);

console.log(heroes[2]);
console.log("");

// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

for (let hero of heroes){
    console.log(hero.toUpperCase());
}

heroes.push("blackpanther","CA");
console.log(heroes);

heroes.pop();
console.log(heroes);

let str=heroes.toString();
console.log(str);

let num=[1,2,3,4,5];
num.unshift(0);
console.log(num);

let x=num.shift();
console.log(x);
console.log(num); 


let p=num.slice(1);
console.log(p);

num.splice(1,2,101,102);
console.log(num);




