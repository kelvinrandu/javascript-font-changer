const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const fam = ['Times, serif', 'Times New Roman, serif', 'Palatino, serif', 'Andale Mono, monospace', 'Courier New, monospace', 'Courier, monospace', 'Comic Sans, Comic Sans MS, cursive'];
const btn = document.querySelector(".btn");
const color = document.querySelector(".text");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.style.color = hexColor;
  color.style.fontFamily = fam[getRandomStyle()];
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function getRandomStyle() {
    return Math.floor(Math.random() * fam.length);
  }
  
