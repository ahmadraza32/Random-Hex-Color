const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
  let hash = '#'

  for(let i=0; i<6; i++){
    hash += hex[generateRandomNumber()]
  }

  console.log(hash);
  document.body.style.backgroundColor = hash
  color.textContent = hash
})

function generateRandomNumber(){
  return Math.floor(Math.random() * hex.length)
}