import { createContext } from "react";
import  fakeData  from "./fakeData";

const dataContext = createContext(fakeData);

//---נא לקבל שינויים של קונטקטס לpopup
const popupContext = createContext();
export { dataContext, popupContext }