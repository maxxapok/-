// Задача 1
// Тебе нужно создать запрос на получение всех покемонов и вывести на экран их кол-во
// Если возникнет ошибка - вывести текст ошибки, что при получении всех покемонов возникла ошибка

fetch('http://pokemon---api.herokuapp.com/api/v1/pokemon')
  .then(response => response.json())
  .then(data => console.log(data.length))
  .catch(error =>
    console.log(error.message));