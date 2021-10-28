const fetch = require('node-fetch');
// const body = {a: 1};

async function nodeFetch() {
  const response = await fetch('https://github.com/node-fetch/node-fetch.git');
  console.log('response>>>', response)
  const data = await response.json();
  
  console.log(data);
}

nodeFetch()
