
// if(true){
//     let a=10;
//     const b=20;
//     var c=30;
// }

// console.log(a);
// console.log(b);
// console.log(c);
console.log(add1(5));
function add1(num){
    return num+1;
}
console.log(add2(5));
const store=function add2(num){
    return num+2;
}
//when we declare directly function rather then storing in variable then we can call function above it does not through error but when we store function in variable then it through error
