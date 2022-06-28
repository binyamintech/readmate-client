import styles from "./style.module.css";

// Creator : Team H - batya
export default function RoundedButton(props) {
  return (
    <>
      {props.isplay ? (
        <button
          className={styles.RoundedButton}
          onClick={() => {
            props.setIsPlay(!props.isplay);
          }}
        >
          {" "}
          ||{" "}
        </button>
      ) : (
        <button
          className={styles.RoundedButtonPlay}
          onClick={() => {
            props.setIsPlay(!props.isplay);
          }}
        >
          {" "}
          ▶{" "}
        </button>
      )}
    </>
  );
}