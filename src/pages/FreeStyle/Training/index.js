import styles from "./style.module.css";
import Clock from "../../../components/common/Clock";


// shaulFuncs = {
//   onPlay: shaulOnPlay,
//   onPause: shaulOnPause,
//   onComplete: shaulOnComplete,
//   rapid: rapidFunc
// }

// Creator : Team H - Nurit & Milka
function Temp() {
  return (
    <>
      <Clock freeStyle={true} time={180} ></Clock>
      <span>add footer here</span>
    </>
  );
}

export default Temp;
