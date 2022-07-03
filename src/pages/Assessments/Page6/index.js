import ButtonA from "../../../components/common/ButtonA";
import styles from "../Page6";
import Result from "./Result.svg";
import RatingAndScore from "../../../components/common/ReatingAndScore";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dataContext } from '../../../context/context'


// Creator : Team A - Efart
function Page6() {

  const localDataContext = useContext(dataContext)
  useEffect(() => {
    localDataContext.changePageName('Page 6')
  }, [])

  const l = useLocation()
  const n = useNavigate()

  const nextPage = () => {
    n('/dashboard')
  }


  console.log(l.state);
  return (
    <div className={styles.page6}>
      <div>
        <img src={Result} alt="" className={styles.img} />
      </div>
      <div className={styles.ratingAndScore}>
        <RatingAndScore wpm={120} std={5} compScore={8} className={styles.front} />
      </div>
      < ButtonA name={"Go to Dashboard"} startFunction={() => nextPage()} />
    </div>

  )
  {/* <SubmitBtn
        path={"/dashboard"}
        name={"Go to Dashboard"}
        onclick={() => {}}
      /> */}
  // </div>
  ;
}

export default Page6;
