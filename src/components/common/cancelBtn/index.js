import styles from './style.module.css'
import {Link} from "react-router-dom"

// Creator : Team F - Asael

function CancelBtn() {
        
        return(
        <Link to="/dashboard"><div>
                <button type="button" className={`${styles.frame7}`} >Cancel</button>
        </div></Link>)
};

export default CancelBtn