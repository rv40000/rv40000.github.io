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
document.getElementById("tupoiOsel").innerHTML = "";
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
    let myTr = document.createElement('tr');
    for (let i = 0; i < kychaMebeli.length; i++)
    {
          if (kychaMebeli[i].название === searchQuery)
        {
            document.getElementById("stuly-result").textContent = kychaMebeli[i].название;
            let Property = document.createElement('tr');
            let Property1 = document.createElement('tr');
            let Property2 = document.createElement('tr');  
            Property.value = kychaMebeli[i].фото;
            Property1.textContent = 'производитель: ' + kychaMebeli[i].производитель;
            Property2.textContent = 'цена: ' + kychaMebeli[i].цена;
            myTr.appendChild(Property);
            myTr.appendChild(Property1);
            myTr.appendChild(Property2);
            console.log("Ололо, эта шняга подходит");
            console.log("Инфа по шняге:");
            console.log('производитель: ' + kychaMebeli[i].производитель);
            console.log('цена: ' + kychaMebeli[i].цена);
            console.log('тупая братва учит как сто куч, сам придумал свою вонючую консоль и всрал весь код');
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
     document.getElementById("meb").appendChild(myTr);
 }
