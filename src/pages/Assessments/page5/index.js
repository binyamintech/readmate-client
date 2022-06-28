import React from 'react'
import styles from "./style.module.css";
import QuestionBoard from '../../../components/common/QuestionBoard'
import SubmitBtn from '../../../components/common/SubmitBtn'
import { useState } from 'react';

export default function Page5() {
    const [result, setResult] = useState([])
    // const [arrOfAnswers,setarrOfAnswers]=useState([{orderNum:'',answer:''}])
    const arrOfAnswers = []
    // result.length=4;
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

        }]
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

    return (
        <div>
            <div>Avg {avg}</div>
            <div>Std {std}</div>
        </div>
    );
}