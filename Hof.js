// function func1(){
//     return function(){
//         console.log('Hi');
//     }
// }
// const fn = func1();
// fn()


// function greeting(){
//     console.log('Hi');
// }

// setInterval(greeting,1000)
// setTimeout(greeting, 3000);
// console.log("This message shows first")



// function greet(morning){
//     return morning();
// }

// greet(()=>{
//     console.log("Good Morning")
// })

// function greet(){
//     return function(){
//         console.log("Hello")
//     }
// }
// let function1 = greet();
// function1();



// setTimeout(()=>{
//     console.log("I am a function")
// }, 2000);
// console.log("I got printed first")



// setInterval(() => {
//     console.log("I am a function")
// }, 2000);
// console.log("I got printed first")





// let stars = '*';
// for (let i = 0; i < 4; i++) {
//     if(i==0){
//         console.log(stars)
//     }
//     else{
//     stars = stars + " * ";
//     console.log(stars);
//     }
// }

// function first(fun){
//     fun()
// }
// function second(){
//     console.log("This is second function");
// }
// first(second)


// function step1(charan){
//     console.log("I am step1");
//     charan()
// }

// function step2(){
//     console.log("I am step2");
// }
// step1(step2)



function test(){
    console.log("Hi")
}
setInterval(test,2000)
