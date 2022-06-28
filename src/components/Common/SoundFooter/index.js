import styles from './styles.module.css'
import React from 'react';
import song from "./song.mp3"
// import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';

// Creator : Team H - batya

export default function SoundFooter() {
  return (
    <div className= {styles.bigSiundFooter}>
       <div className= {styles.soundFooter}>
          {/* <SpectrumVisualizer
              audio={song}
              theme={SpectrumVisualizerTheme.roundBars}
              colors={['orange', 'white']}
              iconsColor="orange"
              backgroundColor="white"
              // showMainActionIcon
              showLoaderIcon
              // numBars={10}
              // barWidth={"20px"}
              highFrequency={8000}
          ></SpectrumVisualizer> */}
      </div>
      </div>
  );
}