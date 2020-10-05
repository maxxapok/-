// Задача 1
// Тебе нужно создать запрос на получение всех покемонов и вывести на экран их кол-во
// Если возникнет ошибка - вывести текст ошибки, что при получении всех покемонов возникла ошибкадекл

fetch('http://pokemon---api.herokuapp.com/api/v1/pokemon')
  .then(response => response.json())
  .then(data => console.log(data.length))
  .catch(error =>
    console.log(error.message));

  // Старообрядчество

// fetch('http://pokemon---api.herokuapp.com/api/v1/pokemon')
//   .then(function getA(response) {
//   	return response.json();
//   })
//   .then(function getB(data) {
//   	console.log(data.length);
//   })
//   .catch(function getC(error) {
//     console.log(error.message);
// 
// Задача 2
// сделать несколько запросов друг за другом, для значений офсета 
// с 0, 10 и 20. На экран нужно вывести список со всеми покемонами 
// из трёх запросов. Использовать замыкание на внешний список 
// (и добавлять туда покемонов) нельзя. Нужно выполнить сразу несколько запросов, 
// получить их промисы (фетч возвращает промис) и зарезолвить их при помощи функции Promise.all()
