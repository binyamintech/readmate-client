// group c- yehoshua
import { useContext } from 'react';
import { pageNameContext } from '../../../../components/layout/Layout';

import React from 'react'
import styles from './style.module.css';

export default function ExerciseRate(){
  // setHeader
  const pageNameHeader = useContext(pageNameContext);
  pageNameHeader.setPageName("Reading Rate");
  return (
    <div>
      <h1>ReadingRatePage</h1>
    </div>
  )
}