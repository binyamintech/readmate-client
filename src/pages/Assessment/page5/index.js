import React from 'react'
import styles from "./style.module.css";
import QuestionBoard from '../../../components/Common/QuestionBoard'
import SubmitBtn from '../../../components/Common/SubmitBtn'
import { useState } from 'react';

export default function Page5() {
    const [result, setResult] = useState([])
    // const [arrOfAnswers,setarrOfAnswers]=useState([{orderNum:'',answer:''}])
    const arrOfAnswers = []
    // result.length=4;
    let arr1 = [];
    arr1.length = 5;
    result.map((v,i)=>{
        arr1[v.orderNum]=v;
        console.log(arr1)
    })
    const ans = [
        {
            num: 1,
            ans: true
        },
        {
            num: 2,
            ans: false

        }, {
            num: 3,
            ans: true

        },
        {
            num: 4,
            ans: false

        }]
    const checkResults = () => {

        let count = 0;
        ans.map((v, i) => {
            if ( v.ans == arr1[(i+1)].answer) {
                //    setarrOfAnswers({orderNum:v.orderNum,answer:true})
                arrOfAnswers.push({ orderNum: arr1.orderNum, answer: true })
                count++;
            }
            else {
                // setarrOfAnswers({orderNum:v.orderNum,answer:false})
                arrOfAnswers.push({ orderNum: arr1.orderNum, answer: false })

            }

        })
        // console.log(arrOfAnswers)
        // console.log(count)
        console.log(arr1)
        console.log(count);
        console.log(arrOfAnswers)
        return count;
    }

    const arr = [1, 2, 3, 4]
    return (
        <>
            <ul className={styles.questions}>
                {arr.map((v, i) => {
                    return (
                        <div style={{ position: 'relative', gap: '50px' }}>
                            <li><QuestionBoard result={result} setResult={setResult} i={i} /></li>
                            {/* <br/> */}
                        </div>
                    )
                })}
            </ul>
            <div>
                <SubmitBtn checkResults={checkResults} />

            </div>
            {

            }

        </>
    )
}
