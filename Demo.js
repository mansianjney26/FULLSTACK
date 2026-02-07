//----------------------------------------------------------1st class
// let a=10,b=10;
// console.log(a+b);
// --------------------------------
// var a=10,b=10;
// console.log(a+b);
// --------------------------------
// const a=10;
// console.log(a);
// a=20;
// console.log(a);
// ---------------------------------
// let a=10;
// console.log(a);
// a=20;
// console.log(a);
// console.log(a);
// const a=20;
// ----------------------------------
// let n=2;
// for(let i=0;i<n;i++){
//     console.log(i);
// }
// ----------------------------------
// Operators :
// console.log(5=='5');
//-----------------------------------
// let num =10; //number
// console.log(num);
// ----------------------------------
// let str ='Hello';//string
// console.log(str);
// ----------------------------------
// let arr=[1,2,3];//array object
// console.log(arr);
// ----------------------------------
// let obj={name : "Mansi",age:20};//object
// console.log(obj);
// ----------------------------------
// let a;//undefine
// let emp=null;//object null -> key pair(object)
// let isok=true;//boolean
// ----------------------------------
// function :
// function greet(){
//     console.log("Hello KIETians");
// }
// greet();
// function add(a,b){
//     return a+b;
// }
// var result=add(2,3);
// console.log(result);

// ---------------------------------------------------------2nd class
// let arr=[2,4,6,8]
// for(let i=0;i<arr.length;i++){
//     if(i%2==0){
//         console.log(arr[i]);
//     }
// }
// const person = {key:"Hello"};
// console.log(person.key);
// person.key="Bye";
// console.log(person.key);

// const arr=["HTML","CSS","JAVASCRIPT"];
// console.log(arr);
// arr.push("python");
// console.log(arr);

// const Sales="Toyota";
// function carType(name){
//     name==="Honda"?name:"Sorry we don,t sell this car";             //Terniary operator
// }
// const car={carn:"City",getCar:carType("Honda"),Special:Sales}

// console.log(car.carn);
// console.log(car.getCar);
// console.log(car.Special);

// const color=["Red","Black","White"];
// var i;
// color.forEach((i,a)=>console.log(i,a));

//----------------------------------------------------------------
// let nums1=[10,50,60,20];
// nums1.forEach(function(value,index){
//     nums1[index]=value+3;
// });
// console.log(nums1);

// for(const i in color){
//     console.log(i,color[i]);
// }

// const user={name:"Mansi",age:20,Hobby:"Coding"};
// for(const index in user){
//     console.log(index,user[index]);
// }

const language=["HTML","CSS","JAVASCRIPT"]
for(const index of language){
    console.log(index);
}