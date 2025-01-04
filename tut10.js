 //aray
//  const myArr=[0,1,2,2,2];
//  const myPagles=["shivesh","rohit","harsh"];

//  const arr2=new Array(1,2,3,4);
//  console.table([myArr,myPagles,arr2]);

 //array methods
//  myArr.push(6);
//  console.log(myArr);
//  myArr.pop();
//  console.log(myArr);
//  myArr.unshift(12);///add in front 
//  console.log(myArr);
//  myArr.shift();//no arument is pass and remove from the frot
//  console.log(myArr);
 
//  console.log(myArr.includes(2));
//  myArr.indexOf(2);
//  console.log(myArr.indexOf(2));
let a=[1,2,3,4];
console.log(a.slice(1,3));
console.log(`original arr after slice ${a}`);
console.log(a.splice(1,3));
console.log(`original arr after splice ${a}`);

/*
in slice there is no change in the origial array it returner the start index to last-1 which mentione
but in splice there is a change in the original array it only  returned remained value


*/