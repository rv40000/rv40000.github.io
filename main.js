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
            for (var k = 1; k < kychaMebeli.length; k++)
            {
                console.log("Инфа по шняге:");
                console.log(kychaMebeli[k].производитель);
                console.log('цена: ' + kychaMebeli[k].цена);
                console.log('состояние: ' + kychaMebeli[k].состояние);
                console.log('вес: ' + kychaMebeli[k].вес);
                console.log('количество на складе: ' + kychaMebeli[k].количество);
                
                let materials = [];
                for (var j = 0; j < kychaMebeli[k].материалы.length; j++)
                {
                    materials.push(kychaMebeli[k].материалы[j]);
                }
                console.log('материалы:', materials);
            }
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
