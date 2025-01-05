////object2 singelton...

// const tinderUser={};
// tinderUser.is="123cebb";
// tinderUser.name="shivesh";
// tinderUser.isLogedIn=false;
// console.log(tinderUser);git

const regularUse = {
  email: "shiveshmishrajnp@gmail.com",

  fullname: {
    userfullname: {
      firstname: "shivesh",
      lastname: "mishra",
    },
  },
};
console.log(regularUse.fullname.userfullname);

const obj1={
    1:"a",
    2:"b",
};
const obj2={
    4:"c",
    5:"d",
};
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
 const obj3={...obj1,...obj2};
  console.log(obj3);///spread method

  const course={
    coursename:"js in ",
    price:"99",
    courseInstructor:"shivesh"
  };
  const {courseInstructor}=course;
  console.log(courseInstructor);
