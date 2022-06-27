import Page4 from "../../pages/Assessments/Page4";

import Calc from "../../pages/Assessment/Calc";
// import Page6 from "../../pages/Assessments/Page6";
import RatingAndScore from "../Common/ReatingAndScore";
import RatingAndScore from '../Common/ReatingAndScore'
// import Questions from '../Common/Questions'
// import QuestionBoard from '../Common/QuestionBoard'
// import SubmitBtn from '../Common/SubmitBtn'
import React from "react";
import Page5 from '../../pages/Assessment/page5';
// function Test() {
function Test() {
    // function Test() {
    return (<>
        <Page4 />
        <RatingAndScore wpm={120} std={5} compScore={8} />
        {/* <Page6 /> */}
        <Calc />
        {/* </>) */}


        <Page5 />
    </>)
}
{/* } */ }

export default Test;
