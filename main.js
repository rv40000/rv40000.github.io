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
function sendRequest(request, fn)
{
    // тут создаётся объект - запрос в интернеты
    let xhr = new XMLHttpRequest();
    // тут говорится что мы хотим сделать GET для указанного ресурса,
    // но вообще другие команды тоже такое могут
    xhr.open("GET", request);
    // послали запрос
    xhr.send();

    xhr.onload = function()
    {
        // если статус не 200, то косяк
        // 200 - это стандартный статус когда всё чики-пуки
        if (xhr.status != 200)
        {
            console.error("Ошибка, HTTP статус:", xhr.status);
            if (xhr.status === 500)
            {
                console.error(xhr.response);
            }
            // передаём в функцию обработчик пустую фигню
            fn(null);
        }
        else // ну а если 200, то всё чики-пуки
        {
            // передаём в функцию обработчик результат запроса
            fn(xhr.response);
        }
    };

    xhr.onerror = function()
    {
        console.error("Не удалоооссссссс отправить запрос");
    };
}

function getInfo()
{
    let search = "american gods";
    // зовём функцию отправки запроса и говорим ей, какая функция будет
    // обрабатывать результат
    // также, ясен пень, указываем, какой ресурс запрашиваем
    sendRequest(`https://api.tvmaze.com/search/shows?q=${search}`, function(rez)
    {
        if (rez === null) { console.error("Запрос обломался, пустой результат"); }
        else { console.log(rez); }
    });
var requestURL = 'https://rv40000.github.io/stuli.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var stul = request.response;
  showStuff(stul);
}
function showStuff(jsonObj) {
  document.getElementById("stuly-result").textContent = jsonObj.название;  
   var properties = jsonObj['stuff'];
  var myPic = document.querySelector('img');
      var myScr = myPic.getAttribute('src');
     if(document.getElementById("stuly-result").textContent === 'стул') {
      myPic.setAttribute ('src','shit.jpg');
    } else if (document.getElementById("stuly-result").textContent === 'кресло')
      myPic.setAttribute ('src','1522765869310.jpg');
    } else {
      myPic.setAttribute ('src', null);
    }
  for (var i = 1; i < stuff.length; i++) {
    var myDiv = document.createElement('div');
    var Property1 = document.createElement('p');
    var Property2 = document.createElement('p');
    var Property3 = document.createElement('p');
    var Property4 = document.createElement('p');
    var Property5 = document.createElement('p');
    var Property6 = document.createElement('p');
    var myList = document.createElement('ul');
   Property1.textContent = 'производитель: ' + stuff[i].производитель;
    Property2.textContent = 'цена: ' + stuff[i].цена;
    Property3.textContent = 'состояние: ' + stuff[i].состояние;
     Property4.textContent = 'вес: ' + stuff[i].вес;
    Property5.textContent = 'количество на складе: ' + stuff[i].количество;
    Property6.textContent = 'материалы:';
        
    var material = stuff[i].материалы;
    for (var j = 0; j < material.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = material[j];
      myList.appendChild(listItem);
    }

    myDiv.appendChild(myPic);
    myDiv.appendChild(myPara1);
    myDiv.appendChild(myPara2);
    myDiv.appendChild(myPara3);
    myDiv.appendChild(myPara4);
    myDiv.appendChild(myPara5);
    myDiv.appendChild(myPara6);
    myDiv.appendChild(myList);
document.getElementById("tupoiOsel").appendChild(myDiv);
  }
}
}
