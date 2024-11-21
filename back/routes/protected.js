//JWT 인증을 통과한 사용자만 접근할 수 있는 보호된 라우트

const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).json({ message: `Welcome ${req.user.id}, you are authenticated!` });
});

module.exports = router;
