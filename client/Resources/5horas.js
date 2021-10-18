let myHeaders = new Headers();
myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:5000/api');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors'
};

let myRequest = new Request('http://localhost:5000/api');

a = fetch(myRequest, myInit)
.then(response => response.json())
.then(data => console.log(data))
.catch(console.error);