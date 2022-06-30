import styles from "./style.module.css";
import Clock from "../../../../components/common/Clock";
// import SoundFooter from "../../../../../components/common/SoundFooter"
import React, { useContext } from "react";
import { useState } from "react"
import { dataContext } from "../../../../context/context";
import SquareButton from "../../../../components/common/SquareButton";
import { useLocation, useNavigate } from "react-router-dom";


// Creator : Team C bu the amazing Help from Nurit & Milka
function ExerciseClock() {

  const LPM2 = useLocation()
  //   // console.log(LPM2.state.LPM);
  const rapidValue = 16 // LPM2.state.LPM

  // const localDataContext = useContext(dataContext)
  // const tr = localDataContext.userDetails.TR
  // console.log('userLpm', tr[tr.length - 1]);

  const [lpm, setLpm] = useState(rapidValue)
  // const [lpm, setLpm] = useState(tr[tr.length - 1].Value)
  let fileName = pickFile(lpm);
  const file = require(`../../../../assets/audio/wush_mp3/wush_${fileName}_1min.mp3`);

  const [audio, setAudio] = useState(new Audio(file));
  const [playing, setPlaying] = useState(0)

  function pickFile(lpm) {
    let array = [10, 20, 40, 60, 80, 100];
    let index = 0;
    for (let i in array) {
      if (lpm > array[i]) {
        index = Number(i);
      }
    }
    if (lpm - array[index] > array[index + 1] - lpm) {
      index++;
    }
    return array[index];
  }


  function onPlay() {
    audio.play();
    audio.playbackRate = lpm / fileName
    setPlaying(1)

  }

  function onPause() {
    audio.pause();
    // console.log(file);
    setPlaying(0) // soundfooter
  }

  // function rapid(newLpm) {
  //   setLpm(newLpm);
  //   console.log(file)
  //   audio.playbackRate = lpm / fileName
  //   console.log(audio.playbackRate);

  // }

  const objProps = { LPM: rapidValue }

  const route = '/train_reading_level/rate'
  const navigate = useNavigate()

  function onComplete() {
    audio.pause();
    navigate(route, { state: objProps })
  }

  const freeStyleFuncs = {
    onPlay: onPlay, //will turn on the music + remove button and add footer
    onPause: onPause, //will pause the music + remove footer and add button
    // rapid: rapid, // what to send when freeStyle false??
    onComplete: onComplete
  }


  return (
    <>
      {/* <audio playbackRate={1} ref={audioRef}> </audio> */}
      <Clock freeStyle={false} time={5} funcs={freeStyleFuncs} initRapidValue={lpm} ></Clock>
      <SquareButton><div className={styles.rapid}>{rapidValue}</div>LPM</SquareButton>
      {/* {playing ? */}
      {/* <SoundFooter song = {file}></SoundFooter> : <SubmitBtn type={"link"} name={"Done"} path = {"/teamH/graphDashboard"}></SubmitBtn>} */}
      {/* <SoundFooter song={file}></SoundFooter> */}
    </>
  );
}

export default ExerciseClock;



