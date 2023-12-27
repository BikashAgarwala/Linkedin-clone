import React from 'react'
import { FaLinkedin ,FaSearch ,FaHome , FaUserFriends , FaBriefcase , FaBell} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";


function Header() {
  return (
    <div className=' bg-white w-screen'>
        <div className='w-[85vw] mx-auto flex justify-between py-3'>
        <div className="header_left flex items-center justify-start gap-4 ">
        <FaLinkedin className='text-blue-600 text-5xl '/>
        <div className="input flex bg-blue-50 rounded-2xl w-[23vw] max-w-[350px] h-10 px-5">
        <FaSearch className=' self-center' />
            <input className='bg-blue-50 w-[85%] px-5 outline-none text-lg' type="text" placeholder='Search'/>
        </div>
            
        </div>
        <div className="px-8 header_right flex items-center justify-center gap-20 text-base text-slate-600 border-r-2">
            <div className='flex flex-col items-center'>
        <FaHome className=' hover:text-black text-3xl'/>
            <div className=' hidden lg:block'>Home</div>
            </div>
            <div className='flex flex-col items-center'>
        <FaUserFriends className=' hover:text-black text-3xl' />
        <div className='hidden lg:block'>My Network</div>
            </div>
            <div className='flex flex-col items-center'>
        <FaBriefcase className=' hover:text-black text-3xl' />
        <div className='hidden lg:block'>Jobs</div>
            </div>
            <div className='flex flex-col items-center'>
        <AiFillMessage className=' hover:text-black text-3xl' />
        <div className='hidden lg:block'>Messaging</div>
            </div>
            <div className='flex flex-col items-center'>
        <FaBell className=' hover:text-black text-3xl' />
        <div className='hidden lg:block'>Notifications</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header