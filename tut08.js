//number and maths
const balance =new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(3));
////////////maths
console.log(Math.abs(-1));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));//upper value print
console.log(Math.floor(4.2));//lower value print 
console.log(Math.sqrt(36));
console.log(Math.min(4,2,0,1));
///Math random value
console.log(Math.floor((Math.random()*6)+1));
const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1)+min));
/*
to apply a math.random value from min to max we max-min_+1 mult to math.random() and the addd min

*/