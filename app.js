const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const cors = require('cors');

const passport = require('passport');
const passportConfig = require('./passport');
const authRouter = require('./routes/auth');

const User = require('../schemas/user'); 

const app = express();
passportConfig();

const port = 5000;

app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
   session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
         httpOnly: true,
         secure: false,
      },
   }),
);

//req.session 객체는 express-session에서 생성하는 것이므로 
//passport 미들웨어는 express-session미들웨어보다 뒤에 연결해야 함
app.use(passport.initialize());
app.use(passport.session());

// //url로 들어온 id값을 받아서 변수로 저장 후 q의 key(id)의 value(입력된 값)를 response
// app.get ('/user/:id', function (req, res) {
//     const q = req.parms
//     res.json({'user id': q.id})
// })

// //쿼리를 변수로 받아서 저장
// app.get('/user/:id', function (req, res) {
//     const q = req.query //query로 받을 땐 req.query로 변수를 받음
//     console.log(q) // ?q=yuje0ngyu&name=jeong&age=20 로 url에 쿼리를 입력했을 때, 
//                    // { q: 'yuje0ngyu', name: 'jeong', age: '20' }으로 들어옴
//     res.json({'user id': q.name}) //name으로 들어온 'jeong'이 화면에 띄워짐
// })

// //POST일 땐 .body 같은 부분으로 입력됨

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