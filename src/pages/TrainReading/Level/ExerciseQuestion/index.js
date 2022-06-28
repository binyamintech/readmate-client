// import styles from './style.module.css';
import React, { useContext } from 'react'
import { pageNameContext } from '../../../../components/layout/Layout'
import Questions from "../../../../components/common/Questions";

//group c- yehoshua+shaul

export default function QuestionsLevel() {
  const pageInfo = useContext(pageNameContext)
  pageInfo.setPageName("Questions")

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
