// import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import {useEffect, useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('http://192.168.1.227:5001/auth/user');
  return response.data; // 유저 데이터 반환
};

function App() {
  const [mode, setMode] = useState(1);

  const [userData, setUserData] = useState(null);
  // const [userData, setUserData] = useState(users[0]);
  const userId = sessionStorage.getItem('userId'); 
  const token = sessionStorage.getItem('token');

  const [today, setToday] = useState(null);
  const [total, setTotal] = useState(null);
  const [email, setEmail] =  useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://192.168.1.227:5001/auth/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        const data = response.data.user;
        // console.log(data);
        setUserData(data);
        setToday(data.today);
        setTotal(data.total);
        setEmail(data.email);
        setUsername(data.username);   
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

  fetchUserData();
  }, [userId, token, email]);

  // if (!userData) return <p>No user data found.</p>;
  // if (loading) return <p>Loading...</p>;

  if (!userData) return <p>No user data found.</p>;

  return (
    <div className="note-container"> 
    <div className="note-paper border-2 border-gray-500 outline-dashed outline-3 outline-white outline-offset-8 shadow-md shadow-black">
      
      <div className = 'top_bar'>
        <div className ='profile_box'></div>
        <div className ='content_box flex justify-between items-end pb-2'></div>
      </div>
      <div className='box'>
        <div className='profile_box border-solid border-2 border-gray-500 rounded-xl shadow-md shadow-gray-400'></div>
        <div className='content_box border-solid border-2 border-gray-500 rounded-xl p-7 pr-2 shadow-md shadow-gray-400'></div>
        <Navbar mode={mode} setMode={setMode}/>
      </div>
      <div className='absolute top-0'>
        <div className = 'top_bar'>
          <div className ='profile_box'>
              <p>TODAY {userData.today} | TOTAL {userData.total}</p>
          </div>
          <div className ='content_box flex justify-between items-end pb-2 pr-2 '>
              <p className='text-2xl font-mono'>{userData.username}의 미니홈피</p>
              <p>{userData.email}</p>
          </div>
        </div>
        <Outlet context={{ userData, setUserData }}/>
      </div>
    </div>
  </div>
  );
}

export default App;
