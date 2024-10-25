// console.log(" hello world ");
// var accountTitle="Qasim Nawaz ";
// let accountCity="Lahore";
// let accountstate;
// const accountId="56263563";
// accountType="Saving account ";
 //accountCity="Islamabad";
// accountTitle="Hamza Noor"
// console.log(accountId);
// console.table([accountId,accountCity,accountTitle,accountType,accountstate]); 



// let nam="33";
// let convetedNum=Number(nam);
// console.log(nam);
// console.log(typeof nam);
// console.log(convetedNum);
// console.log(typeof convetedNum);

// let nam="33abc";
// let convetedNum=Number(nam);
// console.log(nam);
// console.log(typeof nam);
// console.log(convetedNum);
// console.log(typeof convetedNum);

// the string is successully converted int number if it can otherwise it show the "number " after conversion 
//on calling typeof func but when we try to print the number it show NaN.


//  let bol=false;
//  let convetedNum=Number(bol);
//  console.log(bol);
//  console.log(typeof bol);
//  console.log(convetedNum);
//  console.log(typeof convetedNum);

//  let bol=true;
//  let convetedNum=Number(bol);
//  console.log(bol);
//  console.log(typeof bol);
//  console.log(convetedNum);
//  console.log(typeof convetedNum);

//if the boolean value is converted into number. it should be successfully converted into the number acc to type and val both
//false<=0
//true<=1


// console.log(null);
// console.log(typeof null);
// console.log(undefined);
// console.log(typeof undefined);
// let numberfromNull=Number(null);
// console.log(numberfromNull);
// console.log(typeof numberfromNull);
// let numberfromNull=Number(undefined);
// console.log(numberfromNull);
// console.log(typeof numberfromNull);


//undefined<= NaN
//null<= 0;
// const first="qasim ";
// const second ="nawaz";
// const full =first+second;
// console.log(full);
// console.log(`my first name is ${first} and second name is ${second}`);

// const name= new String('Qasim nawaz');
// console.log(name[0]);
// console.log(name.length);
// console.log(name.toUpperCase());
// // do not change the original name it  first create the copy 
// const nam= name.substr(0,3);
// console.log(nam);
// console.log(name.indexOf('s'));
// console.log(name.charAt(3));
// const anothername=name.slice(1,5);
// console.log(anothername);
// const friendName="    hamza noor       ";
// console.log(friendName.trim());
// let url= "https://QasimNaw.org.pkQasim%20Nawaz"
// console.log(url.replace('%20','-'));


/*****************************************video no 12 *************************/
//number
// const balance =Number(123.454);
// console.log(balance);
// console.log(balance.toLocaleString());
// console.log(balance.toPrecision(4));
// console.log(balance.toFixed(2));

// //maths
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.ceil(8.3));
// console.log(Math.floor(6.9));
// console.log(Math.max(8,7,5,9,2));
// console.log(Math.min(6,4,3,2));
// let min=12;
// let max=25;
// console.log(Math.random());
// console.log(Math.floor(Math.random()*(max-min+1)+min));


/*********************************video no 13 *******************/
//date
// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
  

// let mycreatedDate=new Date(2023,2,23,5,7);
// console.log(mycreatedDate.toLocaleString());


// let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

// let newDate=new Date();
// console.log(newDate.getDate()+1);
// console.log(newDate.getDay()+1);
// console.log(newDate.getMonth()+1);

// console.log(newDate.toLocaleString('default',{
//     weekday:"long",
//     month:"2-digit",
//     dayPeriod:"narrow"
    
// }));




//time



/************************************** video no 16***********************/
// const sym=Symbol("user1");
// let jsUser={
//     email:"qasimd000@gmail.com",                                                            
//     name:"qasim",
//     "full name":"mohammad qasim",
//    [sym]:"sybol123",
//    account:"56789"
// }
// jsUser.greeting=function(){
//     console.log("hello Asalam o alaikum");

// }

// console.log(jsUser.email);
// console.log(jsUser  ["full name"]);
// console.log(jsUser[sym]);
// console.log(jsUser.greeting());2
// //Object.freeze(jsUser);
// jsUser.account="89765";
// console.log(jsUser);

// let tinderUser={
//     id:"123abs",
//     name:"samay",
//     isLoggedIn:"false"
// }
// //console.log(tinderUser);

// let regularUser={
    
//     id:"1234",
//     email:"qasimd000@gmail.com",
//     fullName: {
//    firstName:"Qasim",
//    secondName:"Nawaz"
//     }
// }
// //console.log(regularUser.fullName.firstName);

// let obj1={
//     "1":"a",
//     "2":"b"
// }
// let obj2={
//     "1":"a",
//     "2":"b",
//     "3":"c"
// }
// // const obj3=Object.assign({},obj1,obj2);
// // console.log(obj3);
// const obj3={...obj1,...obj2};
// //console.log(obj3);
 
// let myArr=[
//     {
//         id:"123",
//         email:"qasim@hdsj"
//     }
// ,
//     {
//         id:"123",
//         email:"qasim@hdsj"
//     }
//  ,   
//     {
//         id:"123",
//         email:"qasim@hdsj"
//     }
// ,
//     {
//         id:"123",
//         email:"qasim@hdsj"
//     }
// ]
// //console.log(myArr[1]);
// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(
//  regularUser.hasOwnProperty("loggedin")
// );

// const course ={
//     cousreName: "js aur chai",
//     courseInstructor:"harsh chaudaury",
//     price:999
// }
// const {courseInstructor:Instructor}=course;
// console.log(Instructor);

// function welcome(){
//     console.log("welcome here");
//     console.log(this);
// }
// welcome();

// function chai(){
//     let username="hitesh";
//     console.log("welcome to chai aur code ");
//    console.log(this);
   
    
// }
// chai()

// const chai=function(){
//     let username="hitesh";
//   console.log("welcome to chai aur code ");
//     console.log(this);
// }
// chai()

// const chai=()=>{
//         let username="hitesh";
//   console.log("welcome to chai aur code ");
//     console.log(this);
// }
// chai()

// const addtwo=(num1,num2)=> {return num1+num2};
// const addtwo=(num1,num2)=> (num1+num2);
// console.log(addtwo(55,45));

// const addUsername=()=>({username:"Qasim Nawaz"})
// console.log(addUsername());





//IIFE
//IMMEDIATE IVOKED FUNCTION EXPRESSION
//we use these functions because we want these function from global garbage
//or to invoked the function immediately
// (function dbCheck(){
//     console.log("DB CONNECTED");
    
// })();

// ( ()=>{console.log(`DB CONNECTED TWO`);
// })();

// ( (name)=>{console.log(`DB CONNECTED WITH ${name}`);
// })('Qasim');
 n="naseem";
if(true){const name="Qasim";
let nam= "Hamza";
na="Harsh";
var n="Naeem";
}
console.log(na);
//console.log(nam);
// console.log(name);


console.log(n);


//falsy value
//false 
// 0
//-0
//bigint
//empty string
//null
//not a number


//true value
//true
//1
//any thing in string is true value
//{}
//[]
//functions