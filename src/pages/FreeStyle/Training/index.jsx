import styles from "./style.module.css";
import Clock from "../../../components/common/Clock";
import SoundFooter from "../../../components/common/SoundFooter";
import React from "react";
import { useEffect, useState, useRef } from "react";

// Creator : Team H - Nurit & Milka & Batia
function Training() {
  const [lpm, setLpm] = useState(52); // we have to pull it from the server!!!!!!!!
  let fileName = pickFile(lpm);
  const file = require(`/wush_${fileName}_1min.mp3`);
  const [audio, setAudio] = useState(new Audio(file));

  function pickFile(lpm) {
    let array = [10, 20, 40, 60, 80, 100];
    let index = 0;
    for (let i in array) {
      if (lpm >= array[i]) {
        index = Number(i);
      }
    }
    if (lpm - array[index] > array[index + 1] - lpm) {
      index++;
    }
    console.log(array[index]);
    // let fileName = `./wush_mp3/wush_${array[index]}_1min.mp3`;
    return array[index];
  }

  // const files = {10: audio10 , 20: audio20 , 40: audio40 , 60: audio60, 80 : audio80 , 100 : audio100}
  // function change() {
  // console.log("change");
  //   setTimeout(() => {
  //       // let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
  //       let count = changePercent + ((0.125 * (lpm / lpmFile)) / 180)
  //       // let count = changePercent * (1 + (0.125 / 180))
  //       changePercent = count;
  //       console.log("hi");
  //   }, 1000);
  // }

  function onPlay() {
    // audioRef.current.play(); //not working on
    // audioRef.current.playbackRate = changePercent;
    audio.play();
    audio.playbackRate = lpm / fileName; //milka
    console.log(audio.playbackRate);
    // change();
    // audio.playbackRate(6)
  }

  function onPause() {
    // audioRef.current.pause();
    audio.pause();
    console.log(file);
  }

  function onComplete() {
    console.log("onComplete");
  }

  const freeStyleFuncs = {
    onPlay: onPlay, //will turn on the music + remove button and add footer
    onPause: onPause, //will pause the music + remove footer and add button
    rapid: (newLpm) => {
      setLpm(newLpm);
      console.log("rapid");
      console.log(file);
    }, // what to send when freeStyle false??
    onComplete: onComplete,
  };

  return (
    <>
      {/* <audio playbackRate={1} ref={audioRef}> </audio> */}
      <Clock
        freeStyle={true}
        time={180}
        funcs={freeStyleFuncs}
        initRapidValue={lpm}
      ></Clock>
      <SoundFooter></SoundFooter>
    </>
  );
}

export default Training;
