import { Link } from 'react-router-dom';
import {useState} from 'react';
import './App.css';

function NavButtons(props){
    const lis = [];
    
    for(let i = 0; i < props.topics.length; i++)
    {
        let t = props.topics[i];
        let color = t.id == props.mode ? 'bg-white text-black' : 'bg-blue-300 text-white';
        
        lis.push(
            <li key={t.id}>
                <Link to={t.url}>
                    <button type="button" onClick={(event)=>{
                        props.setMode(t.id);
                    }} className={`navi_button ${color} font-semibold`}>{t.title}
                    </button>
                </Link>
            </li>)
    }
    return <ul>{lis}</ul>
}

function Navbar(props) {
    const [topics, setTopics] = useState([
        {id:1, title:'홈', url:'/myhome/home'},
        {id:2, title:'프로필', url:'/myhome/profile'},
        {id:3, title:'다이어리', url:'/myhome/diary'},
        {id:4, title:'사진첩', url:'/myhome/photo'},
        {id:5, title:'갤러리', url:'/myhome/gallery'},
        {id:6, title:'게시판', url:'/myhome/bulletin'},
        {id:7, title:'방명록', url:'/myhome/guest'},
    ]);
    return (
        <div className='navi_bar'>
            <NavButtons topics={topics} mode={props.mode} setMode={props.setMode}></NavButtons>
        </div>
    );
}

export default Navbar;
