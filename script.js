
let contactButton = document.querySelector("button");

function contactMe(){
    let name=prompt("What is your name?");
    let email=prompt("What is your email address?")
    let h2=document.querySelector("h2");
    h2.innerHTML=`Hello ${name}, we will send a welcome email to your address: ${email}!`
}

contactButton.addEventListener("click", contactMe);