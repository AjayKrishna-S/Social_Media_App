import React, { useContext } from 'react';
import './navBar.scss';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const NavBar = () => {

    const { darkMode, toggle } = useContext(DarkModeContext)

  return (
    <div className='navBar'>
        <div className='left'>
            <Link to='/' style={{textDecoration:"none"}}>
                <span>MeetUp</span>
            </Link>
            <HomeOutlinedIcon />
            {darkMode ? <LightModeOutlinedIcon onClick = { toggle }/> : <DarkModeOutlinedIcon onClick = { toggle } />}
            <GridViewOutlinedIcon />
            <div className='search'>
                <SearchOutlinedIcon />
                <input type='text' placeholder='Search'/>
            </div>
        </div>
        <div className='right'>
            <PersonOutlineOutlinedIcon />
            <MailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <div className='user'>
                <img src="https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <span>Ajay Krishna</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar