// import styles from './style.module.css'
import './style.css'
import FooterStart from '../../../components/common/FooterStart';
import Frame from './Frame.jpg'
import student from './student.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import UmooveApi from '../../../components/api/UmooveApi'



// Creator : Team A - Daniel
function Page1() {
    useEffect(() => {
        UmooveApi.API_loadUmooveLibrary()
    }, [])

    return <div>
        Header prop="assessments Test"
        <img className='img-page1' src={student} alt='' /><br />
        <Link to="/page3">
            <button>START</button>
        </Link>
        <img src={Frame} alt='' />
        <FooterStart title="START" explanation="Scelerisque enim purus ipsum at amet, et mauris, est. Quisque interdum sollicitudin ultrices pellentesque a imperdiet sapien."
    img="Frame.png"/>

    </div>
}


export default Page1;