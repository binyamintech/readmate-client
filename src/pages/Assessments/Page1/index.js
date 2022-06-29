// import styles from './style.module.css'
import "./style.css";
import FooterStart from "../../../components/common/FooterStart";
import Frame from "./Frame.jpg";
import student from "./student.jpg";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import UmooveApi from "../../../components/api/UmooveApi";
import { useNavigate } from "react-router-dom";
import data from './data'
// import { pageNameContext } from '../../../components/layout/Layout';

// Creator : Team A - Daniel
export default function Page1() {
    // const pageName = useContext(pageNameContext)
    // pageName.setPageName("assessments Test")
    let navigate = useNavigate()

    useEffect(() => {

        // fetch()
        // .then()
    }, []);
    const startFunction = () => {
        navigate('/teama/page3', { state: { data: data } })
    }
    return (
        <div>
            <img className="img-page1" src={student} alt="" />
            <br />
            <FooterStart
                route="/teama/page3"
                startFunction={startFunction}
                title='START'
                explanation="Scelerisque enim purus ipsum at amet, et mauris, est. Quisque interdum sollicitudin ultrices pellentesque a imperdiet sapien."
                img={Frame}
            />
        </div>
    );
}


