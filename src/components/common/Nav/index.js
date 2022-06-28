import styles from "./style.module.css";

import { BsColumnsGap } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { NavButton } from "../NavButton/NavButton";

import { NavHead } from "../NavHead";

export const NavBar = (props) => {
  return (
    <div className={`${styles.box}`}>
      <NavHead setClose={props.setClose} />
      <ul>
        <li className={`${styles.btn}`}>
          <NavButton
            icon={<BsColumnsGap className={`${styles.icon}`} size="30px" />}
            text="Dashboard"
            link="Dashboard"
          />
        </li>
        <li className={`${styles.btn}`}>
          <NavButton
            icon={<FiSettings className={`${styles.icon}`} size="30px" />}
            text="Settings"
            link="Settings"
          />
        </li>
        <li className={`${styles.btn}`}>
          <NavButton
            icon={<FaRegAddressBook className={`${styles.icon}`} size="30px" />}
            text="Contact Us"
            link="Contact Us"
          />
        </li>
        <li className={`${styles.btn}`}>
          <NavButton
            icon={<MdLogout className={`${styles.icon}`} size="30px" />}
            text="Sign Out"
            link="Sign Out"
          />
        </li>
      </ul>
    </div>
  );
};
