

// export default function Profile() {
//     return (
//         <>
        
//         </>
//     );
// } 

import {Form} from "react-router-dom";
import {useOutletContext} from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function EditProfile(props){
    const email = props.email;
    const feeling = props.feeling;
    const bio = props.bio; 
    const setEmail = props.setEmail;
    const setFeeling = props.setFeeling;
    const setBio = props.setBio; 
    const userId = sessionStorage.getItem('userId'); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://192.168.1.227:5001/post/user_info', {
                bio,
                feeling,
                email,
                userId
            });
          
            if (response.data.result === 'success'){
                alert('등록 성공');
            }
            // window.location.reload();
          
        } catch (error) {
          console.error('등록 실패:', error);
        }
      };

    return (
        <>
        <h2>수정하기</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id='email'
                placeholder='제목을 입력해주세요...' 
                value={email} 
                onChange={(event)=>setEmail(event.target.value)}
                className="w-full p-2.5 pl-4 mt-5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none"
                required
            />
            <input 
                type="text" 
                id='feeling'
                placeholder='기분을 입력해주세요...' 
                value={feeling} 
                onChange={(event)=>setFeeling(event.target.value)}
                className="w-full p-2.5 pl-4 mt-5  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none"
                required
            />
            <input 
                type="text" 
                id='bio'
                placeholder='자기소개를 입력해주세요...' 
                value={bio} 
                onChange={(event)=>setBio(event.target.value)}
                className="w-full p-2.5 pl-4 mt-5 mb-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none"
                required
            />
             
            <button type="submit"
                className="inline-flex items-center py-2.5 px-4 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                등록하기
            </button>
          
        </form>
        </>
    )
}

function ShowPost(props){
    const lis = [];
    
    const fetchPost = async () => {
        const response = await axios.get('http://192.168.1.227:5001/post/allpost');
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


export default function Profile(props) {
    const { userData, setUserData } = useOutletContext();
    const [email, setEmail] = useState(userData.email);
    const [feeling, setFeeling] = useState(userData.feeling);
    const [bio, setBio] = useState(userData.bio);

    return (
        <>
        <div className='box font-mono'>
            <div className='pt-5 profile_box bg-white border-solid border-2 border-gray-500 rounded-xl shadow-md shadow-gray-400 '>
                <h2>프로필</h2>
            </div>
            <div className='content_box p-5 bg-white border-solid border-2 border-gray-500 rounded-xl shadow-md shadow-gray-400'> 
                <EditProfile 
                    email={email} 
                    setEmail={setEmail} 
                    feeling={feeling} 
                    setFeeling={setFeeling} 
                    bio={bio} 
                    setBio={setBio} 
                ></EditProfile>
            </div>
        </div>    
        </>
    );
} 
