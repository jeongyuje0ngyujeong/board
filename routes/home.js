// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');  // User 모델 가져오기

// // 최근 게시물 5개 가져오기
// router.get('/home', async (req, res) => {
//     try {
//         // 모든 사용자로부터 posts 배열을 가져온다 (빈 배열도 포함)
//         const usersWithPosts = await User.find({}, { posts: 1, _id: 0 });

//         // 모든 게시물을 하나의 배열로 병합
//         let allPosts = [];
//         usersWithPosts.forEach(user => {
//             allPosts = allPosts.concat(user.posts);  // 빈 배열도 병합
//         });

//         // 게시물이 0개일 경우 빈 배열을 반환
//         if (allPosts.length === 0) {
//             return res.json({ result: 'success', posts: [] });
//         }

//         // 최신 순으로 정렬
//         allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//         // 게시물이 5개 미만일 경우 처리
//         const numberOfPosts = allPosts.length < 5 ? allPosts.length : 5;

//         // 최근 게시물의 제목(title)만 선택 (5개 또는 그 이하), undefined 체크 추가
//         const recentPostTitles = allPosts.slice(0, numberOfPosts).map(post => post && post.title ? post.title : 'No Title');
        
//         // 게시물 반환
//         res.json({ result: 'success', titles: recentPostTitles });
//     } catch (error) {
//         console.error('Error fetching recent posts:', error);
//         res.status(500).json({ result: 'failure', message: '서버 오류 발생' });
//     }
// });

// module.exports = router;
