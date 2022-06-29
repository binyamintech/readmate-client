import './style.css';
import React, { useContext, useEffect } from 'react'
import { pageNameContext } from '../../../../components/layout/Layout'
import Questions from "../../../../components/common/Questions";

//group c- yehoshua+shaul

export default function QuestionsLevel() {
  const pageInfo = useContext(pageNameContext)
  useEffect(() => {
    pageInfo.setPageName("Questions")
  }, []);


  // 1
  // const roundNum = () => {
  //    if (numOfRound<3){
  //     // send to DB and then go back to music with clock
  //    }
  //    else{
  //     // send to DB and go to result
  //    }
  // }

  // 2.
//   const speedGood = () => {

//     if (speedIsGood===true){
//       // send to DB and go to result
//     }
//     else{
//       // send to DB and then go back to music with clock
//     }
//  }

// 3
//  const roundNum = () => {
//   if (numOfRound<3){
//    // send to DB and then go back to music with clock
//   }
//   else{
//    // send to DB and go to result
//   }
// }

// 4
const currentSpeed = () => {
  // recieve object of information from yishai and put current speed into a state
}
// 5 should be in the actual questions component
  // 1.amount of rounds
  // 2.true or false on is it the right speed
  // 3.what speed was chosen 
  // 4.current speed that he will be tested on 
  // 5.send answers and speed of reading to db

  return (
    <>
      <Questions />
    </>
  )
}