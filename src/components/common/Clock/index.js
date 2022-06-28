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
//  send a props named "freeStyle" with a value:false.
// and a props named "time" with the number of seconds you want to excercise
//for example: for 3 minutes, enter 180

function Clock(props) {
  const [play, setPlay] = useState(false);
  let freeStyle = false; //Todo: change to props.freeStyle
  let timeInSeconds = 10; //Todo: change to props.time;
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
        {!isFinish && (
          <div
            // className={styles.playPause}
            onClick={() => {
              !freeStyle && setPlay(!play);
            }}
          >
            <RoundedButton></RoundedButton>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
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
          colors={["#7D56A5"]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          trailColor={"#FEEFEC"}
          strokeLinecap={"square"}
          //Todo: disappear platPause button when complete
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

  // return <CountdownCircleTimer></CountdownCircleTimer>;
  // console.log("stop");
}

export default Clock;
