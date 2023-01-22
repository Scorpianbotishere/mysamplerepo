const card = document.getElementsByClassName("card")[0];
let color = card.style.color

card.addEventListener('click',()=>{
    color = "blue"
    card.style.backgroundColor = `${color}`;
})