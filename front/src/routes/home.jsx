import {useOutletContext, useLocation} from "react-router-dom";
import '../App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';


function UpdateNews(props){
    // const selectedPostContent = props.content
    const setSelectedPostContent = props.contSet;
    // const selectedPostTitle = props.title;
    const setSelectedPostTitle = props.titleSet

    const handlePostClick = (t) => {
        setSelectedPostContent(t.content);  
        setSelectedPostTitle(t.title);
    };
    const lis = [];
    
    const posts = props.posts;
    // for(let i = posts.length-1; i > posts.length-6; i--)
    for(let i = 0; i < posts.length; i++)
    {
        let t = posts[i];
        
        lis.push(
            <li key={i} onClick={() => handlePostClick(t)} >
                <div className='p-1.5 px-3 mb-1 mr-2 flex flex-row justify-between items-center border-solid border-2 border-gray-500 rounded'>
                    <p>Title {t.title}</p>
                    <p>작성일: {t.createdAt}</p> 
                </div> 
            </li>)
    }
    return <ul >{lis}</ul>
}

export default function Home() {
    const { userData, setUserData } = useOutletContext();
    console.log(userData);

    const [selectedPostContent, setSelectedPostContent] = useState('');  
    const [selectedPostTitle, setSelectedPostTitle] = useState('');   

    return (
        <div className='box'>
            <div className='profile_box bg-white border-solid border-2 border-gray-500 rounded-xl shadow-md shadow-gray-400'>
                <div className='pt-8'><img src={process.env.PUBLIC_URL + '/anju.jpg'} className="image border" alt="cat"/></div>
    
                <div className='pr-4 pl-4 pt-3'>
                    <div className='border-solid border-2 border-gray-500 rounded'>
                        <p className="text-md font-mono">
                     
                        {userData.feeling}
                        </p>
                    </div>
                </div>
                <div className='p-8 pt-8'>
                    <div className='p-3 text-sm font-mono'>
            
                        <p className='break-keep'>{userData.bio}</p>
                    </div>
                </div>
            </div>
            <div className='content_box bg-white border-solid border-2 border-gray-500 rounded-xl p-7 pr-4 shadow-md shadow-gray-400'> 
                <div className='grid grid-cols-2 grid-rows-6 gap-4 h-full overflow-y-auto'>
                    <div className='col-start-1 col-end-3 row-span-3 font-mono'>
                        <p className='font-bold'>Updated news</p>
                        <div className="w-[100%] my-[1%] border-[1px] border-lightGray/30"></div>
                        {userData.post &&
                        <UpdateNews 
                            posts = {userData.post} 
                            // content = {selectedPostContent} 
                            contSet = {setSelectedPostContent}
                            // title = {selectedPostTitle}
                            titleSet ={setSelectedPostTitle}>
                        </UpdateNews>
                        }
                    </div>
                   
                    <div className='col-start-1 col-end-3 row-span-3 h-96 mt-5 font-mono'>
                        <p className='font-bold'>Content</p>
                        <div className="w-[100%] my-[1%] border-[1px] border-lightGray/30"></div>
                        <div>
                            {selectedPostContent ? (
                                <>
                                <p className='font-bold'>Title: {selectedPostTitle}</p> 
                                {/* <p className=' '>{selectedPostTitle}</p> */}
                                <br></br>
                                <p className='font-bold '>Content:</p> 
                                <p className=' text-xl'>{selectedPostContent}</p>
                                </>
                            ) : (
                                <p>게시글을 선택해 주세요.</p>
                            )}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        
    )
} 