import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Creator : Team F - Asael

// MOCK FETCH
const myFetch = (url) => {
  url = true; // testing var
  return url;
  // צריך להתאים ל fatch כשנדע איך לקבל את הנתונים
  // Promise((resolve, reject) => {
  //     setTimeout(() => resolve({ didTest: false }), 200);
  // })
};
// ------

export default function UseRedirectValidation(url, navigateTo) {
  // const [data, setData] = useState(false) //option to return data
  // const [loading, setLoading] = useState(false)  // option to return loading
  const Navigate = useNavigate();
  navigateTo = "/Instructions";

  useEffect(() => {
    async function getData() {
      // setLoading(true)
      // console.log(1); // dev testing status
      const res = await myFetch(url);
      // console.log(2); // dev testing status
      // setData(res)
      // setLoading(false)
      // check if data is not null or empty
      if (!res) {
        return Navigate(navigateTo);
        // if it is empty then navigate to navigateTo
      }
    }
    getData();
    // console.log("navigateTo"); // dev testing status
  }, []);
}
