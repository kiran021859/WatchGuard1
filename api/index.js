require('dotenv').config();
const express = require('express');
var cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const connectDB = require('./db/connect');
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 4000
const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET;
//import user schema
const User = require('./models/users');

app.use(cors({credentials:true, origin:'http://localhost:5173'}));
app.use(express.json());



app.post('/register', async (req, res) => {
    
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, salt),
        })
    } catch (e) {
        console.log(e);
        res.status(400).json(e)
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username})
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if(passOk){
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) {
                console.error(err);
                res.status(500).json('Token generation failed'); // Token generation failed
            } else {
                res.cookie('token', token).json('ok');
            }
        });
    } else {
        res.status(400).json('wrong cridentials')
    }
    
});



const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    } catch (error) {
        console.log(error);
    }
}

start()


//mongodb+srv://kiran:j0qrIt5sYIbSL6Ub@watchguard.toiznon.mongodb.net/?retryWrites=true&w=majority
//j0qrIt5sYIbSL6Ub