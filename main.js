var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Вводи имя');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ты осёл, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ты осёл, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
function makeDonkey()
{
  var cartos = document.querySelector('img');
  var mySrc = cartos.getAttribute('src');
    if(mySrc === '1522765869310.jpg') {
      cartos.setAttribute ('src','shit.jpg');
    } else {
      cartos.setAttribute ('src','1522765869310.jpg');
    }
}
