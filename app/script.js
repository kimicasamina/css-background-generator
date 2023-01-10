let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
let body = document.body
let bgText = document.querySelector('.subtitle')
let gradientDiv = document.querySelector('.gradient')
let direction = 'to right'
let gradient = 'linear'
let copyBtn = document.querySelector('.copy-btn')
let gradientBtns = document.querySelectorAll('.gradient-btn')
let alertBox = document.querySelector('.alert-box')
let randColor = document.querySelector('.random-color-btn')
// EVENTS 
color1.addEventListener('input', updateBgColor)
color2.addEventListener('input', updateBgColor)
gradientDiv.addEventListener('click', setGradient)
copyBtn.addEventListener('click', copyCodeToClipboard)
body.addEventListener('change', updateBtnsColor)
randColor.addEventListener('click', randomizeBgColor)

// FUNCTIONS
function updateBgColor(){
  body.style.background = `${gradient}-gradient(${direction} ,${color1.value}, ${color2.value})`
  bgText.innerText = `background: ${body.style.background};`
}

function updateBtnsColor(){
  for (let btn of gradientBtns){
    if (btn.parentElement.classList.contains('linear')){
      direction = btn.value 
      gradient = 'linear'
      btn.style.background = `${gradient}-gradient(${direction} ,${color1.value}, ${color2.value})`
    }
    else if (btn.parentElement.classList.contains('radial')){
      direction = btn.value 
      gradient = 'radial'
      btn.style.background = `${gradient}-gradient(${direction} ,${color1.value}, ${color2.value})`
    }
  }
}

function setGradient(e){
  if (e.target.classList.contains('gradient-btn')){
    if (e.target.parentElement.classList.contains('linear')){
      gradient = 'linear'
      direction = e.target.value
    } else if (e.target.parentElement.classList.contains('radial')){
      gradient = 'radial'
      direction = e.target.value
    }
  } 

  updateBgColor()
}

function randomizeBgColor(){
  color1.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  color2.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  body.style.background = `${gradient}-gradient(${direction},${color1.value}, ${color2.value})`
  updateBgColor()
  updateBtnsColor()
}

function copyCodeToClipboard(){
  // add an active class to alert-box
  alertBox.classList.toggle('active')
  setInterval(function(){
    alertBox.classList.remove('active')
  }, 1500)


  let cssCodeHolder = bgText.innerText 
  let elem = document.createElement('textarea')
  document.body.appendChild(elem)
  elem.value = cssCodeHolder
  elem.select()
  document.execCommand('copy')
  document.body.removeChild(elem)
}
