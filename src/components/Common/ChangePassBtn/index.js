import { Link } from "react-router-dom";
import "./style.css";

export default function ChangePass() {
  return (
    <Link to="changePassword">
      <div className="note">Change Password</div>
    </Link>
  );
}
