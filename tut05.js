//comparison
console.log(null==0);
console.log(null>0);
console.log(null>=0);
/*
The == operator performs type coercion, but null is only loosely equal to undefined and not to any other value, including 0.
When using relational operators (>, <, >=, <=), null is converted to a number (0) for comparison.




*/
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);
//=== strict check check datatype