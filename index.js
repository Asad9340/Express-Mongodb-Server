const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
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
});

app.post('/users', (req, res) => {
  console.log('Post request hitting');
  console.log(req.body);
  if (!req.body) {
    return res
      .status(400)
      .json({ error: 'Request body is missing or invalid' });
  }
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});


app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
});
