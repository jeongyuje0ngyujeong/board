// import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react';
import Navbar from './Navbar';

function App() {
  const [mode, setMode] = useState('1');

  return (
    <div className="note-container"> 
    <div className="note-paper border-2 border-gray-500 outline-dashed outline-3 outline-white outline-offset-8 shadow-md shadow-black">
      <div className='absolute'>
        <div className = 'top_bar'>
          <div className ='profile_box'>
              <p>TODAY 224 | TOTAL 2224</p>
          </div>
          <div className ='content_box flex justify-between items-end pb-2 '>
              <p className='text-2xl font-mono'>안주의 미니홈피</p>
              <p>https://velog.io/@minkyoung00/posts</p>
          </div>
        </div>
        <Outlet />
      </div>
      <div className = 'top_bar'>
        <div className ='profile_box'></div>
        <div className ='content_box flex justify-between items-end pb-2'></div>
      </div>
      <div className='box'>
        <div className='profile_box border-solid border-2 border-gray-500 rounded-xl shadow-md shadow-gray-400'></div>
        <div className='content_box border-solid border-2 border-gray-500 rounded-xl p-7 pr-2 shadow-md shadow-gray-400'></div>
        <Navbar mode={mode} setMode={setMode}/>
      </div>
    </div>
  </div>
  );
}

export default App;
