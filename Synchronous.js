// Synchronous basically means that you can only execute one thing at a time.
// Example:-
console.log("charan");
console.log("katakam");
setTimeout(()=>{
    calculate();
},1000)

console.log("JS Course");
console.log("JS Course");
console.log("JS Course");console.log("JS Course");

function calculate(){
    let sum=0;
    for(let i=0; i<100000000; i++){
        sum+=i;
    }
    console.log(sum);
}


// Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the
// current thing in order move on to next one

// console.log("charan");
// setTimeout(()=>{
//     console.log("katakam")
// },1000);
// console.log("JS Course")