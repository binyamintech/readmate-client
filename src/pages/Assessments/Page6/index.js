import SubmitBtn from "../../../components/Common/SubmitBtn";
import styles from "./style.module.css";
import Result from "./Result.svg";
import RatingAndScore from "../../../components/Common/ReatingAndScore";
// import { useContext } from "react";
// import pageNameContext from "../../../components/layout/Layout";
// Creator : Team A - Efart
function Page6() {
  //   const [pageName, setPageName] = useContext(pageNameContext);
  //   setPageName("Result Summary");
  return (
    <div className={styles.page6}>
      <div>
        <img src={Result} alt="" className={styles.img} />
      </div>
      <div className={styles.ratingAndScore}>
        <RatingAndScore wpm={120} std={5} compScore={8} />
      </div>
      <SubmitBtn />
      {/* Go to Dashboard */}
    </div>
  );
}

export default Page6;
