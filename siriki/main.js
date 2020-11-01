// tbs - Table Body Siriki
var tbs = document.getElementById("siriki");
console.log("вачопеке");
const response = fetch("/siriki/siriki.json", { method: "GET" })
    .then(
        response => {
            if (!response.ok) {
                throw new Error(`Ошибка при выполнении запроса: ${response.status}`);
            }
            return response.json();
        }
    )
    .then(
      data => {
          //console.log(data);
          data.forEach(sirik => {
              console.log(sirik);
          });
      }
  )
    .catch(
        error => {
            console.error(error.message);
        }
    )
    .finally(
        function()
        {
            // тут ещё чонить будет
        }
    );