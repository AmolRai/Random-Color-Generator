function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexColor = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = hexColor;
    document.getElementById("color-code").innerText = hexColor;
    
    // copy the hexcolor to clipboard
    navigator.clipboard.writeText(hexColor);
}

document.getElementById("btn").addEventListener("click", getColor);

getColor();