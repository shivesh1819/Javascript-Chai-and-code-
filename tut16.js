const chai=function(){
    let username="hitesh";
    console.log(this.username);
}
chai();
///arrow function
// const chai=()=>{
//     let username="hitesh";
//     console.log(this.username);
// }
const addtwo=(...num)=>{
    let sum=0;
    for(let i=0;i<num.length;i++){
      sum+=num[i];
    }
    return sum;
}
console.log(addtwo(100,200,399));
///different way to learn arrow 
// const addtw=(num1,num2)=>num1+num2;
const addtw=(num1,num2)=>(num1+num2);
console.log(addtw(1,2));