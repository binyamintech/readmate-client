import React, { useEffect, useState } from "react";
import "../../../../components/common/SubmitBtn";
import SubmitBtn from "../../../..//components/common/SubmitBtn";
/* import Ddiv from "../../../../components/common/Ddiv"; */
// import styles from "./style.module.css";
import { useLocation, useNavigate } from "react-router-dom";
// function loadFromlocalstorage(){

// }
// function saveTolocalstorage(){

// }
//const LPM2 = useLocation()

const route = "/train_reading_level/question";
const ExerciseRate = () => {
  function choise(choise) {
    // setStatusButton(choise);
    examination(choise);
    setRate(rate + 1);
    console.log("sdsdsd")
  }
  const [statusButtonPrev, setstatusButtonPrev] = useState(0); //כפתור אחרון שנלחץ .נשמר בלוקלסטורג
  const [statusButton, setStatusButton] = useState(""); //איזה כפתור נלחץ
  const [speed, setSpeed] = useState(10); //מהירות
  const [rate, setRate] = useState(0); //לחיצה מספר 1-3
  const [justRight, setjustRight] = useState(false);
  const [firstChoise, setfirstchoise] = useState(0);
  const [done, setDone] = useState(false);
  const [objProps1, setObjprops1] = useState()
  const navigate = useNavigate();
  // let oldSpeed=objProps.oldSpeed

  const LPM2 = useLocation();
  // const LPM = LPM2.state.LPM
  const info = LPM2;
  // console.log("info", info);
  // console.log("Rate LPM ", LPM);

  const objProps = {
    LPM: 10,
    newLPM: speed,
    round: rate,
    justRight: false
  };



  LPM2.state = objProps;

  /* console.log("*",speed,rate,"*")
  console.log("state", LPM2.state); */
  function sendTo() {
    // console.log("objpropsoo1*****j", objProps1)
    setDone(true)
  }


  useEffect(() => {
    init()
  }, []);



  /* useEffect(() => {
    init3()
    }, [setjustRight]); */





  function print() {
    /* console.log(speed, "speed");  */
  }
  function init() {
    setSpeed(LPM2.state.LPM)
    setRate(LPM2.state.round)
    setjustRight(false)
  }
  function init2() {
    setObjprops1(objProps)
  }
  function init3() {
    setjustRight(true)
  }

  function examination(buttonClicked) {
    setstatusButtonPrev(buttonClicked);
    let offsetSpeed = 0;
    if (firstChoise === 0 && rate === 0) {
      setfirstchoise(1);
      console.log("start1");
      offsetSpeed = 2
    } else if (statusButtonPrev !== buttonClicked) {
      offsetSpeed = 1;
      console.log("start2");
    } else {


      offsetSpeed = 2;
    }

    if (buttonClicked === 1) {
      console.log("db");
      setjustRight(true)
      sendTo();
      return
    }

    if (rate === 3) {
      setSpeed(speed + offsetSpeed);
      console.log("db");
      setjustRight(false)
      sendTo()
      return

      /* return */
    }

    if (buttonClicked === 2) {
      setSpeed(speed - offsetSpeed);
      setjustRight(false)
      sendTo()
      return

    }
    if (buttonClicked === 3) {
      setSpeed(speed + offsetSpeed);
      setjustRight(false)
      sendTo()
      return

    }
    print();
  }
  function clickme(){}
  useEffect(()=>{
    if(done){
      const objProps1 = {
        LPM: LPM2.state.LPM,
        newLPM: speed,
        round: rate,
        justRight: justRight
      };
      navigate(route, {
        state: 
        objProps1
        
      });
    }
  },[done])
  return (
    <>
    {/*   <input
        type="button"
        value="just right"
        onClick={(e) => choise(1)}
      ></input>
      <input type="button" value="too fast" onClick={(e) => choise(2)}></input>
      <input type="button" value="too low" onClick={(e) => choise(3)}></input> */}
      
     {/*  <Ddiv/> */}
     
        <SubmitBtn path="" name="just right" type={"button"} click={()=> choise(1)}/>  
       <SubmitBtn path="" name="too fast" type={"button"} click={()=> choise(2)}/>  
       <SubmitBtn path="" name="too low" type={"button"} click={()=> choise(3)}/> 
       
    </>
  );
};

export default ExerciseRate;