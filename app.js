/*
project requirements:
~ Change the background color By generating RGB color by clicking a button. 
*/

// step - 1. create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener("click", function () {
    const bgColor = generateRGBcolor();
    root.style.backgroundColor = bgColor;
    console.log("clicking");
  });
}

// step - 2. random color generate function
function generateRGBcolor() {
  // rgb(0, 0, 0), rgb(255, 255, 255);
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

// step - 3. collect all necessary reference.

// steps - 4. handle the click event.
