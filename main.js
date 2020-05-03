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
    let searchQuery = document.getElementById("req").value;

    let kychaMebeli = jsonObj['stuff'];
    let myDiv = document.createElement('div');
    for (let i = 0; i < kychaMebeli.length; i++)
    {
          if (kychaMebeli[i].название === searchQuery)
        {
            let Property1 = document.createElement('p');
            let Property2 = document.createElement('p');  
            Property1.textContent = 'производитель: ' + kychaMebeli[i].производитель;
            Property2.textContent = 'цена: ' + kychaMebeli[i].цена;
            myDiv.appendChild(Property1);
            myDiv.appendChild(Property2);
            console.log("Ололо, эта шняга подходит");
            console.log("Инфа по шняге:");
            console.log('производитель: ' + kychaMebeli[i].производитель);
            console.log('цена: ' + kychaMebeli[i].цена);
            console.log('состояние: ' + kychaMebeli[i].состояние);
            console.log('вес: ' + kychaMebeli[i].вес);
            console.log('количество на складе: ' + kychaMebeli[i].количество);
            console.log('материалы:', 'основа - ' + kychaMebeli[i].материалы.основа, 'фурнитура - ' + kychaMebeli[i].материалы.фурнитура);
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
   document.getElementById("stuly-result").textContent = kychaMebeli[i].название; 
   document.getElementById("tupoiOsel").appendChild(myDiv);
 }
