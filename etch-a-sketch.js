let dimensions = prompt("How many rows and columns should the grid have?")
let container = document.getElementById('container')

function colorRandomizer() {
  return Math.floor(Math.random() * 255)
}

for (let i = 0; i < dimensions; i++) {
  for (let n = 0; n < dimensions; n++) {
    container.innerHTML += `<div class="grid-box"></div>`
  }
}

let gridBoxes = document.getElementsByClassName('grid-box')
for (box of gridBoxes) {
  box.style.width = `${720 / dimensions}px`
  box.style.height = `${720 / dimensions}px`
  box.addEventListener('mouseover', function () {
    console.log(colorRandomizer())
    this.style.background = `rgba(${colorRandomizer()}, ${colorRandomizer()}, ${colorRandomizer()}, ${Math.random()})`
  })
}