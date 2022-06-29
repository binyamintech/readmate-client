import styles from "./style.module.css";
import Clock from "../../../components/common/Clock";
import SoundFooter from "../../../components/common/SoundFooter"
import React from "react";
import {useEffect, useState, useRef} from "react"


// Creator : Team H - Nurit & Milka & Batia
function Training() {
  
  const [lpm,setLpm] = useState(52) // we have to pull it from the server!!!!!!!!
  let fileName = pickFile(lpm); // return a Number - indicates which file to require 
  const file = require(`../../../assets/wush_mp3/wush_${fileName}_1min.mp3`);
  const [audio, setAudio] = useState(new Audio(file));  //rewrite??
  
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

  function change() {
    

  }

function onPlay(){
  change();
  // audioRef.current.play(); //not working on 
  // audioRef.current.playbackRate = changePercent;
  audio.play();
  // audio.playbackRate(6)

}

function onPause(){
audio.pause();  console.log(file);
}

function onComplete(){
  console.log("onComplete")
}

const freeStyleFuncs = {
  onPlay: onPlay, //will turn on the music + remove button and add footer
  onPause: onPause, //will pause the music + remove footer and add button
  rapid: (newLpm)=>{setLpm(newLpm); console.log("rapid")}, // what to send when freeStyle false??
  onComplete: onComplete
}


  return (
    <>
    {/* <audio playbackRate={1} ref={audioRef}> </audio> */}
    <Clock freeStyle={true} time={180} funcs={freeStyleFuncs}  initRapidValue={lpm} ></Clock>
    <SoundFooter song = {file}></SoundFooter>
    </>
  );
}

export default Training;



