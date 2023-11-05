const express = require('express');
var cors = require('cors')
const app = express();


app.use(cors());

app.post('/register', (req, res) => {
    console.log('test ok');
    res.json('test ok3');
})

app.listen(4000)
