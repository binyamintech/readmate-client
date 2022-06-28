import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubmitBtn from "../../../components/common/SubmitBtn";
import "./mosheModels.css";
import image from "./Resuil vector.png";
import image2 from "./Vector (1).png";
import image4 from "./Vector (4).png";
// import image3 from "./Vector (3).png";
import image3 from "./Line 237 (Stroke).png";

// import {useEffect} from React
// Creator : Team G - Shmuel
function Results(props) {
  // const [setPageName] = useContext(pageNameContext)}
  // setPageName("Result Summary");
  const avg = 9;
  const dailyAvg = 12;
  const testNum = 5;
  const [totalAvg, setTotalAvg] = useState();
  useEffect(() => {
    setTotalAvg((avg + dailyAvg) / (testNum + 1).toFixed(1));
  }, [dailyAvg]);
  const updateDB = () => {
   console.log("fhdgfjhdf")
  };
  return (
    <>
      <img className="train-focus-result-image" src={image} alt="img"></img>
      <div className="rectangle1">
        <div className="image2">
          <img src={image2} height="25%"></img>
          <img src={image3} width="30%" height="15%"></img>
          <div className="person">
            <span className="circle"></span>
            <img src={image4} height="40%"></img>
          </div>
        </div>
        <h5 className="text">Comfortable Reading</h5>
        <span className="avg">
          <b>{totalAvg} </b>
        </span>
      </div>
     
        <SubmitBtn className="btn" path="/train-focus/calibration" name = "Done"  onclick={updateDB} />
     
    </>
  );
}

export default Results;
