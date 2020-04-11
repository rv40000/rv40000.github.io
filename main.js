function makeDonkey()
{
  var cartos = document.querySelector('img');
cartos.onclick = function() {
  var mySrc = cartos.getAttribute('src');
    if(mySrc === '1522765869310.jpg') {
      cartos.setAttribute ('src','shit.jpg');
    } else {
      cartos.setAttribute ('src','1522765869310.jpg');
}


