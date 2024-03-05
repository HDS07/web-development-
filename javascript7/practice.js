let marks=[85,97,44,37,76,60];
let sum=0;

// for (let i = 0; i< marks.length; i++) {
//     sum=sum+marks[i];
// }

for (let val of marks){
    sum=sum+val;
}
let avg=sum/marks.length;
console.log("avg marks will be:",avg+"\n");


let comp=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

comp.shift();
console.log(comp);

comp.splice(1,1,"OLA");
console.log(comp);

comp.push("Amazon");
console.log(comp)