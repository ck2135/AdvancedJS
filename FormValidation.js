
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");

form.addEventListener("submit", (e)=>{
    // e.preventDefault();
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();

    // console.log(nameValue);
    // console.log(emailValue);
    // console.log(phoneValue);
    // console.log(passwordValue);
    if(nameValue == ""){
        e.preventDefault();
        alert("Please provide the name!");
        name.focus();
        return false;
    }

    if(!isNaN(nameValue)){
        e.preventDefault();
        alert("Please provide a valid name!");
        name.focus();
        return false;
    }

    if(emailValue == ""){
        e.preventDefault();
        alert("Please provide an email!");
        email.focus();
        return false;
    }
    
    if(phoneValue == ""){
        e.preventDefault();
        alert("Please provide the phone number!");
        phone.focus();
        return false;
    }

    if(phoneValue.length < 10 || phoneValue.length > 10){
        e.preventDefault();
        alert("Please provide the valid phone number!");
        phone.focus();
        return false;
    }

    if(passwordValue == ""){
        e.preventDefault();
        alert("Please provide password!");
        password.focus();
        return false;
    }

    if(passwordValue.length < 5){
        e.preventDefault();
        alert("Password can't be less than 5 digits!");
        password.focus();
        return false;
    }

    alert("Data submittes successfully")
})
