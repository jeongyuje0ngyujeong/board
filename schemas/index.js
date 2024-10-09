// MongoDB 연결 담당 파일

const mongoose = require('mongoose');
const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }

    mongoose.connect('mongodb://jeongyuje0ngyujeong:bbujeong@localhost:27017/admin', {
        dbName: 'minihomeP',
        useNewUrlParser: true,
    }).then(() => {
        console.log("몽고디비 연결 성공!");
    }).catch((err) => {
        console.error("몽고디비 연결 실패", err);
    });
};

mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect();
});

module.exports = connect;


