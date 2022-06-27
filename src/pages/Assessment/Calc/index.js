import "./style.css";

import React from "react";

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

export default Calc;
