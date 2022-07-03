import styles from './style.module.css'
// import TitleRead from '../../../components/common/TitleRead'
import ButtonA from '../../../components/common/ButtonA'
import { useContext, useEffect, useState } from 'react'
import '../../../components/api/UmooveApi'
import { dataContext } from '../../../context/context'
import UmooveApi from '../../../components/api/UmooveApi'
import { useNavigate, useLocation } from 'react-router-dom';

// Creator : Team A - Amos

function Page4() {


    const localDataContext = useContext(dataContext)
    useEffect(() => {
        localDataContext.changePageName('Page 4')
    }, [])

    const l = useLocation()
    console.log(l.state.data);
    console.log("page4" + l.state);
    const navigate = useNavigate();

    useEffect(() => { UmooveApi.API_startReading() }, [])
    const nextPage = () => {
        console.log("clicked", "that what i send :", { state: { data: l.state.data } });
        let mspr = UmooveApi.API_stopReading();//לבדוק
        console.log("x:", mspr);
        {
            UmooveApi.API_stopUmoove();
            console.log(l.state.data);
            navigate('/teama/page5', { state: [{ data: l.state.data }, { mspr: mspr }] });
        }
    }

    // console.log(`${l.state.data.img}`)

    return <>
        <div className="Page4" >

            {/* //Header - import whith props - "comprehensions" */}

            <div className="TitleRead">
                {/* <TitleRead /> */}
            </div>
            <div>
                <img className={styles.img} src={require(`../../../assets/img/exams/${l.state.data.img}`)} alt="" />
            </div>
            <ButtonA name={"done"} startFunction={() => nextPage()} />
        </div>
    </>
}

export default Page4