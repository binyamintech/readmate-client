import React from 'react'
import styles from './style.module.css'
export default function YesBtn({ handleClick, yes, no }) {
    return (
        <div className={styles.buttons}>
            <button onClick={handleClick} >{yes}
            </button>
            <button onClick={handleClick} >{no}
            </button>
        </div>
    )
}
