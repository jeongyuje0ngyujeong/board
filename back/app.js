// require('dotenv').config(); 

// const express = require('express');
// const passport = require('passport');
// const authRoutes = require('./routes/auth');
// const protectedRoutes = require('./routes/protected');
// const postRouter = require('./routes/post');
// const homeRouter = require('./routes/home');
// const connect = require('./models/index');  // MongoDB 연결 함수 가져오기
// require('./config/passport')(passport);  

// const cors = require('cors');

// const app = express();
// const port = 5001;

// app.use(cors());
// app.use(express.json()); 
// app.use(passport.initialize());

// // MongoDB 연결
// connect();  // MongoDB 연결 함수 호출

// // 라우터 설정
// app.use('/auth', authRoutes);  
// app.use('/post', postRouter);
// app.use('/home', homeRouter);
// app.use('/protected', protectedRoutes);

// app.listen(port, '0.0.0.0', () => {
//     console.log(`Server running on http://localhost:${port}`);
// });


require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const postRouter = require('./routes/post');
// const homeRouter = require('./routes/home');
const connect = require('./models/index');  // MongoDB 연결 함수 가져오기
require('./config/passport')(passport);  

const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const cors = require('cors');

const User = require('./models/user'); 

const app = express();
const port = 5001;

app.use(cors());

// JSON 파싱을 위한 미들웨어
app.use(express.json()); 
app.use(passport.initialize());

// MongoDB 연결
connect();  // MongoDB 연결 함수 호출

// //MongoDB 연결
// mongoose.connect(process.env.DB_URL)
//     .then(() => console.log('MongoDB connected'))
//     .catch((err) => console.log('MongoDB connection error:', err));

// 라우터 설정
app.use('/auth', authRoutes);  // 회원가입, 로그인 라우터
app.use('/post', postRouter);
// app.use('/home', homeRouter);
app.use('/protected', protectedRoutes);



app.listen(port, '0.0.0.0', () => {
    console.log('Server running on http://localhost:${port}');
});