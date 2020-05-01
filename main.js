var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var userName = prompt("ты кто?", '');
if (userName == 'яетиг'){
 var pass = prompt('напиши qwerty', '');
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
  alert( "порюзке с мелкой" );
}
}
myButton.onclick = function() {
  setUserName();
}
function getInfo()
{
var requestURL = 'https://rv40000.github.io/stuli.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var stul = request.response;
  showStuff(stul);
                            }
}
function showStuff(jsonObj)
{
    // схороним поисковый запрос в переменную
    let searchQuery = document.getElementById("req").value;

    let kychaMebeli = jsonObj['stuff'];

    for (let i = 0; i < kychaMebeli.length; i++)
    {
        if (kychaMebeli[i].название === searchQuery)
        {
            console.log("Ололо, эта шняга подходит");
            console.log("Инфа по шняге:");
            console.log(kychaMebeli[i].производитель);
            console.log('цена: ' + kychaMebeli[i].цена);
            console.log('состояние: ' + kychaMebeli[i].состояние);
            console.log('вес: ' + kychaMebeli[i].вес);
            console.log('количество на складе: ' + kychaMebeli[i].количество);
            console.log('материалы:',  kychaMebeli[i].материалы.основа,  kychaMebeli[k].материалы.фурнитура);
        }
        else {
            console.log(
                "Не подходит эта шняга, потому что "
                    .concat(
                        kychaMebeli[i].название,
                        " - это не ",
                        searchQuery
                    )
            );
        }
    }
}
