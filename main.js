var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  let userName = prompt("ты кто?", '');

if (userName == 'яетиг')

  let pass = prompt('напиши qwerty?', '');

  if (pass == 'qwerty') {
    alert( 'Ты осёл' );
    myHeading.textContent = 'На странице осёл';
  } else if (pass == '' || pass == null) {
    alert( 'пиши реще' );
  } else {
    alert( 'тупой шоле?' );
  }

} else if (userName == '' || userName == null) {
  alert( 'пиши реще' );
} else {
  alert( "с маленькой, если чо" );
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
