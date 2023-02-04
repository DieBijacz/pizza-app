import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SideMenu = ({ sideMenuProps }) => {
  const { showSideMenu, setShowSideMenu } = sideMenuProps

  return (
    <div id='side-menu'>
      <div className={`side-menu ${showSideMenu && 'show'}`}>
        <div className="header">
          <div className='flex gap-2'>
            <div>PIZZA</div>
            <div>username</div>
          </div>
          <button onClick={() => setShowSideMenu(prev => !prev)}><FontAwesomeIcon className='icon' icon={faTimes} /></button>
        </div>
        <div className="body">
          {showSideMenu ? 'true' : 'false'}
        </div>
      </div>
      <div className={`${showSideMenu ? 'background' : ''}`}></div>
    </div>
  )
}

export default SideMenu