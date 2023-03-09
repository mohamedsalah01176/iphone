let body=document.querySelector("body");
let image=document.querySelector(".content .image img")
console.log(image);



function phone(phone){
    image.src=phone
}

function back(el){
    body.style.background=el;
}