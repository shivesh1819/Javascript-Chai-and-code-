// // for of loop
// const arr=[1,2,3,4];
// for (const num of arr) {
//     console.log(num);
// }
// const greeting ="hello world";
// for(const greet of greeting){
//     console.log(`Each char is ${greet}`);
// }


//map function 
const map=new Map();
map.set("IN","INdia ");
map.set("USA","United State Of America");
map.set("Fr","france ");
map.set("Fr","france ");
console.log(map);
for (const [key,value] of map) {
console.log(key,":-",value);
    
}
