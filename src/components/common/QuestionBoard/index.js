import { useState } from 'react'
import styles from './style.module.css'

// Creator : Team A - Amos
function QuestionBoard({setResult ,result,i,}) {
    // const [result,setResult]=useState()
    
    return <>
        {/* <div className="Questionboard"> */}
        <div className={styles.container}>
            <div className={styles.Rectangle78}> </div>
            <div className={styles.Rectangle77}></div>
            <div className={styles.QuestionBoardText}><p>some question text hear</p></div>
            <div onClick={(e)=>{setResult([...result,{title:"",orderNum:(i+1),answer:true}])}} className={styles.Truebtn}>true
            </div>
            <div onClick={(e)=>{setResult([...result,{title:"",orderNum:(i+1),answer:false}])}} className={styles.Falsebtn}>false
            </div>
        </div>
        {/* </div> */}
    </>
}


export default QuestionBoard