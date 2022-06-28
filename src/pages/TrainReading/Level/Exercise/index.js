import React from 'react'
import './style.css';
import Headphone from './Level_Headphone.png'
import FooterStart from '../../../../components/common/FooterStart'
import { BrowserRouter as Router, Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// import conus from './path from assets'


const Exercise = () => {
  const BookName = " Harry Potter " // i need to receive this info fromm shachar
  const title = 'Start Now'
  const textTitle = "With your headphones on,"
  const text = "Continue reading" + BookName + "book at the pace of the sound, for the next 3 minutes – we will notify you when time is up."
  const rout = '/train_reading_level/exercise_clock'
  const navigate = useNavigate()
  // const img = conus
  // title={title} textTitle={textTitle} text={text} rout={rout}

  // i will receive from shachar an obj with the book info and the LPM
  // send the props to exercise_clock

  function onclickHandler() {
    console.log('button')
  }
  function startFunction(){
    navigate(rout)
  }
  return (
    <div className='level_page'>
      {/* <h1>Level Exercise</h1> */}
      <img src={Headphone} alt="Headphone" />
      <FooterStart title={title} subtitle={textTitle} explanation={text} startFunction={startFunction} /*img={conus}*/ />
    </div>
  )
}

export default Exercise



// import { useContext, useEffect } from 'react';
// import { dataContext } from '../../context/context'
// function Test() {
//   const localDataContext = useContext(dataContext)
//   useEffect(() => {
//     console.log('dsadasasd');
//     console.log(localDataContext);
//   })
//   return (<>

//   </>)
// }
// export default Test;