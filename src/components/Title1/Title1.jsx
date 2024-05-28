import React from 'react'
import style from './Title1.module.css'
import fastImg from '../../assets/fast.png'

const Title1 = () => {
  return (
    <div className={style.container}>
        <h1>The <span className={style.text} style={{backgroundColor: "#CEEAD6", color: "#188038"}}>
        <img src={fastImg} alt="Fast" />
        fast</span>
        way to do<br/>things online</h1>
    </div>
  )
}

export default Title1