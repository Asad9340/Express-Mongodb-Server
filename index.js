const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
  res.send('Hello there ,This is my first server project run 1');
})
app.get('/data', (req, res) => {
  res.send('Hello there ,This is my first server  projects run 2');
})

app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
})