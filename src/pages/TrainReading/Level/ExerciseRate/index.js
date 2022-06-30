import React, { useEffect, useState } from "react";
import "../../../../components/common/SubmitBtn";
import SubmitBtn from "../../../..//components/common/SubmitBtn";
import { useLocation, useNavigate } from "react-router-dom";

// import styles from "./style.module.css";


// function loadFromlocalstorage(){

// }
// function saveTolocalstorage(){

// }
//

const ExerciseRate = () => {

  const LPM2 = useLocation()
  const LPM = LPM2.state.LPM
  console.log("Rate LPM ", LPM);

//  const route = '/train_reading_level/question'

//   const objProps = {
//     LPM: LPM,
//     newLPM: LPM,
//     round: num,
//     justRigth: true / false
//   }
//   function ??????????() {
//     navigate(route, { state: objProps })
//   }


  let count = 1;
  function nojhgfd() {
    console.log("lkjhgf");
  }
  function choise(choise) {
    setStatusButton(choise);
    setRate(rate + 1);
  }
  const [statusButtonPrev, setstatusButtonPrev] = useState(0)//כפתור אחרון שנלחץ .נשמר בלוקלסטורג
  const [statusButton, setStatusButton] = useState(""); //איזה כפתור נלחץ
  const [speed, setSpeed] = useState(10); //מהירות
  const [rate, setRate] = useState(0); //לחיצה מספר 1-3
  useEffect(() => {
    // Update the document title using the browser API
    console.log(speed, "speed");
  }, [speed]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(rate, "rate");
    examination();
  }, [rate]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(statusButton);

    examination();
  }, [statusButton]);
  function print() {

    /* console.log(speed, "speed");  */

  }
  function examination() {
    let offsetSpeed = 0
    if (statusButtonPrev === 0) {

      offsetSpeed = 2
      setstatusButtonPrev(statusButton)
      console.log("start1")
    }
    else
      if (statusButtonPrev !== statusButton) {
        setstatusButtonPrev(statusButton)
        offsetSpeed = 1
        console.log("start2")
      }
      else offsetSpeed = 2

    if (statusButton === 1) {
      console.log("db");
      /* return */
    }

    if (rate === 3) {
      setSpeed(speed + offsetSpeed);
      console.log("db");
      /* return */
    }

    if (statusButton === 2) setSpeed(speed - offsetSpeed);
    if (statusButton === 3) setSpeed(speed + offsetSpeed);

    print()
  }

  return (
    <>
      <input type="button" value="just right" onClick={(e) => choise(1)} ></input>
      <input type="button" value="too fast" onClick={(e) => choise(2)}></input>
      <input type="button" value="too low" onClick={(e) => choise(3)}></input>
      {/* <div><h1>dfmnnnn</h1></div>
     {/*  <SubmitBtn path="" name="Submit" type={"button"} click={nojhgfd}/>  */}
    </>
  );
};

export default ExerciseRate;
