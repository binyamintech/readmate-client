import React from "react";
import ReactDOM from "react-dom";
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-countdown-circle-timer";
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

function Clock(props) {
  const [play, setPlay] = useState(!props.freeStyle);
  let freeStyle = props.freeStyle; //Todo: change to props.freeStyle
  let timeInSeconds = 180; //Todo: change to props.time;
  const [rapid, setRapid] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime - minutes * 60;
    return (
      <div className="timer">
        {freeStyle ? (
          <div className={styles.squarebutton}>
            <SquareButton>{rapid} LPM</SquareButton>
          </div>
        ) : (
          <div className={styles.value}>
            {minutes < 10 && 0}
            {minutes}:{seconds < 10 && 0}
            {seconds}
          </div>
        )}
        {remainingTime == 0 && setIsFinish(true)}

        {
          <div
            // className={styles.playPause}
            onClick={() => {
              !freeStyle && setPlay(!play);
            }}
          >
            <RoundedButton isPlay={props.freeStyle}></RoundedButton>
          </div>
        }
      </div>
    );
  };

  return (
    <>
      {/*  this clock refers to freeStyle */}
      {freeStyle && (
        <button
          className={styles.plusMinus}
          onClick={() => setRapid(rapid + 2)}
        >
          +
        </button>
      )}
      <div>
        <CountdownCircleTimer
          rotation={"counterclockwise"}
          isPlaying={play}
          duration={timeInSeconds}
          colors={["#FEEFEC"]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          trailColor={"#7D56A5"}
          strokeLinecap={"square"}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      {freeStyle && (
        <button
          className={styles.plusMinus}
          onClick={() => setRapid(rapid - 2)}
        >
          <div className={styles.plusMinusSign}>-</div>
        </button>
      )}
    </>
  );
}

export default Clock;
