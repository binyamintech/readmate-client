import './Style.css'
import React, {  useState, useRef } from 'react';
import DashboardBtn from '../../../components/common/DashboardBtn';
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../../../components/common/SubmitBtn';


  
// Creator : Team G - Orit F  
function CalibrateCam(){
    const halfImgWidth = 50
    const rightMargin = halfImgWidth-30
    const leftMargin = halfImgWidth+30
    //const userLogic = require('../BL/userBL')
  // const dragItem = useRef()
  const [posX, setPosX] = useState(window.innerWidth/2-halfImgWidth);
  const navigate = useNavigate();

// const drag = (e) => {
//         setPosX(e.clientX-halfImgWidth);
//   };

//   const dragEnd = (e) => {
//     setPosX(e.clientX-halfImgWidth);
//   };

  const touch = (e) => {
    if(e.changedTouches[0].clientX<=0){
        setPosX(0-rightMargin)
        return false;
    }
    else if(e.changedTouches[0].clientX >= window.innerWidth){
        let total = (window.innerWidth-leftMargin)
        setPosX(total)
        return false;
    }
    else
        setPosX(e.changedTouches[0].clientX-halfImgWidth); 
  };

  
  const touchEnd = (e) => {
    console.log("window.innerWidth"+window.innerWidth)
    if(e.changedTouches[0].clientX<=0){
        setPosX(0-rightMargin)
        return false;
    }
    if(e.changedTouches[0].clientX >= window.innerWidth){
        let total = (window.innerWidth-leftMargin)
        //console.log("bigger then width",total)
        setPosX(total)
        return false;
    }
    setPosX(e.changedTouches[0].clientX-halfImgWidth);
  };

  const onClickBtn=()=>{
    localStorage.setItem('posX', posX);
    console.log("send posX to DB. current posX="+posX)
     navigate('/train-focus/StartFocus');
    //userLogic.setCalibrateCam(mobileID, posX)
  }

   return (
    <div className='calibrateCam'>
        <div className='arrowMove2' >
            <div className='place' style={{left:posX+'px'}}
                onTouchMove={(e) => touch(e)}
                onTouchEnd={(e) => touchEnd(e)}
                draggable="false">
                <img className='dragImg' src={require("./moveDot.png")} alt=""/>
            </div>  
        </div>       
        <div className='arrowMove'>
            <span>Slide the arrow left/right so that it points at your camera</span>
        </div>
      {/* <DashboardBtn /> */}
      {/* <SubmitBtn name="continue" path="/train-focus/StartFocus" onclick={onClickBtn} /> */}
      <button id="btnContinue" onClick={onClickBtn} className="continueBtn">continue</button>
    </div>
   );
}


export default CalibrateCam