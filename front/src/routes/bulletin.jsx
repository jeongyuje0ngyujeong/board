import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import axios from 'axios';

function NewPost(props){
    const [content, setContents] = useState('');
    const [title, setTitle] = useState('');
    const userId = sessionStorage.getItem('userId'); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/post/post', {
                title,
                content,
                userId
            });
          
            if (response.data.result === 'success'){
                alert('등록 성공');
                setTitle('');
                setContents('');
                // window.location.reload();
            }
          
        } catch (error) {
          console.error('등록 실패:', error);
        }
      };

    return (
        <>
        <h2>새글쓰기</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id='title'
                placeholder='제목을 입력해주세요...' 
                value={title} 
                onChange={(event)=>setTitle(event.target.value)}
                className="w-full p-2.5 pl-4 mt-5 mb-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none"
                required
            />
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <textarea 
                        id="comment" 
                        rows="16" 
                        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
                        value={content}
                        onChange={(event)=>setContents(event.target.value)}
                        placeholder="글을 작성해주세요..." 
                        required >
                    </textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        등록하기
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}

function ShowPost(props){
    const lis = [];
    
    const fetchPost = async () => {
        const response = await axios.get('http://localhost:5001/post/allpost');
        return response.data;
    };
    
    const posts = fetchPost();
    for(let i = 0; i < posts.length; i++)
    {
        let t = posts[i];
        
        lis.push(
            <li key={t.id}>
                <div>{t.title}</div>
            </li>)
    }
    return <ul>{lis}</ul>
}


export default function Bulletin() {
    const [contents, setContents] = useState('');
    const [title, setTitle] = useState('');

    return (
        <>
        <div className='box font-mono'>
            <div className='pt-5 profile_box bg-white border-solid border-2 border-gray-500 rounded-xl shadow-md shadow-gray-400'>
                <h2>게시판</h2>
            </div>
            <div className='content_box p-5 bg-white border-solid border-2 border-gray-500 rounded-xl shadow-md shadow-gray-400'> 
                <NewPost></NewPost>
            </div>
        </div>    
        </>
    );
} 

