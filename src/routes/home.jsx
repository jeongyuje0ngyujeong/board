import {Form} from "react-router-dom";
import '../App.css';

export default function Home() {
    return (
        <>
        <div className='box'>
        <div className='profile_box rounded-xl bg-white'>
            <div className='pt-8'><img src={process.env.PUBLIC_URL + '/anju.jpg'} className="image border" alt="cat"/></div>
            <div className='pr-4 pl-4 pt-3'>
            <div className='border-solid border-2 border-gray-500 rounded'>
                <p className="text-md font-mono">
                Today is... Happpppy ♫
                </p>
            </div>
            </div>
            <div className='p-8 pt-8'>
            <div className='p-3 text-sm font-mono'>
                <p className='break-keep'>안주 귀여워어..... 안주는 ㅎㅖ민이네 고양이에요.❤️</p>
            </div>
            </div>
        </div>
        <div className='content_box p-7 pr-2 rounded-xl bg-white'> 
            <div className='grid grid-cols-2 grid-rows-6 gap-4 h-full overflow-y-scroll'>
            <div className='row-span-2'><p className='font-bold'>Updated news</p><div className="w-[100%] my-[1%] border-[1px] border-lightGray/30"></div></div>
            <div className='row-span-2'><p className='font-bold'>BGM</p><div className="w-[100%] my-[1%] border-[1px] border-lightGray/30"></div></div>
            <div className='col-start-1 col-end-3 row-span-3'><p className='font-bold'>Miniroom</p><div className="w-[100%] my-[1%] border-[1px] border-lightGray/30"></div></div>
            <div className='col-start-1 col-end-3 row-span-3 h-96'><p className='font-bold'>What friends say</p><div className="w-[100%] my-[1%] border-[1px] border-lightGray/30"></div></div>
            </div>
        </div>
        </div>
        
        </>
    );
} 