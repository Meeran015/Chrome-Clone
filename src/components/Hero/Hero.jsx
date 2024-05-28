import React, { useEffect, useState, useRef } from 'react';
import style from './Hero.module.css';

const Hero = () => {
  const text = ["fast", "safe", "yours"];
  const bgColors = ["rgba(0, 128, 0, 0.4)", "#1a73e869", "rgba(255, 0, 0, 0.6)"];
  const [index, setIndex] = useState(0);
  const span = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i === text.length - 1 ? 0 : i + 1));
    }, 2000);

    return () => clearInterval(id);
  }, [text.length, index]);

  return (
    <div className={style.container}>
      <img src='https://www.google.com/chrome/static/images/chrome-logo-m100.svg' width={'50px'} alt='chrome' />
      <h1>The browser<br />built to be <span className={style.text} style={{
        backgroundColor: `${bgColors[index]}`
      }} ref={span}>{text[index]}</span></h1>
    </div>
  );
};

export default Hero;