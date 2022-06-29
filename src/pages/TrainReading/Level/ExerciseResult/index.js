import { useContext } from 'react';
import { pageNameContext } from '../../../../components/layout/Layout';
import { } from '../../../../components/common/ReatingAndScore';
// import SubmitBtn from '../../../../components/common/SubmitBtn';
// import TextArea from '../../../../components/common/TextArea';


import React from 'react'
import './style.css';
import result from './result.png'
// import { Link } from 'react-router-dom';

// const rout = '/to dashboard' // shaul - i dont know the path

// export default function ExerciseResult(props) {
export default function ExerciseResult() {
  // setHeader
  const pageNameHeader = useContext(pageNameContext);
  pageNameHeader.setPageName("Result Summary");

  //TODO: wait for implementation of userContext
  // get user LPM
  //const userInfContext = useContext(userInformationContext);
  //let userLPM = userInfContext.getUserLPM();
  let userLPM = 19;

  const submitBtnProp = {
    text: "Go To Dashboard",
    link: "/dashboard"
  }

  return (
    <>
      <div className="level_page">
        <span>
          <img src={result} alt="Result Page Background"/>
        </span>

        <span>
          <p>RatingAndScore placeholder</p>
          <p>LPM = {userLPM}</p>
        </span>

        <span>
          <br />
          SubmitBtn placeholder
          <br />
          button text: {submitBtnProp.text}
          <br />
          button link: {submitBtnProp.link}
        </span>
      </div>
    </>
  )
}