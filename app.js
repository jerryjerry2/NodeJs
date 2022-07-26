const express = require('express');
const app = express();
// req => middleware => res

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.get('/about', (req, res) => {
    res.send('About');
})




app.listen(5000, () => {
    console.log('Server running on port 5000');
})