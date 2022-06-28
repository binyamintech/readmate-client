import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

// Creator : Team A - Amos
function QuestionBoard({ setResult, result, i, title }) {
    const [isActive, setIsActive] = useState(false);
    const isActive1 = result[i]?.answer

    console.log(isActive1, "keren", i);

    const handleClick = () => {
        setIsActive(!isActive);
        setResult([...result, { title: "", orderNum: (i + 1), answer: true }])

    }
    const handleClick2 = () => {
        setIsActive(!isActive);
        setResult([...result, { title: "", orderNum: (i + 1), answer: false }])

    }
    // const Answer=()=>{
    //     setResult([...result, { title: "", orderNum: (i + 1), answer: true }])


    // }
    // const [result,setResult]=useState()

    return <>
        <div className={`${styles.QuestionBoard} back-purple right`}>
            <div className={styles.QuestionBoardText}><p>{title}</p></div>
            <div className={styles.buttons}>
                <button onClick={handleClick} className={`${isActive1 === true ? styles.active : null}`}>true
                </button>
                <button onClick={handleClick2} className={`${isActive1 === false ? styles.active : null}`}>false
                </button>
            </div>
        </div>
    </>
}


export default QuestionBoard