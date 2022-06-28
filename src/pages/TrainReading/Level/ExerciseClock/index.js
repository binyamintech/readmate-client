import React from 'react'
import './style.css';
import SoundBar from "./SoundBar.png"
// import Clock from '../../../../components/common/Clock'


const index = () => {
  const rout = 'http://localhost:3000/train_reading_level/rate'

  function onclickHandler() {
    window.location.href = rout
  }


  return (
    <div className="level_page">
      <h1>Exercise Clock</h1>
      {/* <Clock/> */}
      <h1>Clock</h1>
      <h1>12 LPM</h1>
      <button onClick={onclickHandler}>next</button> // this onclick dont exist, the path will be send throw props.rout to the component
      <img src={SoundBar} />
    </div>
  )
}

export default index
