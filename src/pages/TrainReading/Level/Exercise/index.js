import React from 'react'
import './style.css';
import Headphone from './Level_Headphone.png'
import FooterStart from '../../../../components/common/FooterStart'
import { BrowserRouter as Router, Link } from 'react-router-dom';


const index = () => {
  const BookName = "Harry Potter" // i need to receive this info fromm shachar
  const title = 'Start Now'
  const textTitle = "With your headphones on,"
  const text = "Continue reading" + BookName + "book at the pace of the sound, for the next 3 minutes – we will notify you when time is up."
  const rout = '/train_reading_level/exercise_clock'

  function onclickHandler() {
    // window.location.href = rout
    console.log('button')
  }
  return (
    <div className='level_page'>
      {/* <h1>Level Exercise</h1> */}
      <img src={Headphone} alt="Headphone" />
      <FooterStart title={title} textTitle={textTitle} text={text} rout={rout} />
        <Link to={rout}>
          <button onClick={onclickHandler}>next</button> 
          {/* // this onclick dont exist, the path will be send throw props.rout to the component */}
        </Link>
    </div>
  )
}

export default index
