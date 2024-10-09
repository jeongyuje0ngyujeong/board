const { MongoClient } = require('mongodb');

// MongoDB URI 설정 (로컬 MongoDB 사용 시)
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function connectDB() {
  try {
    // MongoDB 연결
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('board'); // 사용할 데이터베이스 지정
    const collection = db.collection('board_user'); // 사용할 컬렉션 지정

    // 데이터 삽입 예시
    const result = await collection.insertOne({ name: 'John', age: 30 });
    console.log('Document inserted:', result);

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    await client.close(); // 연결 종료
  }
}

connectDB();
