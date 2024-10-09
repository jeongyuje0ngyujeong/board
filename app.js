const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
require('./config/passport')(passport);  

const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const cors = require('cors');

const User = require('../schemas/user'); 
require('dotenv').config(); 

const app = express();
const port = 5000;

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

//MongoDB 연결
mongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true, useUnifiedTopology: true 

}).then(() => {
    console.log('MongoDB connected');

}).catch(err => {
    console.log('MongoDB connection error:', err);
});

// 라우터 설정
app.use('/auth', authRoutes);  // 회원가입, 로그인 라우터
app.use('/protected', protectedRoutes);

app.post('/register', async (req, res) => {
    const { id, password, profilePicture, bio } = req.body;

    try {
        const newUser = new User({
            id,
            password,
            profilePicture,
            bio,
            boards: [],
            visitorBook: []
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});


app.listen(port, '0.0.0.0', () => {
    console.log('Server running on http://localhost:${port}');
});