import styles from "./style.module.css";

// Creator : Team H - batya
export default function SquareButton(props) {
  return (
    <>
      <button className={styles.squareButton}>{props.children} </button>
    </>
  );
}
