// MongoDB 연결 담당 파일

const mongoose = require('mongoose');
const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', false);
    }

    //MongoDB 연결
    mongoose.connect('mongodb://localhost:27017', {
        dbName: 'minihomeP',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.log('MongoDB connection error:', err);
    });

    const TestModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
    TestModel.create({ name: 'Sample' });
};

mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect();
});

module.exports = connect;


