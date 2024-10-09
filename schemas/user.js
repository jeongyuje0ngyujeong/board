//User 스키마 설계 담당 파일
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// 게시판의 하위 문서 스키마 (제목과 내용)
const boardSchema = new mongoose.Schema({
    title: String,
    contents: String,
    // postDate: { type: Date, default: Date.now }
});

// 방명록의 하위 문서 스키마 (방문자와 내용)
const visitorBookSchema = new mongoose.Schema({
    visitor: String,
    contents: String,
    // date: { type: Date, default: Date.now }
});

// 사용자 스키마 (유저 정보 및 하위 문서 포함)
const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: String,
    bio: String,
    boards: [boardSchema],  // 게시물 배열 (하위 문서)
    visitorBook: [visitorBookSchema]  // 방명록 배열 (하위 문서)
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) 
        return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//사용자가 입력한 비밀번호와 데이터베이스에 저장된 암호화된 비밀번호를 비교
userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// 몽구스 모델 생성
const User = mongoose.model('User', userSchema);
module.exports = User;
