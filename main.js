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
function showStuff(jsonObj)
{
    // схороним поисковый запрос в переменную
    let searchQuery = document.getElementById("req").value;
    
    let kychaMebeli = jsonObj['stuff'];
    
    for (let i = 0; i < kychaMebeli.length; i++)
    {
        if (kychaMebeli[i].название === searchQuery)
        {
            document.getElementById("stuly-result").textContent = kychaMebeli[i].название;
          for (var k = 1; k < kychaMebeli.length; k++) 
          {
            var myDiv = document.createElement('div');
            var Property1 = document.createElement('p');
            var Property2 = document.createElement('p');
            var Property3 = document.createElement('p');
            var Property4 = document.createElement('p');
            var Property5 = document.createElement('p');
            var Property6 = document.createElement('p');
            var myList = document.createElement('ul');
            Property1.textContent = 'производитель: ' + kychaMebeli[k].производитель;
            Property2.textContent = 'цена: ' + kychaMebeli[k].цена;
            Property3.textContent = 'состояние: ' + kychaMebeli[k].состояние;
            Property4.textContent = 'вес: ' + kychaMebeli[k].вес;
            Property5.textContent = 'количество на складе: ' + kychaMebeli[k].количество;
            Property6.textContent = 'материалы:';
          }
    var material = kychaMebeli[i].материалы;
    for (var j = 0; j < material.length; j++) 
    {
      var listItem = document.createElement('li');
      listItem.textContent = material[j];
      myList.appendChild(listItem);
    }
    myDiv.appendChild(Property1);
    myDiv.appendChild(Property2);
    myDiv.appendChild(Property3);
    myDiv.appendChild(Property4);
    myDiv.appendChild(Property5);
    myDiv.appendChild(Property6);
    myDiv.appendChild(myList);
    document.getElementById("tupoiOsel").appendChild(myDiv);
            let myPic = document.getElementById("stulPic");
            if (document.getElementById("stuly-result").textContent === 'стул')
            {
                myPic.setAttribute('src', 'shit.jpg');
            }
            else if (document.getElementById("stuly-result").textContent === 'кресло')
            {
                myPic.setAttribute('src', '1522765869310.jpg');
            }
            else
            {
                myPic.setAttribute('src', null);
            }
          myDiv.appendChild(myPic);
        }
        else
        {
            console.log(
                "Не подходит эта шняга, потому что "
                .concat(
                    kychaMebeli[i].название,
                    "это не ",
                    searchQuery
                )
            );
        }
    }
    }
}
