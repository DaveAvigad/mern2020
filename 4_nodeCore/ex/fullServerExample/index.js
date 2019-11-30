/* NOTE: The folders and files structure are different than the presentation example */
const fs = require('fs');
const http 	= require('http');
const url = require('url');

const ROOT_DIR = '../client/index.html';
const port = 3031;
const data = [{
  id: 1,
  first_name: 'Marvin',
  email: 'mrowler0@liveinternet.ru',
  ip_address: '14.4.205.6',
}, {
  id: 2,
  first_name: 'Alix',
  email: 'ahadeke1@google.de',
  ip_address: '58.237.63.244',
}, {
  id: 3,
  first_name: 'Allyn',
  email: 'abocken2@seesaa.net',
  ip_address: '9.181.130.248',
}];

http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true, false);

  switch (req.method) {
    case 'GET':
      if (urlObj.path === '/getAllData') {
        console.log('/getAllData  called!');
        res.writeHeader(200);
        res.end(JSON.stringify(data));
      } else if (urlObj.pathname === '/getSingleData' && urlObj.query) {
        const id = urlObj.query.id;

        if (!Number.isNaN(id) && data[id]) {
          console.log(`/getSingleData?${id} called!`);
          res.writeHeader(200);
          res.end(JSON.stringify(data[id]));
        } else {
          console.log(`#${id} not exists!`);
          res.writeHeader(404);
          res.write('Bad request');
          res.end();
        }
      } else {
        console.log(`url ${urlObj.path} not exists!`);
        res.writeHeader(404);
        res.write('Bad request');
        res.end();
      }

      break;
    case 'POST':
      if (urlObj.pathname === '/insertNewData') {
        let body = '';

        req.on('data', chunk => {
          body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
          const newDataItem = JSON.parse(body);

          data.push(newDataItem);
          console.log(body);
          res.end('ok');
        });
      } else {
        console.log(`url ${urlObj.path} not exist!`);
        res.writeHeader(404);
        res.write('Bad request');
        res.end();
      }

      break;
  }
}).listen(port);
console.log(`listening on port ${port}`);
