// import React from "react";
// import ReactDOM from "react-dom";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";

// import "./style.module.css";

// function Clock() {
//   const renderTime = ({ remainingTime }) => {
//     if (remainingTime === 0) {
//       return <div className="timer">Too lale...</div>;
//     }

//     return (
//       <div className="timer">
//         <div className="text">Remaining</div>
//         <div className="value">{remainingTime}</div>
//         <div className="text">seconds</div>
//       </div>
//     );
//   };
//   return (
//     <div className="App">
//       <h1>
//         CountdownCircleTimer
//         <br />
//         React Component
//       </h1>
//       <div className="timer-wrapper">
//         <CountdownCircleTimer
//           isPlaying
//           duration={10}
//           colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//           colorsTime={[10, 6, 3, 0]}
//           onComplete={() => ({ shouldRepeat: true, delay: 1 })}
//         >
//           {renderTime}
//         </CountdownCircleTimer>
//       </div>
//       <p className="info">
//         Change component properties in the code filed on the right to try
//         difference functionalities
//       </p>
//     </div>
//   );
// }

// export default { Clock };

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

function Clock(props) { //props
  const [play, setPlay] = useState(false);
  let freeStyle = props.freeStyle; //Todo: change to props.freeStyle
  const [rapid, setRapid] = useState(0);

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
        <div
          // className={styles.playPause}
          onClick={() => {
            !freeStyle && setPlay(!play);
          }}
        >
          <RoundedButton></RoundedButton>
        </div>
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
          duration={5}
          colors={["#7D56A5"]}
          // onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          onComplete={props.funcs.onComplete}
          trailColor={"#FEEFEC"}
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

  // return <CountdownCircleTimer></CountdownCircleTimer>;
  // console.log("stop");
}

export default Clock;