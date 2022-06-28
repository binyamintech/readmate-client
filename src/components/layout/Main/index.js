import Test from "../../test/Test";
import Nav from "../Nav";
import Popup from "../Popup";
import { Route, Routes } from "react-router-dom";
import TeamA from "../../teams/TeamA";
import Page1 from "../../../pages/Assessments/Page1";
import Page6 from "../../../pages/Assessments/Page6";
import Page5 from "../../../pages/Assessments/page5";
import Page4 from "../../../pages/Assessments/Page4";
import Page3 from "../../../pages/Assessments/Page3";
import Header from "../header";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";

function Main() {
  return (
    <>
      <Header />

      content
      <Routes>
        {/* Team A */}
        <Route path="teama">
          <Route path="page1" element={<Page1 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="page5" element={<Page5 />} />
          <Route path="page6" element={<Page6 />} />
          <Route index element={<TeamA />} />
        </Route>

        {/* Team B */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team C */}
        <Route path="train_reading_level">
          {/* <Route index element={<>team's components</>} /> */}
          <Route path="exercise" element={<Exercise />} />
          <Route path="exercise_clock" element={<ExerciseClock />} />
          <Route path="rate" element={<ExerciseRate />} />
          <Route path="question" element={<ExerciseQuestion />} />
          <Route path="result" element={<ExerciseResult />} />
        </Route>

        {/* Team D */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team E */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team F */}
        <Route path="/teamf">
          {/* <Route index element={<TeamF />} />
          <Route path="components-path" element={<TeamF />} /> */}
        </Route>

        {/* Team G */}
        <Route path="/train-focus">
          <Route index element={<>team's components</>} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="StartFocus" element={<StartFocus />} />
          <Route path="result" element={<Results />} />
          <Route path="calibration" element={<CalibrateCam />} />
          {/* <Route path="/result" element={<Results />} /> */}
        </Route>

        {/* Team H */}
        <Route path="/teams/TeamH">
          <Route index element={<TeamH />} />
          <Route path="/teams/TeamH/Training" element={<Training />} />
          {/* <Route path="components-path" element={<>team's components</>} /> */}
        </Route>

        {/* Test */}
        <Route path="/test" element={<Page1/>} />
      </Routes>

      <Nav />
      {/* <Popup /> */}
    </>
  );
}
export default Main;
