const card = document.getElementsByClassName("card")[0];

card.addEventListener('click',()=>{
    color = color == "blue" ? "Red" : "Blue"
    card.style.backgroundColor = `${color}`;
})