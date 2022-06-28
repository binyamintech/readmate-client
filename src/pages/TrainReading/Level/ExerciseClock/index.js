import React from 'react'
import './style.css';
import SoundBar from "./SoundBar.png"
import { Link } from 'react-router-dom';

// import Clock from '../../../../components/common/Clock'


const index = () => {
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
      <img src={SoundBar} />
    </div>
  )
}

export default index
