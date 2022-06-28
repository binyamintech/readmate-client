import styles from './style.module.css';
import FooterStart from '../../../components/common/FooterStart';
// import './style.css';
// import  useContext from 'react';
// import { pageNameContext } from '../../../components/common/';
// import FooterStart from '../../../components/common/FooterStart';
import group from './group.jpg';
import { useNavigate,Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import UmooveApi from '../../../components/api/UmooveApi';
// Creator : Team A -efrat & Yehoantan
function Page3() {
    const l=useLocation()
    
    const navigate = useNavigate()
    let videoRef = useRef()
    const [stream,setStream]=useState()
    let count=0;
    let sucsses
    useEffect(() => {
        UmooveApi.API_loadUmooveLibrary()
        setTimeout(()=>{
            setStream( UmooveApi.API_getUmooveStream());
        },2000)
    }, [])
    useEffect(()=>{ 
        console.log(stream);
        console.log(videoRef.current);
        if(stream){
            videoRef.current.src = stream
        }
    },[stream,videoRef])
    const start=()=>{
        UmooveApi.API_getUmooveTracking()
        const interval=setInterval(() => {
            console.log(count);
            if(count<100){
                clearInterval(interval)
            }
             sucsses=  UmooveApi.API_getUmooveTracking()
           if(sucsses===true){
            clearInterval(interval)
            navigate("/teama/page4",l.state.data)
           }
           count ++
        }, 1000);
    }
    // start()
    // const [pageName, setPageName] = useContext(pageNameContext) //adduming contect is in use
    return (
        <div>
            <div>
                <div className={styles.camera}>
                    <video ref={videoRef} srcObject={stream} />
                </div>
                <Link to="/teama/page4"> <button> start now! </button></Link>
                <FooterStart route ="/teama/page4" startFunction={() => {console.log(":()");}} title="Start now" explanation="hdnvdjnjrtnvjsdsdjkdfnjsnjknsdfjknsdfjsdkf" img={group} />
                <img src={group} alt='' />
            </div>
        </div>
    )
}


export default Page3;