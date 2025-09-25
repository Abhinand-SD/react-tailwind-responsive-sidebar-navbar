import React, { useState } from 'react'
import Slidebar from './components/Slidebar'
import Dashboard from './components/Dashboard'

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  return (
    <div className='flex'>
      <Slidebar sidebarToggle={sidebarToggle}/>
      <Dashboard setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle}/>
    </div>
  )
}

export default App
