import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.container}>
        <img className={style.logo} src='https://www.google.com/chrome/static/images/fallback/chrome-logo-2023.png' width={'100px'} alt='icon chrome logo' />
        <ul className={style.menu}>
            <li>AI Innovations</li>
            <li>Features</li>
            <li>Safety</li>
            <li>By Google</li>
            <li>Extensions</li>
        </ul>
    </div>
  )
}

export default Navbar