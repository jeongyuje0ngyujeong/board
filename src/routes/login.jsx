import {Form} from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './login.css';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/users', {
            username,
            password
          });
          
          if (response.result === 'success'){
            alert('로그인 성공!');
            const token = response.data.token;
            localStorage.setItem('token', token);

            const userResponse = await axios.get('http://localhost:5000/userInfo', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });

            setUserInfo(userResponse.data);
            console.log(userResponse.data)
          }
          
        } catch (error) {
          console.error('로그인 실패:', error);
        }
      };

    return (
        <div className="login_box">
            <h1 className='bagel-fat-one-regular'>Login</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder='Username' 
                    value={username} 
                    onChange={(event)=>setUsername(event.target.value)}
                    className="w-80 p-2.5 mt-5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none"
                    required
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    value={password} 
                    onChange={(event)=>setPassword(event.target.value)}
                    className="w-80 p-2.5 mt-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none"
                    required
                />
                {/* <Link to="/myhome/home"> */}
                <div>
                    <button 
                        type="submit" 
                        className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-16 py-2.5 text-center mt-5">
                        Login
                    </button>
                </div>
                {/* </Link> */}
            </form>
            <div>
                <Link to="/register">
                    <p className="text-center mt-5">회원가입하기</p>
                </Link>
            </div>
        </div>
    );
} 