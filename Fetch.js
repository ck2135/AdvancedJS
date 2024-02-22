

let url = "https://jsonplaceholder.typicode.com/users";
let total = 5
function charan(){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        for(let i=0; i<total; i++){
            const product = data[i];
            console.log(product)
        }
        // console.log(data);
    })
}      
charan()
// fetch(url, {
//     method: "post",
//     body: JSON.stringify({
//         name: "xyz",
//         email: "xyz@gmail.com"
//     }),
//     headers:{
//         "content-type" : "application/json"
//     }
// })
