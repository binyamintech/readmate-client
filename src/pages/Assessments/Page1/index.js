import "./style.css";
import FooterStart from "../../../components/common/FooterStart";
import Frame from "./Frame.jpg";
import student from "./student.jpg";
import { useEffect, useContext } from "react";
import UmooveApi from "../../../components/api/UmooveApi";
import { useNavigate } from "react-router-dom";
import data from './data'
import { dataContext } from '../../../context/context'
// import { pageNameContext } from '../../../components/layout/Layout'

// Creator : Team A - Daniel

export default function Page1() {

    const localDataContext = useContext(dataContext)
    const header = localDataContext.changePageName
    let navigate = useNavigate()
    useEffect(() => {
        console.log('page 1:', localDataContext.assesmentsTemplates[0]);
        header('Page 1')
    }, [])

    const startFunction = () => {
        const testData = localDataContext.assesmentsTemplates[0];
        // console.log('data:', data, typeof data);
        navigate('/teama/page3', { state: { testData: testData } })
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


