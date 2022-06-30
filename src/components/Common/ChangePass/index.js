import { Link } from "react-router-dom";
import "./style.css";

export default function ChangePass() {
  return (
    <Link to="change-password">
      <div className="note">Change Password</div>
    </Link>
  );
}
