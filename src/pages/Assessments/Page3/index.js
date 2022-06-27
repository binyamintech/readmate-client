import styles from './style.module.css';
import FooterStart from '../../../components/common/FooterStart';
// import './style.css';
// import  useContext from 'react';
// import { pageNameContext } from '../../../components/common/';
// import FooterStart from '../../../components/common/FooterStart';
import group from './group.jpg';
import { useNavigate,Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import UmooveApi from '../../../components/api/UmooveApi';
// Creator : Team A -efrat & Yehoantan
function Page3() {
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
            navigate=("/page4")
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
                <Link to="/page4"> <button> start now! </button></Link>
                <FooterStart />
                <img src={group} alt='' />
            </div>
        </div>
    )
}


export default Page3;