// Creator : Team A - Daniel & Yehonatan
import styles from './style.module.css'

export default function TitleRead(props) {

  // הצבע השחור הוא דיפלטיבי
  // אם רוצים צבע כחול לשלוח -----> isBlue  = { true }

  return (
    <div className={`${styles.titleread} ${(props.isBlue ? styles.blue : styles.black)}`} >
      {props.title}
    </div>
  )
}