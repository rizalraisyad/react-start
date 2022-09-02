export const getJoke = async () =>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
   const jokes = await  fetch("https://v2.jokeapi.dev/joke/Any", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);

  return jokes;
}