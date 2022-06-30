import styles from './style.module.css'
// import TitleRead from '../../../components/common/TitleRead'
import ButtonA from '../../../components/common/ButtonA'
import { useContext, useEffect, useState } from 'react'
import '../../../components/api/UmooveApi'
// import { Link } from 'react-router-dom'
import UmooveApi from '../../../components/api/UmooveApi'
import { useNavigate, useLocation } from 'react-router-dom';
import { pageNameContext } from '../../../components/layout/Layout'

// Creator : Team A - Amos

function Page4() {

    const pageNameHeader = useContext(pageNameContext);
    pageNameHeader.setPageName("Comprehension");

    const l = useLocation()
    console.log(l);
    const navigate = useNavigate();

    const nextPage = () => {
        console.log("clicked", "that what i send :", { state: { data: l.state.data.data } });
        let mspr = UmooveApi.API_stopReading();//לבדוק
        console.log("x:", mspr);
        {
            UmooveApi.API_stopUmoove();
            // console.log("reading info: ", res);
            navigate('/teama/page5', { state: [{ data: l.state.data.data }, { mspr: mspr }] });
        }
    }
    useEffect(() => { UmooveApi.API_startReading() }, [])

    console.log(`${l.state.data.data.img}`)

    return <>
        <div className="Page4" >

            {/* //Header - import whith props - "comprehensions" */}

            <div className="TitleRead">
                {/* <TitleRead /> */}
            </div>
            <div>
                <img className={styles.img} src={require(`../../../assets/img/exams/${l.state.data.data.img}.png`)} alt="" />
            </div>
            <ButtonA name={"done"} startFunction={() => nextPage()} />
        </div>
    </>
}

export default Page4