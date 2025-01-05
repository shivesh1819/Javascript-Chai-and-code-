////objects

``//object literal
const asym=Symbol("hello");
const JsUser={
    name:"shivesh",
    [asym]:"hello",
    "full name":"Shivesh Kumar Mishra",
    age:18,
    location:"Jaipur",
    email:"shiveshmishrajnp@gmail.com"
};

console.log(JsUser.name);
console.log(JsUser["name"]);

console.log(JsUser["full name"]);
console.log(JsUser["full name"]);
console.log(JsUser[asym]);

///if you not want to make changes in  cject then 
Object.freeze(JsUser);
JsUser.name="krishna";
console.log(JsUser);