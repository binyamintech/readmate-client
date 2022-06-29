import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from '../../src/context/context'

// Creator : Team F - Asael

export default function UseRedirectValidation(url, navigateTo) {
    // const [data, setData] = useState(false) //option to return data
    // const [loading, setLoading] = useState(false)  // option to return loading
    const Navigate = useNavigate();
    navigateTo = "/Instructions";
    
     function GetData() {
        const localDataContext = useContext(dataContext)
    useEffect(() => {
            console.log('dsadasasd');
            console.log(localDataContext.assesmentResults[0].result.WPM);
            // setLoading(true)
      // console.log(1); // dev testing status
      // setData(res)
      // setLoading(false)
      // check if data is not null or empty
      if (!localDataContext.assesmentResults[0].result.WPM) {
        return Navigate(navigateTo);
        // if it is empty then navigate to navigateTo
      }
    }, []);
    }
    GetData();
    // console.log("navigateTo"); // dev testing status
}
