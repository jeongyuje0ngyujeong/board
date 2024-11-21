import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="note-container"> 
      <div className="note-paper border-2 border-gray-500 outline-dashed outline-3 outline-white outline-offset-8 shadow-md shadow-black">
        <Outlet />
        <div className = 'top_bar'>
          <div className ='profile_box'>
            
          </div>
          <div className ='content_box flex justify-between items-end pb-2 '>
           
          </div>
        </div>
        <div className='box'>
          <div className='profile_box border-solid border-2 border-gray-500 rounded-xl shadow-md shadow-gray-400'>
            
          </div>
          <div className='content_box border-solid border-2 border-gray-500 rounded-xl p-7 pr-2 shadow-md shadow-gray-400'> 
            
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
