const express = require('express');
const app = express();

const people = require('./2-express-tutorial/routes/people')
const auth = require('./2-express-tutorial/routes/auth');

app.use(express.static('./2-express-tutorial/methods-public'));
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

//Router
app.use('/api/people', people)
app.use('/login', auth)


app.listen(5000, () => {
    console.log('Server running on port 5000');
})