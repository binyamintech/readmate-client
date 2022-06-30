
import React from 'react'
import styles from "./style.module.css";
import QuestionBoard from '../../../components/common/QuestionBoard'
import ButtonA from '../../../components/common/ButtonA'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


// import Calc from '../Calc';
export default function Page5() {
    let location = useLocation();
    console.log(location);
    const data = location.state;
    console.log("page 5 : ", data)
    // console.log(data.exam[0].questions)
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
        return [wpm, std, avg]
    }
    const [result, setResult] = useState([])
    const n = useNavigate();

    const arrOfAnswers = []
    let arr1 = [];
    arr1.length = 10;
    result.map((v, i) => {
        arr1[v.orderNum] = v;
    })

    const checkResults = () => {
        console.log("בחייאת");
        n('/teama/page6', { state: { count: "count, WPM: a[0], STD: a[1], AVG: a[2] " } })
        arrOfAnswers.push({ orderNum: arr1.orderNum, answer: false })
        let count = 0;
        (data.questions).map((d, i) => {
            if (d.questions[i].answer == arr1[(i + 1)].answer) {
                arrOfAnswers.push({ orderNum: arr1.orderNum, answer: true })
                count++;
            }
            else {
                arrOfAnswers.push({ orderNum: arr1.orderNum, answer: false })
            }
        })
        // console.log(arr1)
        // console.log(count);
        // console.log(arrOfAnswers)
        let a = Calc()
        // n('/teama/page6', { state: { count: count, WPM: a[0], STD: a[1], AVG: a[2] } })
    }

    const arr = data[0].data.questions
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <div className={styles.questions}>
                {arr.map((v, i) => {
                    return (
                        <QuestionBoard title={v.title} key={i} result={result} setResult={setResult} i={i} arr={arr1} />
                    )
                })}
            </div>
            <div>
                <ButtonA name={"done"} startFunction={() => checkResults()} />
            </div>
            {
                console.log(result)

            }
            {
            }

        </>
    )

}
