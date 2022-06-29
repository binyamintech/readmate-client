import { useContext } from 'react';
import { pageNameContext } from '../../../../components/layout/Layout';

import React from 'react'
import './style.css';
import Headphone from './Level_Headphone.png'
import FooterStart from '../../../../components/common/FooterStart'
import { useNavigate } from "react-router-dom";
// import { useContext, useEffect } from 'react';
// import { dataContext } from '../../context/context'

// import conus from './path from assets'

const Exercise = () => {

  const pageNameHeader = useContext(pageNameContext);
  pageNameHeader.setPageName("Level Exercise");
  
  const BookName = " Harry Potter " // i need to receive this info fromm shachar
  const title = 'Start Now'
  const textTitle = "With your headphones on,"
  const text = "Continue reading" + BookName + "book at the pace of the sound, for the next 3 minutes – we will notify you when time is up."
  const route = '/train_reading_level/exercise_clock'
  const navigate = useNavigate()

  //   const localDataContext = useContext(dataContext)
  //   useEffect(() => {
  //     console.log('dsadasasd');
  //     console.log(localDataContext);


  // const img = conus

  // i will receive from shachar an obj with the book info and the LPM
  // send the props to exercise_clock
  const objProps = { LPM: 12 }

  function startFunction() {
    navigate(route, { state: objProps })
  }


  return (
    <>
      <div className="level_exercise">
        <img src={Headphone} alt="Headphone" />
      </div>
      <FooterStart title={title} subtitle={textTitle} explanation={text} startFunction={startFunction} /*img={conus}*/ />
    </>
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
// export default Test