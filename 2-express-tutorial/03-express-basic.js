const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1> This is Home page</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1> About us</h1>')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1> 404 Page Not Found</h1>');
})


app.listen(3000, () => {
  console.log('Server running on port 3000');
});

//app.get
//app.post
//app.put
//app.delete
//app.all 
//app.use
//app.listen

