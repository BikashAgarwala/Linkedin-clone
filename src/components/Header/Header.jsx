import React from 'react'
import { FaLinkedin ,FaSearch ,FaHome , FaUserFriends , FaBriefcase , FaBell} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className=' bg-white w-screen absolute'>
        <div className='w-[85vw] mx-auto flex justify-between py-3'>
        <div className="header_left flex items-center justify-start gap-4 ">
        <FaLinkedin className='text-blue-600 text-5xl '/>
        <div className="input flex bg-blue-50 rounded-2xl w-[23vw] max-w-[350px] h-10 px-5">
        <FaSearch className=' self-center' />
            <input className='w-[85%] px-5 outline-none border-none bg-transparent text-lg' type="text" placeholder='Search'/>
        </div>
            
        </div>
        <div className="px-8 header_right flex items-center justify-center gap-20 text-sm text-gray-500 border-r-2">
            <HeaderOption Icon={FaHome} title="Home"/>
            <HeaderOption Icon={FaUserFriends} title="My Network"/>
            <HeaderOption Icon={FaBriefcase} title="Jobs"/>
            <HeaderOption Icon={AiFillMessage} title="Messaging"/>
            <HeaderOption Icon={FaBell} title="Notifications"/>
            {/* <HeaderOption Icon={FaHome} title="Home"/> */}
        </div>
        </div>
    </div>
  )
}

export default Header