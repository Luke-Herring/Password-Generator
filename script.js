var slider = document.getElementById('Range')
var length = document.getElementById('Number')
var generate = document.getElementById('Generate')
var password = document.getElementById('Password')
var pass = document.getElementById('password')
var pin = document.getElementById('pin')
var symbol = document.getElementById('special')
var number = document.getElementById('num')
var lower = document.getElementById('lower')
var upper = document.getElementById('upper')
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '0123456789'
var symbols = '!@#$%^&*()_+{}[]|:;<>?/'
length.innerHTML = slider.value

slider.oninput = function () {
  length.innerHTML = this.value
}

// Pasword Generator
generate.onclick = function () {
  var result = ''
  var length = slider.value
  var password = ''
  var possible = ''
  if (lower.checked) {
    possible += lowercase
  }
  if (upper.checked) {
    possible += uppercase
  }
  if (number.checked) {
    possible += numbers
  }
  if (symbol.checked) {
    possible += symbols
  }
  if (pin.checked) {
    possible = numbers
  }
  for (var i = 0; i < length; i++) {
    password += possible.charAt(Math.random() * possible.length)
  }
  password.innerHTML = password
  document.getElementById('view').innerHTML = password
}

///function that copies password to clipboard
function Copy() {
  var CopyText = document.getElementById('view')
  window.getSelection().selectAllChildren(CopyText)
  document.execCommand('Copy')
}

//onload reset all checkboxes and password field
window.onload = function () {
  lower.checked = false
  upper.checked = false
  number.checked = false
  symbol.checked = false
  pass.checked = true
  password.innerHTML = ''
  pin.checked = false
}
