fetch('http://pokemon---api.herokuapp.com/api/v1/pokemon')
  .then(response => response.json())
  .then(data => console.log(data.length))
  .catch(error =>
    console.log(error.message));