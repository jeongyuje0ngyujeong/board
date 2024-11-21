import { Link, NavLink } from 'react-router-dom';
import './main.css';
export default function Main() {
    return (
      <>
        <div className='text-center bagel-fat-one-regular'>
            <h1>미니홈피를 시작합니다.</h1>
            <br></br>
            <div className='flex justify-center space-x-4'>
                <div className='border-2 px-20 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white'>
                    <Link to="/login">로그인</Link>
                </div>
                <div className='border-2 px-16 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white'>
                    <Link to="/register">회원가입</Link>
                </div>
            </div>
        </div>
      </>
    );
  }