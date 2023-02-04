import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ sideMenuProps }) => {
  const { showSideMenu, setShowSideMenu } = sideMenuProps

  return (
    <div className='navbar'>
      <div>APP</div>
      <button onClick={() => setShowSideMenu(prev => !prev)}><FontAwesomeIcon className='icon' icon={faBars} /></button>
    </div>
  )
}

export default Navbar