import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ status: 'OK' }));

app.listen(3333, () => {
  console.log('Started the server 👏');
});
