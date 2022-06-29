import styles from "./style.module.css";

// Creator : Team H - batya
export default function RoundedButton(props) {
  return (
    <>
      {props.isPlay ? (
        <button
          className={styles.RoundedButton}
          onClick={() => {
            props.setIsPlay(!props.isPlay);
          }}
        >
          {" "}
          ||{" "}
        </button>
      ) : (
        <button
          className={styles.RoundedButtonPlay}
          onClick={() => {
            props.setIsPlay(!props.isPlay);
          }}
        >
          {" "}
          ▶{" "}
        </button>
      )}
    </>
  );
}