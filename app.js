const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
  console.log('btn click');
  document.body.style.backgroundColor = colors[generateRandomNumber()]
  color.textContent = colors[generateRandomNumber()]
})

function generateRandomNumber(){
  return Math.floor(Math.random() * colors.length )
}