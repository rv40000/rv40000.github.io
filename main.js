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
}
var requestURL = stuli.json
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var stul = request.response;
  populateHeader(stul);
  showParts(stul);
}
function populateHeader(jsonObj) {
  var myH3 = document.createElement('h3');
  myH1.textContent = jsonObj['stul'];
  header.appendChild(myH3);

  var myPara = document.createElement('p');
  myPara.textContent = 'position: ' + jsonObj['position'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}
function stul(jsonObj) {
  var parts = jsonObj['parts'];
      
  for (var i = 0; i < parts.length; i++) {
    var myArticle = document.createElement('article');
    var myH4 = document.createElement('h4');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH4.textContent = parts[i].name;
    myPara1.textContent = 'number: ' + parts[i].number;
    myPara2.textContent = 'size: ' + parts[i].age;
    myPara3.textContent = 'options:';
        
    var options = parts[i].options;
    for (var j = 0; j < options.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = options[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH4);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
