// With let and const it will get an error but with var it will show an undefined
// console.log(value);

// var value = "My data"


// ----------------------------------------
// Calling 
add(10,20);

// Declaration
function add(a,b){
    console.log(a+b);
}
// ---------------------------
// Expression
// let add = function(a,b){
//     console.log(a+b);
// }

// ----------------------------------
// Arrow
// let add = (a,b) => {
//     console.log(a+b);
// }


// function hoistExample() {
//     // a=20;
//     var a;
//     console.log(a);
//     a = 10;
//     console.log(a);
// }
// hoistExample();

// function Add(){
//     var answer = 2
//     console.log(answer)
    
// };
// Add()




// if (true) {
//     function fn() {
//     return 10;
//     }
//     } else {
//     function fn() {
//     return 20;
//     }
//     }
//     console.log(fn());


// y=3;
// console.log(y);
// var y;



// var temp= 'hi';
// function display(){
//     console.log(temp);
//     var temp = 'bye';
// };
// display();




// function a(){console.log('1')}
//     a();
// function a(){console.log('2')}
//     a();