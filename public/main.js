let d6result = 0
let d8result = 0
let d10result = 0
let d20result = 0

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Roll the Dice!'
  }
}

const rollSixSided = () => {
  d6result = Math.ceil(Math.random() * 6) // make computer gen a number on a die
  console.log('the computer rolled ' + d6result)
  document.querySelector('.basic-roll').textContent = d6result
  // make that number output
}

const rollEightSided = () => {
  d8result = Math.ceil(Math.random() * 8)
  console.log('great axes do d8 damage ' + d8result)
  document.querySelector('.eight-roll').textContent = d8result
}
const rollTenSided = () => {
  d10result = Math.ceil(Math.random() * 10) // make computer gen a d10
  console.log('computer rolled ' + d10result)
  document.querySelector('.percentage-roll').textContent = d10result
}
const rollTwentySided = () => {
  d20result = Math.ceil(Math.random() * 20)
  console.log('computer rolled initive, it is ' + d20result)
  document.querySelector('.major-roll').textContent = d20result
}
document.addEventListener('DOMContentLoaded', main)
document.querySelector('.d6').addEventListener('click', rollSixSided)
document.querySelector('.d8').addEventListener('click', rollEightSided)
document.querySelector('.d10').addEventListener('click', rollTenSided)
document.querySelector('.d20').addEventListener('click', rollTwentySided)
