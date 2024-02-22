// Promose 

let stepOne = () => {
    return new Promise((resolve, reject)=>{
        if(flase){
            console.log("I am step 1");
            resolve();
        }
        else{
            reject();
        }
    });
}

let stepTwo = () => {
    console.log("I am step 2");
}
let stepThree = () => {
    console.log("I am step 3");
}
stepOne()
.then(()=>{
    console.log("Success");
    stepTwo();
})
.then(()=>{
    stepThree();
})
.catch(()=>{
    console.log("Error");
});
// =============================================================================================================


// let stepOne = () =>{
//     return new Promise((resolve,reject)=>{
//         if(true){
//             console.log("Step 1 done");
           
//         }
//         else{
//             reject("Error in step 1");
//         }
//     })
// }


// let stepTwo = () =>{
//     return new Promise((resolve,reject)=>{
//         if(false){
//             console.log("Step 2 done");
//             resolve();
//         }
//         else{
//             reject("Error in step 2");
//         }
//     });
// }

// async function working(){
//     try{
//         await stepOne();
//         await stepTwo();
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// working();



// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   p.catch(error => console.log(error.message))
//   p.catch(error => console.log(error.message))


// Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
// })



// function step1(value, error){
//     return new Promise((resolve, reject)=>{
//         if(!error){
//             resolve(value + 10);
//         }
//         else{
//             reject("Something went wrong");
//         }
//     });
// }
// function step2(value, error){
//     return new Promise((resolve, reject)=>{
//         if(!error){
//             resolve(value + 10);
//         }
//         else{
//             reject("Something went wrong");
//         }
//     });
// }

// function step3(value, error){
//     return new Promise((resolve, reject)=>{
//         if(!error){
//             resolve(value + 10);
//         }
//         else{
//             reject("Something went wrong");
//         }
//     });
// }


// step1(70, false)
// .then((result1)=> step2(result1, false))
// .then((result2)=> step3(result2, false))
// .then((result3)=> console.log(result3))
// .catch((error)=> console.log(error));