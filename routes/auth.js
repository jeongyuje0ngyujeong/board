
const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

// 회원가입
router.post('/register', async (req, res) => {
    const { id, password } = req.body;

    try {
        const newUser = new User({ 
            id, 
            password,
        
            profilePicture: '',
            bio: '',
            boards: [],
            visitorBook: []
        });

        await newUser.save();
        return res.json({ result: 'success', message: '회원가입 성공!'});

    } catch (error) {
        res.status(500).json({ result: 'failure', message: '서버 오류 발생' });
    }
});

// 로그인
router.post('/login', async (req, res) => {
    const { id, password } = req.body;

    try {
        // 사용자 확인
        const user = await User.findOne({ id });

        // id가 존재하지 않을 때
        if (!user) {
            return res.json({ result: 'failure', message: '존재하지 않는 아이디입니다.' });
        }
        // 비밀번호 확인        
        const isMatch = await user.comparePassword(password);

        // 비밀번호가 존재하지 않을 때
        if (!isMatch) {
            return res.json({ result: 'failure', message: '비밀번호가 틀렸습니다. 다시 입력해 주세요' });
        }

        // JWT 생성
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        // 로그인 성공 - 토큰 반환
        return res.json({ result: 'success', 'access-token': token });

    } catch (error) {
        res.status(500).json({ result: 'failure', message: '서버 오류 발생' });
    }
});

module.exports = router;