import { useContext } from 'react';
import { pageNameContext } from '../../../../components/layout/Layout';

import React from 'react'
import './style.css';
import SoundBar from "./SoundBar.png"
import { Link } from 'react-router-dom';

// import Clock from '../../../../components/common/Clock'

export default function ExerciseClock(){
  // setHeader
  const pageNameHeader = useContext(pageNameContext);
  pageNameHeader.setPageName("Level Exercise");

  const rout = '/train_reading_level/rate'

  function onclickHandler() {
    // window.location.href = rout
    console.log('button')
  }

  return (
    <div className="level_page">
      <h1>Exercise Clock</h1>
      {/* <Clock/> */}
      <h1>Clock</h1>
      <h1>12 LPM</h1>
      <Link to={rout}>
        <button onClick={onclickHandler}>next</button>
        {/* // this onclick dont exist, the path will be send throw props.rout to the component */}
      </Link>
      <img src={SoundBar} alt="SoundBar"/>
    </div>
  )
}