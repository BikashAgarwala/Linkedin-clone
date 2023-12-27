import React from 'react'
import { FaLinkedin ,FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className='flex bg-white w-screen'>
        <div className='w-[85vw] mx-auto'>
        <div className="header_left flex items-center gap-4 ">
        <FaLinkedin className='text-blue-600 text-5xl '/>
        <div className="input flex bg-blue-50 rounded-2xl w-[23vw] max-w-[350px] h-10 px-5">
        <FaSearch className=' self-center' />
            <input className='bg-blue-50 w-[85%] px-5 outline-none text-lg' type="text" placeholder='Search'/>
        </div>
            This is left header
        </div>
        <div className="header_right">
            This is right header
        </div>
        </div>
    </div>
  )
}

export default Header