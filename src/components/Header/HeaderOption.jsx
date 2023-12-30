import React from 'react'
import { FaLinkedin ,FaSearch ,FaHome , FaUserFriends , FaBriefcase , FaBell} from "react-icons/fa";

function HeaderOption({Icon , title}) {
  return (
    <div className='flex flex-col items-center hover:text-black'>

         <Icon className='text-2xl' />
        <div> {title} </div>
    </div>
  )
}

export default HeaderOption