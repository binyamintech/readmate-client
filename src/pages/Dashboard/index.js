import styles from './style.module.css'
import UseRedirectValidation from "../../hooks/useRedirectValidation"
import dashboard from "../../assets/img/dashboard icons/dashboard.jpeg"


// Creator : Team F - Asael


function Dashboard() {
    const res = UseRedirectValidation("url", "navto") // hook for check if user did test


    return (<div>
        Dashboard
        <div className={`${styles.dashboardPhoto}`}>
            <img src={dashboard} alt="dashboardPhoto" />
         </div>
    </div>
    )
}


export default Dashboard