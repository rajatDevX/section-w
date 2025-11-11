

function introduce(name="student",age=18){
  return `I am ${name} and my age is ${age}`;
}
let c=introduce("shubham",20);
console.log(c);
let d=introduce();
console.log(d);
 let sayHello2=function(){
  console.log("hello");
 }
 sayHello2();
 let sayHello3=()=>{
  console.log(`this is an arrow function`)
 }