import styles from './style.module.css';
import React, { useContext } from 'react'
import { pageNameContext } from '../../../../components/layout/Layout'
import Questions from "../../../../components/common/Questions";
import SubmitBtn from "../../../../components/common/SubmitBtn";

//group c- yehoshua++shaul


export default function QuestionsLevel() {
  const pageInfo = useContext(pageNameContext)
  pageInfo.setPageName("QuestionsLevel")
  return (
    <>
      <Questions />
      <SubmitBtn />
    </>
  )
}
