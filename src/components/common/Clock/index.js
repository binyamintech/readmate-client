import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import styles from "./style.module.css";
import SquareButton from "../SquareButton";
import RoundedButton from "../RoundedButton";

// Creator : Team H - Milka

//instructions: when you use this component you should
//  send the following props:
//  1. "freeStyle" with a value:false.
//  2. "time" with the value 180 for 3 minutes clock.
//  3. object named "funcs" with the keys: "onPlay","onPause" and "onComplete"
//     and values which are your functions for those situations.
//  4. only for freeStyle: "rapid" with a value: functoin that will get current LPM
//  5. "rapidValue" with a value of the last user's LPM.

function Clock(props) {
  let freeStyle = props.freeStyle;
  const [play, setPlay] = useState(!freeStyle);
  const [isplay, setIsPlay] = useState(!freeStyle);
  let timeInSeconds = 10; //Todo: change to props.time;
  const [rapidValue, setRapidValue] = useState(props.initRapidValue);
  const [isFinish, setIsFinish] = useState(false);

  function complete() {
    setIsFinish(true);
    props.funcs.onComplete();
  }
  ////////////////////////////////////////////////
  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime - minutes * 60;

    return (
      <div className={styles.intimer}>
        {/* <div className={styles.square}> */}
        {freeStyle ? (
          <div className={styles.squarebutton}>
            <SquareButton>
              <div className={styles.rapid}>{rapidValue}</div> LPM
            </SquareButton>
          </div>
        ) : (
          <div className={styles.value}>
            {minutes < 10 && 0}
            {minutes}:{seconds < 10 && 0}
            {seconds}
          </div>
        )}
        {/* </div> */}
        {remainingTime === 0 && complete()}
        {!isFinish && (
          <div
            // className={styles.roundButton}
            onClick={() => {
              !freeStyle && setPlay(!play);
              !isplay && props.funcs.onPlay();
              isplay && props.funcs.onPause();
            }}
          >
            <RoundedButton
              isplay={isplay}
              setIsPlay={setIsPlay}
            ></RoundedButton>
          </div>
        )}
      </div>
    );
  };
  ////////////////////////////////////////////////////////////////////
  isplay && props.funcs.onPlay();

  return (
    <div className={styles.wrapClock}>
      {freeStyle && (
        <button
          className={styles.plusMinus}
          onClick={() => {
            setRapidValue(rapidValue + 1);
            props.funcs.rapid(rapidValue + 1);
          }}
        >
          +
        </button>
      )}
      <CountdownCircleTimer
        rotation={"counterclockwise"}
        isPlaying={play}
        duration={timeInSeconds}
        colors={["#7D56A5"]}
        onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        trailColor={"#FEEFEC"}
        strokeLinecap={"square"}
        size={240}
      >
        {renderTime}
      </CountdownCircleTimer>
      {freeStyle && (
        <button
          className={styles.plusMinus}
          onClick={() => {
            rapidValue > 0 && setRapidValue(rapidValue - 1);
            props.funcs.rapid(rapidValue - 1);
          }}
        >
          -
        </button>
      )}
    </div>
  );

  // return <CountdownCircleTimer></CountdownCircleTimer>;
  // console.log("stop");
}

export default Clock;