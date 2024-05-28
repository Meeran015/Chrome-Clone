import React, { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import style from './page1.module.css'

const Page1 = ({y}) => {

    const img = useRef(null);
    useEffect(()=>{
        if(y >= 1100) {
        gsap.to(img.current, {
            duration: 2,
            rotation: 720,
            ease: Power2.easeInOut,
            left: '50%',
        })
        }
    },[y])

  return (
    <div className={style.container}>
        <div className={style.box1}>
            <h4>UPDATES</h4>
            <h1>Automatic updates</h1>
            <p>There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.</p>
            <a href='https://www.google.com/chrome/update/'>Learn about automatic updates</a>
            <img src='https://www.google.com/chrome/static/images/engagement-homepage/updates/updates.png' alt='update' />
        </div>
        <div className={style.box2}>
            <h4>LATEST</h4>
            <h1>New from Chrome</h1>
            <p>Chrome regularly updates with tools and features that make it faster and easier to use.</p>
            <a href='https://www.google.com/chrome/whats-new/latest'>Learn what’s new on Chrome</a><br/>
            <img ref={img} src='https://www.google.com/chrome/static/images/chrome-logo-m100.svg' alt='chrome' />
        </div>
    </div>
  )
}

export default Page1