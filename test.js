
// let url = "https://fakestoreapi.com/products";
// let total = 5
// function charan(){
//     fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         for(let i=0; i<total; i++){
//             const product = data[i].image;
//             console.log(product)
//         }
//         // console.log(data);
//     })
// }      
// charan()


// const arr = [1,2,3,4,5,6,7,8];

// let c = arr.filter((num) =>
//     num % 2 === 0
    
// );
// console.log(c)


function charan(){
    let total = 5

    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        for(let i=0; i<total; i++){
            const product = data[i].price;
            console.log(product)
        }
        // console.log(data);
    })
}      
charan()

