import styles from "./style.module.css";
import UseRedirectValidation from "../../hooks/useRedirectValidation";
import dashboard from "../../assets/img/dashboard icons/dashboard.jpeg";
import Box1 from "./options";
// Creator : Team F - Asael

function Dashboard() {
  const res = UseRedirectValidation("url", "navto"); // hook for check if user did test

  return (
    <div>
      <Box1 />
    </div>
  );
}

export default Dashboard;
