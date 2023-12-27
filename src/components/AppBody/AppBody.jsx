import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Widgets from './Widgets/Widgets'

function AppBody() {
  return (
    <div>
        <Sidebar />
        <Feed />
        <Widgets />
    </div>
  )
}

export default AppBody