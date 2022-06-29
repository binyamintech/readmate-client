import styles from './styles.module.css'
import React from 'react';
import song from "./song.mp3"
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';
import { AudioVisualizer, AudioVisualizerCommonProps, AudioVisualizerEvents } from 'react-audio-visualizers-core';
import song10 from "../../../pages/FreeStyle/Training"
// Creator : Team H - batya




export default function SoundFooter(props) {
  const onEvent = (event, payload) => {
    if (event === AudioVisualizerEvents.playing) {
        console.log('The audio started playing!!');
    } else if (event === AudioVisualizerEvents.error) {
        console.log('The following error occured:', payload);
    } 
  };
  return (
    <div className= {styles.bigSiundFooter}>
       <div className= {styles.soundFooter}>
          <SpectrumVisualizer
              audio={props.song}
              theme={SpectrumVisualizerTheme.roundBars}
              colors={['orange', 'white']}
              iconsColor="orange"
              backgroundColor="white"
              // showMainActionIcon
              showLoaderIcon
              // numBars={10}
              // barWidth={"20px"}
              highFrequency={8000}
onEvent = {onEvent}
></SpectrumVisualizer>
              
      </div>
      </div>
  );
}