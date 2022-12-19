const stars = document.querySelectorAll(".star")
let submit = document.querySelector("#submit")
const container = document.querySelector("#first");
const thankYou =  document.querySelector("#thank-you");
let rezultat = document.querySelector("#result")

stars.forEach(star => star.addEventListener("click", () => {  
    rezultat.textContent = `You selected ${star.value} out of 5`
    if (star.focus) {
        submit.addEventListener ("click", () => {           
            thankYou.style.display = "flex"; 
            container.style.display = "none";           
            window.setTimeout( () => {
            thankYou.style.transform = "scale(1)";
            }, 100)
})}
}))
