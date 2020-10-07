// Задача 1
// Тебе нужно создать запрос на получение всех покемонов и вывести на экран их кол-во
// Если возникнет ошибка - вывести текст ошибки, что при получении всех покемонов возникла ошибкадекл

// fetch('http://pokemon---api.herokuapp.com/api/v1/pokemon')
//   .then(response => response.json())
//   .then(data => console.log(data.length))
//   .catch(error =>
//     console.log(error.message));

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

let urls = [
'http://pokemon---api.herokuapp.com/api/v1/pokemon?offset=0',
'http://pokemon---api.herokuapp.com/api/v1/pokemon?offset=10',
'http://pokemon---api.herokuapp.com/api/v1/pokemon?offset=20'
];

const requests = [];
for (let url of urls) {
	const request =fetch(url);
	requests.push(request);

}
	// console.log(requests);

// Нда, конечно с современными методами перебора кода поменьше)) (ниже, стр.48)) 
// Но я переписала на средневековый лад (стр.36)
// Map (стр.59) переписать не получилось, но я хочу чтоб понимать, помоги плз

// let requests = urls.map(url => fetch(url));


Promise.all(requests)
.then(responses => {
    // for(let response of responses) {
    //   console.log(`${response.url}: ${response.status}`); 
    // }
    return responses;
})

.then(responses => Promise.all(responses.map(r => r.json())))
.then(responses => {
	for(let response of responses) {
      // console.log(response);
      for (let item of response) {
      	console.log(item.name);
      } 
  }
}
)



