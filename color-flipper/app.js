const colors = ["green", "rgb(133,122,200)", "crimson", "#f15025", "cornflowerblue", "pink", "rgb(246, 243, 62)", "rgba(148, 62, 246, 0.787)"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}