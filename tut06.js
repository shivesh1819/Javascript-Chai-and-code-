// different data type
/*
1)Primitive -7types:-string,number,boolean,null,undefined,symbol,BigInt
  
2)Reference tpe of non primitive :-array,objects,function


javascript is dynamically typed because
In JavaScript, variables are not bound to a specific data type.
A variable can hold a value of any type, and its type can change during runtime.
javascript
You don't need to specify the type of a variable when declaring it. The type is determined based on the value assigned.


typeof null =object;



*/

// const value={1,2,3};
let myobj={
    name: "shivesh",
    age:12
};
console.log(myobj);
//statck(primitive) ,heap(Non-Primitive data type)
let myname="shivesh";

myname="krishna";
let anothername=myname;
console.log(myname);
console.log(anothername);
let username1={
    name:"shivesh",
    age:12
};
let username2=username1;
username2.name="shiveshm";
console.log(username1);