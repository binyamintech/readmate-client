import styles from "./style.module.css";
import logo1 from "../../../assets/img/logo/image 1.png";
import logo2 from "../../../assets/img/logo/image 2.png";
// import { NavBackButt } from "../NavBackButt";

export const NavHead = (props) => {
  ///

  return (
    <div className={`${styles.head}`}>
      <img className={`${styles.logoImg}`} src={logo1} alt="" />
      <img className={`${styles.logoImg2}`} src={logo2} alt="" />
      {/* <NavBackButt setClose={props.setClose} /> */}
    </div>
  );
};
