import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

// Creator : Team A - Amos
function QuestionBoard({ setResult, result, i }) {
    const [isActive, setIsActive] = useState(false);
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
        {/* <div className="Questionboard"> */}
        <div className={styles.container}>
            <div className={styles.Rectangle78}> </div>
            <div className={styles.Rectangle77}></div>
            <div className={styles.QuestionBoardText}><p>hfdghf jfghf jfhghjf jfjf</p></div>
            <div style={{backgroundColor:isActive?'orenge':'white'}} onClick= { handleClick }  className={styles.Truebtn}>true
            </div>
            <div onClick= { handleClick2 } className={styles.Falsebtn}>false
            </div>
        </div>
        {/* </div> */}
    </>
}


export default QuestionBoard