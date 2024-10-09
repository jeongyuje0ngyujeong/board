const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const connect = require('./schemas');

const app = express()
app.set('port', process.env.PORT || 5000);


app.get('/', function (req, res) {
    res.send('Hello World !!')
})

app.get('/dog', function (req, res) {
    res.send({'sound': '멍멍'})
})

app.get('/cat', function (req, res) {
    res.send({'sound': '야옹'})
})

//url로 들어온 id값을 받아서 변수로 저장 후 q의 key(id)의 value(입력된 값)를 response
app.get ('/user/:id', function (req, res) {
    const q = req.parms
    res.json({'user id': q.id})
})

//쿼리를 변수로 받아서 저장
app.get('/user/:id', function (req, res) {
    const q = req.query //query로 받을 땐 req.query로 변수를 받음
    console.log(q) // ?q=yuje0ngyu&name=jeong&age=20 로 url에 쿼리를 입력했을 때, 
                   // { q: 'yuje0ngyu', name: 'jeong', age: '20' }으로 들어옴
    res.json({'user id': q.name}) //name으로 들어온 'jeong'이 화면에 띄워짐
})

//POST일 땐 .body 같은 부분으로 입력됨


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})