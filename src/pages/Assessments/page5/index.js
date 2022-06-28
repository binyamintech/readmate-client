import React from 'react'
import styles from "./style.module.css";
import QuestionBoard from '../../../components/common/QuestionBoard'
import SubmitBtn from '../../../components/common/SubmitBtn'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import Calc from '../Calc';
export default function Page5() {
    let location = useLocation();
    const data=location.state.exam;
    console.log(data)
    function Calc() {
        // server
        const numberOfLettersPerLine = [40, 50, 44, 80, 54, 75, 42, 14];
        //from api
        const timePerLine = [5000, 8000, 7000, 1000, 2000, 3000];
        numberOfLettersPerLine.pop();
        numberOfLettersPerLine.shift();
        let wpm = [];
        let sum = 0;
        for (let i = 0; i < timePerLine.length; i++) {
            wpm.push(numberOfLettersPerLine[i] / 5 / ((timePerLine[i] / 1000) * 60));
            sum += timePerLine[i];
        }
        console.log(wpm);
        let avg = sum / timePerLine.length;
        let std = 0;
        for (let i = 0; i < wpm.length; i++) {
            std += (wpm[i] - avg) ** 2;
        }
        std = std ** 0.5;
        console.log("avg:" + avg);
        console.log("std:" + std);
        return [wpm,std,avg]
    }
    const [result, setResult] = useState([])
    const n = useNavigate();
   
    // const [arrOfAnswers,setarrOfAnswers]=useState([{orderNum:'',answer:''}])
    const arrOfAnswers = []
    let arr1 = [];
    arr1.length = 5;
    result.map((v, i) => {
        arr1[v.orderNum] = v;
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

        },
        {
            num: 5,
            ans: false

        },
        {
            num: 6,
            ans: false

        },
        {
            num: 7,
            ans: false

        }
    ]
    const checkResults = () => {
        let count = 0;
        ans.map((v, i) => {
            if (v.ans == arr1[(i + 1)].answer) {
                //    setarrOfAnswers({orderNum:v.orderNum,answer:true})
                arrOfAnswers.push({ orderNum: arr1.orderNum, answer: true })
                count++;
            }
            else {
                // setarrOfAnswers({orderNum:v.orderNum,answer:false})
                arrOfAnswers.push({ orderNum: arr1.orderNum, answer: false })
            }
        })
        // console.log(arr1)
        console.log(count);
        console.log(arrOfAnswers)
        let a=Calc()
        n('/page6', { state: { count: count, WPM: a[0], STD: a[1], AVG: a[2] } })
    }

    const arr = [1, 2, 3, 4, 5, 6, 7]
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
                <SubmitBtn  checkResults={checkResults} />
            </div>

        </>
    )
}
