import styles from "./style.module.css";
import Clock from "../../../components/common/Clock";
import SoundFooter from "../../../components/common/SoundFooter"


// shaulFuncs = {
//   onPlay: shaulOnPlay,
//   onPause: shaulOnPause,
//   onComplete: shaulOnComplete,
//   rapid: rapidFunc
// }

// Creator : Team H - Nurit & Milka
function Training() {
  return (
    <>
      <Clock freeStyle={true} time={180} ></Clock>
      <SoundFooter></SoundFooter>
    </>
  );
}

export default Training;
