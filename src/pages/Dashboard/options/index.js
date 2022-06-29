import "./style.css";

import BtnAssessment from "./BtnAssessment";
import BtnOptions from "./BtnOptions";
import { FiUnlock } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import icon1 from "../../../assets/img/dashboard icons/icon1.png";
import icon2 from "../../../assets/img/dashboard icons/icon2.png";
import icon3 from "../../../assets/img/dashboard icons/icon3.png";
import icon4 from "../../../assets/img/dashboard icons/icon4.png";
import { useEffect, useState } from "react";
function Box1() {
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState({ available: false, days: 2 });

  // creator: nehorai, team f , chane the remote in path, use /  inside path

  const button = [
    { name: "Train Reading", icon: icon1, path: "/" },
    { name: "Train Focus", icon: icon2, path: "Start-focus/StartFocus" },
    { name: "Weekly Assessment", icon: FiFileText, path: "/" },
    { name: "Freestyle", icon: icon4, path: "/" },
  ];
  useEffect(() => {
    async function caldulateDate() {
      try {
        let lastTest = await fetch();
        lastTest = lastTest.now();
        let currentTime = Date.now();
        let res = Math.floor((currentTime - lastTest) / (24 * 3600 * 1000));
        res <= 7
          ? setAssessment({ days: res, available: true })
          : setAssessment({ days: res, available: false });
      } catch (err) {
        console.log("Failed to pull information from server");
      }
    }
    // caldulateDate();
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
                    box=" bb box1"
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
                    box=" bb box2"
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
