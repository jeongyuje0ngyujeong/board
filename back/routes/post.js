const express = require('express');
const router = express.Router();
// const Post = require('../models/post');
const User = require('../models/user'); 
const mongoose = require('mongoose');

router.post('/post', async (req, res) => {
    
    const { title, content, userId } = req.body;  // 클라이언트가 보낸 데이터
    // console.log(req.body.content);
    
    try {
        // 작성자 확인
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ result: 'failure', message: 'User not found' });
        }

        // 게시물 생성
        const newPost = {
            title,
            content,
            author: user.username  // 게시물 작성자를 Post 스키마의 author에 연결
        };

        // 새 게시물 저장
        // await newPost.save();

        // 작성자의 post 배열에 게시물 추가
        user.post.push(newPost);
        await user.save();

        // 성공 응답 반환
        res.status(201).json({ result: 'success', message: 'Post created successfully' });
        // res.status(201).json({ message: 'Post created successfully', post: newPost });

    } catch (error) {
        // 오류 처리
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Error creating post', error });
    }

});

router.post('/user_info', async (req, res) => {
    
    const { bio, feeling, email, userId } = req.body;  // 클라이언트가 보낸 데이터
    // console.log(req.body.content);
    
    try {
        // 유저 정보 업데이트
        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            { bio, feeling, email },  // 업데이트할 필드와 값
            { new: true }  // 업데이트 후의 최신 데이터 반환
        );

        if (!updatedUser) {
            return res.status(404).json({ result: 'failure', message: 'User not found' });
        }

        res.json({ result: 'success', user: updatedUser });
    } catch (error) {
        // 오류 처리
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Error creating post', error });
    }

});

router.post('/post/comment', async (req, res) => {
    const { userId, comment } = req.body;

    try {
        // user 찾기
        const user = await User.findById(userId);
        if (!user)
            return res.status(404).json({result: 'failure', message: 'User not found'});
        
        // 게시물 찾기
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ result: 'failure', message: 'Post not found' });
        }

        const newComment = {
            comment,
            author: user.username
        };

        // await newComment.save();

        post.comments.push(newComment);
        await user.save;

        res.status(201).json({ result: 'success', message: 'Comment created successfully' });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Error creating post', error });
    }
});

module.exports = router;  // post가 아닌 router를 내보내도록 수정

