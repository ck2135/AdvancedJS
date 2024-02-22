// let stepOne = (abc) =>{
//     console.log("I am step 1");
//     abc();
// }

// let stepTwo = (abc) => {
//     console.log("I am step 2");
//     abc();
// }


// let stepThree = (abc) => {
//     console.log("I am step 3");
//     abc();
// }

// let stepFour = (abc) => {
//     console.log("I am step 4");
//     abc();
// }
// let stepFive = () => {
//     console.log("I am step 5");
// }
// stepOne(() =>{
//     stepTwo(()=>{
//         stepThree(()=>{
//             stepFour(()=>{
//                 stepFive();
//             });
//         });
//     });
// });
// ===================================================================================




// let array1 = [...[...' ']].length
// console.log(array1)


// function allDomains(domainName, mainExtention, ...extensions){
//     console.log(extensions.length);
//     }
//     allDomains("Studytonight", ".com", ".xyz", ".online", ".in",".us",".uk");


// function fun(a, b){
//     return a + b;
// }
// console.log(fun(1, 2, 3, 4, 5))

// let arr = ['a','b'];
//    let arr2 = [arr,'c','d'];
//    console.log(arr2);




// Async await
// ------------------------------------------------------------------------

// async function test(){
//     x = await 5+7;
//     console.log("Inside function")   // This will print second
//     return x;                        // This will print third
// }

// let res = test();
// console.log("Outside function")  // This will print first
// res.then(function(data){
//     console.log(data)
// })

//------------------------------------------------------------------------//


// async_example.js

// Example 1: Using Promises

// function asyncOperationWithPromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = true; // Simulate a successful operation
//         if (success) {
//           resolve('Async operation completed successfully!');
//         } else {
//           reject(new Error('Async operation failed!'));
//         }
//       }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
//     });
//   }
  
//   asyncOperationWithPromise()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
  
  
//   // Example 2: Using async/await
  
//   async function asyncOperationWithAsyncAwait() {
//     try {
//       const result = await asyncOperationWithPromise();
//       console.log(result);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  
//   asyncOperationWithAsyncAwait();
  


// async function add(){
//     console.log("Inside function1")
//     let res = await 5*7;
//     // console.log("Inside function2")
//     console.log(res);
//     // console.log("Inside function 3")
// }
// add();
// console.log("Outside function")



// async function hello(){
//     return "Hello....";
// }
// console.log(hello());


// async function hello(){
//     return  await "Hello....";
// }
// //promise chaining
// hello()
// .then(x => {
//     console.log(x);
//     return x+1;
// })
// .then(p => {
//     console.log(p);
//     return p+2
// })
// .then(m => {
//     console.log(m);
// })


// function calc(a,b){
//     return new Promise(function (x,y){
//         setTimeout(function() {
//             x(a+b);
//         }, 1000)
//     })
// }

// const Add = async function(){
//     console.log("Hello")
//     var res1 = await calc(5,6);
//     var res2 = await calc(res1,7);
//     return await calc(res2,8)
// }

// Add().then( x=>{
//     console.log(x)
// })




// async function f(){
//     return 1;
// }
// f().then(x => console.log(x)).then(()=>alert("hello"))
// console.log(f());


// setTimeout(() => {
//     console.log(3);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(1);
//         }, 1000);
//     }, 1000);
// }, 1000);