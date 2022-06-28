import './moveDot.css'
import React, {  useState, useRef } from 'react';
import DashboardBtn from '../../../components/common/DashboardBtn';
import { useNavigate } from 'react-router-dom';


  
// Creator : Team G - Orit
function CalibrateCam(){
  const halfImgWidth = 50
  //const userLogic = require('../BL/userBL')
  // const dragItem = useRef()
  const [posX, setPosX] = useState(window.innerWidth/2-halfImgWidth);
  const navigate = useNavigate();

// const dragStart = (e) => {
//      console.log(dragItem.current.offsetLeft)
//      //e.dataTransfer.setDragImage(new Image(), 0, 0);
//   };
  const drag = (e) => {
    if(e.clientX!==undefined){
    console.log(e.clientX-halfImgWidth)
    setPosX(e.clientX-halfImgWidth);
  }
  else{
    console.log(e.changedTouches[0].clientX-halfImgWidth)
    setPosX(e.changedTouches[0].clientX-halfImgWidth);
    
  }
    //e.dataTransfer.setDragImage(new Image(), 0, 0);
    //dragItem.current.style.top = "90px"
    return false;
  };

  const dragEnd = (e) => {
    if(e.clientX!==undefined){
    //e.dataTransfer.setDragImage(new Image(), 0, 0);
    setPosX(e.clientX-halfImgWidth);
    }
    else{
      setPosX(e.changedTouches[0].clientX-halfImgWidth);
    }
  };

  const onClickBtn=()=>{
    console.log("send posX to DB. current posX="+posX)
     navigate('/train-focus/StartFocus');
    //userLogic.setCalibrateCam(posX)
  }

  return (
    <div className='calibrateCam'>
        <div className='arrowMove2' >
            <div className='place' style={{left:posX+'px'}}
                onDrag={(e) => drag(e)}
                onDragEnd={(e) => dragEnd(e)}
                onTouchMove={(e) => drag(e)}
                onTouchEnd={(e) => dragEnd(e)}
                draggable="false">
                <img src={require("./moveDot.png")} alt=""/>
            </div>  
        </div>       
        <div className='arrowMove'>
            <span>Slide the arrow left/right so that it points at your camera</span>
        </div>
      {/* <DashboardBtn /> */}
      <button id="btnContinue" onClick={onClickBtn}>continue</button>
    </div>
  );
}


export default CalibrateCam