import { createContext } from "react";
import { tests } from "./fakeData";

const dataContext = createContext(tests);

//---נא לקבל שינויים של קונטקטס לpopup
const popupContext = createContext();
export { dataContext, popupContext }