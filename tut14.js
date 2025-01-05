///function

// function add(num1,num2){
//     return num1+num2;
// }
// let result=add(3,4);
// console.log(result);

function loginUserMessage(username){
    if(!username){
        return `undefined value`;
    }
    else{
        return `${username} logged out`;
    }
   
}
// console.log(loginUserMessage())
//rest operator
function calculatePriceCart(...num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum=sum+num[i];
    }
    return sum;
}
console.log(calculatePriceCart(100,200,300));

const user={
    name:"shivesh",
    age:22
};
function takeValueFromUsername(anyobj){
    console.log(`the name of user is ${anyobj.name} and the age of the user is ${anyobj.age}`);
}
takeValueFromUsername(user);