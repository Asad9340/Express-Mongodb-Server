const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const users = [
  {
    id: 1,
    name: 'Asad',
    email: 'asad@gmail.com',
  },
  {
    id: 2,
    name: 'Emran',
    email: 'emran@gmail.com',
  },
  {
    id: 3,
    name: 'Emon',
    email: 'emon@gmail.com',
  },
];
    app.get('/', (req, res) => {
      res.send('Hello there ,This is my first server project run 1');
    });


app.get('/users', (req, res) => {
  res.send(users);
})


    app.listen(port, () => {
      console.log(`the app is listening on port ${port}`);
    });
