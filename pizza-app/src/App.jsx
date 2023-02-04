import React, { useState } from 'react'
import SideMenu from './components/SideMenu'
import Navbar from './components/Navbar'

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false)
  const sideMenuProps = { showSideMenu, setShowSideMenu }

  return (
    <div className="App">
      <SideMenu sideMenuProps={sideMenuProps} />
      <Navbar sideMenuProps={sideMenuProps} />
    </div>
  )
}

export default App
