import {Form} from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';
import './register.css';
import $ from 'jquery';

export default function Register() {

    return (
        <>
        <div className="regi_box">
            <h1 className='bagel-fat-one-regular'>회원가입</h1>
            <form method="post">
                <div id='info_id' className='mt-5'>
                    <input type="text" id='name_id' placeholder='아이디 입력' className="w-80 p-2.5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none" required/>
                    <button  type="button" classNmae=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm text-center" required>중복 확인</button>
                </div>
                <div id='info_id' className='mt-5'>
                    <input type="password" placeholder='비밀번호 입력' className="w-80 p-2.5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none" required/>
                </div>
                <div id='info_id' className='mt-5'>
                    <input type="password" placeholder='비밀번호 재입력' className="w-80 p-2.5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none" required/>
                </div>
                <div>
                    <Link to="/login">
                        <button type="submit" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-16 py-2.5 text-center mt-5">가입하기</button>
                    </Link>
                </div>
            </form>
        </div>
        </>
    );
} 