import React from 'react'
import './topbar.scss'
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
export default function Topbar() {
  return (
    <div className='topbar'>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className='logo'>hT.</a>
        <div className="itemContainer">
        <PersonIcon className='icon'/>
        <span>+012354689</span>
       </div>
        <div className="itemContainer">
        <MailIcon className='icon'/>
        <span>xyz@gmail.com</span>
       </div>
       
      </div>
      <div className="right"></div>
    </div>
    </div>
  )
}
