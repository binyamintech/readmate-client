import "./style.css";

import BtnAssessment from "./BtnAssessment";
import BtnOptions from "./BtnOptions";
import { FiUnlock } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../../context/context";

import icon1 from "../../../assets/img/dashboard icons/icon1.png";
import icon2 from "../../../assets/img/dashboard icons/icon2.png";
import icon3 from "../../../assets/img/dashboard icons/icon3.png";
import icon4 from "../../../assets/img/dashboard icons/icon4.png";
import { useEffect, useState } from "react";
function Box1() {
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState({ available: false, days: 2 });

  const localDataContext = useContext(dataContext);

  function calculateDate(lastExam) {
    //creator shmuel asherov team-f
    function parserDate(str) {
      var mdy = str.split("/");
      return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }

    let curentTime = new Date().toLocaleDateString();
    curentTime = parserDate(curentTime);
    lastExam = parserDate(lastExam);

    var diffDays = curentTime.getDate() - lastExam.getDate();
    return diffDays;
  }

  // creator: nehorai, team f , chane the remote in path, use /  inside path

  const button = [
    { name: "Train Reading", icon: icon1, path: "/" },
    { name: "Train Focus", icon: icon2, path: "Start-focus/StartFocus" },
    { name: "Weekly Assessment", icon: FiFileText, path: "/" },
    { name: "Freestyle", icon: icon4, path: "/" },
  ];
  useEffect(() => {
    let lastExam =
      localDataContext.assesmentResults[
        localDataContext.assesmentResults.length - 1
      ].date;
    // try{   need to gate the data from the real  server
    //   fetch()
    //}
    //   catch(err){
    //     console.log(err)
    //   }
    // }
    let day = calculateDate(lastExam);
    day >= 7
      ? setAssessment({ available: true, days: day })
      : setAssessment({ available: false, days: day });
    console.log(assessment);
  }, []);

  // yishai

  return (
    <>
      <div className="grid-container">
        <>
          {button.map((v) => {
            if (v.name === "Weekly Assessment") {
              if (assessment.available) {
                return (
                  <BtnAssessment
                    name={v.name}
                    icon={v.icon}
                    path={v.path}
                    lock={FiUnlock}
                    box=" box box1"
                    color="white"
                  >
                    <button
                      className="btn-doNow"
                      onClick={() => {
                        navigate(v.path);
                      }}
                    >
                      Due now!
                    </button>
                  </BtnAssessment>
                );
              } else {
                return (
                  <BtnAssessment
                    name={v.name}
                    icon={v.icon}
                    path={v.path}
                    lock={FiLock}
                    box=" box box2"
                    color="blue"
                  >
                    <p className="color-btn-doAssessment">
                      Access in {assessment.days} days
                    </p>
                  </BtnAssessment>
                );
              }
            }
            return <BtnOptions name={v.name} icon={v.icon} path={v.path} />;
          })}
        </>
      </div>
    </>
  );
}

export default Box1;
