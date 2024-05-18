let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let div = document.querySelector("div");
    let newColor = getRandomColor();
    div.style.backgroundColor = newColor;

    let h1 = document.querySelector("h1");
    h1.innerText = newColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;

    let color = `rgb(${red} , ${green}, ${blue})`;
    return color;
}