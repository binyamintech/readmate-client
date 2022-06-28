import React from 'react'
import './style.css';
import SoundBar from "./SoundBar.png"
// import Clock from "../../../../components/common/Clock"
import SquareButton from '../../../../components/common/SquareButton';
import { useNavigate } from "react-router-dom";


const ExerciseClock = () => {
  const navigate = useNavigate();

  const rout = '/train_reading_level/rate'

  const LPM = '12 LPM'
  function onclickHandler() {
    console.log('button')
  }

  const shaulFuncs = {
    // onPlay: shaulOnPlay,
    // onPause: shaulOnPause,
    onComplete: shaulOnComplete
  }

  function shaulOnComplete(){
    navigate(rout, { replace: true })
  }

  return (
    <div className="level_page">
      {/* <Clock freeStyle={false} time={5} funcs={shaulFuncs}></Clock> */}
      <SquareButton>{LPM}</SquareButton>
      <img src={SoundBar} />
    </div>
  )
}

export default ExerciseClock
