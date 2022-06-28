//group c- yehoshua++shaul

import { useContext } from 'react';
import { pageNameContext } from '../../../../components/layout/Layout';

import styles from './style.module.css';
import React from 'react'
import Questions from "../../../../components/common/Questions";
import SubmitBtn from "../../../../components/common/SubmitBtn";

export default function QuestionsLevel() {
  // setHeader
  const pageNameHeader = useContext(pageNameContext);
  pageNameHeader.setPageName("Questions");

  return (
    <>
      <Questions />
      <SubmitBtn />
    </>
  )
}