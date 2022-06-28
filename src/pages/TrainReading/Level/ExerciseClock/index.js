import React from 'react'
import './style.css';
import SoundBar from "./SoundBar.png"
import Clock from "../../../../components/common/Clock"
import SquareButton from '../../../../components/common/SquareButton';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';



const ExerciseClock = () => {
  const LPM = 12 // i have to take this info from props or userContext

  // const audioRef = useRef();
  // const [lpm, setLpm] = useState(16); // i have to set the LPM here

  // let [fileName, lpmFile] = pickFile(lpm);
  // console.log("fileName ", fileName);
  // // console.log("lpmFile ", lpmFile);
  
  
  // useEffect(() => {
  //   const audio = require('../../../../assets/audio/wush_mp3/wush_100_1min.mp3');
  //   console.log("audio ", audio);
  //   audioRef.current.src = audio;
  //   console.log(audioRef.current.src);
  // }, []);


  // const [changePercent, setChangePercent] = useState(lpm / lpmFile);
  // const [sec, setSec] = useState(1);
  // console.log("lpm ", lpm);
  // console.log("lpmFile ", lpmFile);
  // const [play, setPlay] = useState(false);
  // ///////////////////////////////////////////////////////////////////////////////////
  // function change() {
  //   setTimeout(() => {
  //     // let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
  //     let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
  //     // let count = changePercent * (1 + (0.125 / 180))

  //     setChangePercent(count)
  //   }, 1000);
  // }
  // //////////////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   if (play) {
  //     change();
  //     setSec(sec + 1)
  //     // debugger;
  //     // audioRef.current.src = audio;
  //     // console.log(audioRef.current.src);
  //     audioRef.current.playbackRate = changePercent;
  //     audioRef.current.play();
  //     // console.log(Date.now().toString());
  //     console.log(changePercent);
  //   }
  // }, [changePercent, play])

  // // audioRef.current.src = audio;
  // // console.log(audioRef.current.src)
  // // audioRef.current.playbackRate = changePercent;





  // function pickFile(lpm) {
  //   let array = [10, 20, 40, 60, 80, 100];
  //   let index = 0;
  //   for (let i in array) {
  //     if (lpm > array[i]) {
  //       index = Number(i);
  //     }
  //   }
  //   if (lpm - array[index] > array[index + 1] - lpm) {
  //     index++;
  //   }
  //   // console.log("index  ", index);
  //   // console.log(array[index]);
  //   let fileName = "../../../../assets/audio/wush_mp3/wush_" + array[index] + "_1min.mp3";
  //   // console.log(fileName);
  //   return [fileName, array[index]];
  // }

  const navigate = useNavigate();

  const rout = '/train_reading_level/rate'

  function onclickHandler() {
    console.log('button')
  }

  const shaulFuncs = {
    // onPlay: shaulOnPlay,
    // onPause: shaulOnPause,
    onComplete: shaulOnComplete
  }

  function shaulOnComplete() {
    navigate(rout, { replace: true })
  }

  return (
    <>
      <div className="level_page">
        <div>
          <Clock freeStyle={false} time={5} funcs={shaulFuncs}></Clock>
        </div>
        <div>
          <SquareButton>{LPM}</SquareButton>
        </div>
        <div>
          <img src={SoundBar} />
        </div>

{/* 
        <div>
          <audio autoplay ref={audioRef}> </audio>
          <p>{changePercent / (lpm / lpmFile)}</p>
          <p>{sec}</p>
          <button onClick={() => { setPlay(true); audioRef.current.play(); }}>play </button>
          <button onClick={() => { setPlay(false); audioRef.current.pause() }}>pause </button>
        </div> */}
      </div>
    </>
  )
}

export default ExerciseClock


// import React from 'react'
// import { useState, useEffect, useRef } from 'react';

// export default function PushUpTimer() {


//     const audioRef = useRef();
//     const [lpm, setLpm] = useState(9); // i have to set the LPM here

//     let [fileName, lpmFile] = pickFile(lpm);
//     useEffect(() => {
//         const audio = require(fileName + "");
//         audioRef.current.src = audio;
//         console.log(audioRef.current.src);
//     }, []);


//     const [changePercent, setChangePercent] = useState(lpm / lpmFile);
//     const [sec, setSec] = useState(1);
//     console.log("lpm ", lpm);
//     console.log("lpmFile ", lpmFile);
//     const [play, setPlay] = useState(false);
/////////////////////////////////////////////////////////////////////////////////////
//     function change() {
//         setTimeout(() => {
//             // let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
//             let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
//             // let count = changePercent * (1 + (0.125 / 180))

//             setChangePercent(count)
//         }, 1000);
//     }
////////////////////////////////////////////////////////////////////////////////////
//     useEffect(() => {
//         if (play) {
//             change();
//             setSec(sec + 1)
//             // debugger;
//             // audioRef.current.src = audio;
//             // console.log(audioRef.current.src);
//             audioRef.current.playbackRate = changePercent;
//             audioRef.current.play();
//             // console.log(Date.now().toString());
//             console.log(changePercent);
//         }
//     }, [changePercent, play])

//     // audioRef.current.src = audio;
//     // console.log(audioRef.current.src)
//     // audioRef.current.playbackRate = changePercent;

//     return (
//         <div>
//             <audio ref={audioRef}> </audio>
//             <p>{changePercent / (lpm / lpmFile)}</p>
//             <p>{sec}</p>
//             <button onClick={() => { setPlay(true); audioRef.current.play(); }}>play </button>
//             <button onClick={() => { setPlay(false); audioRef.current.pause() }}>pause </button>

//         </div>)
// }
////////////////////////////////////////////////////////////////////////////////////
// function pickFile(lpm) {
//     let array = [10, 20, 40, 60, 80, 100];
//     let index = 0;
//     for (let i in array) {
//         if (lpm > array[i]) {
//             index = Number(i);
//         }
//     }
//     if (lpm - array[index] > array[index + 1] - lpm) {
//         index++;
//     }
//     // console.log(index);
//     let fileName = `./wush_mp3/wush_${array[index]}_1min.mp3`; // the real path need to be added

//     return [fileName, array[index]];
// }
