import Test from "../../test/Test";
import Header from "../Header"
import Nav from "../Nav";
import { Route, Routes } from "react-router-dom"
import Exercise from "../../../pages/TrainReading/Level/Exercise"
import ExerciseClock from "../../../pages/TrainReading/Level/ExerciseClock"
import ExerciseQuestion from "../../../pages/TrainReading/Level/ExerciseQuestion"
import ExerciseRate from "../../../pages/TrainReading/Level/ExerciseRate"
import ExerciseResult from "../../../pages/TrainReading/Level/ExerciseResult"
import CalibrateCam from "../../../pages/TrainFocus/CalibrateCam";
import Results from "../../../pages/TrainFocus/TrainFocusResults";
import StartFocus from "../../../pages/TrainFocus/StartFocus/StartFocus";
import { pageNameContext } from "../Layout";
import { useContext } from "react";
import TeamA from "../../teams/TeamA";
import Page1 from "../../../pages/Assessments/Page1";
import Page6 from "../../../pages/Assessments/Page6";
import Page5 from "../../../pages/Assessments/Page5";
import Page4 from "../../../pages/Assessments/Page4";
import Page3 from "../../../pages/Assessments/Page3";


function Main() {
  const pageNameContextLocal = useContext(pageNameContext)
  return (
    <>
      {pageNameContextLocal.showHeader && <Header />}



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
        {/* <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route> */}

        {/* Team C */}
        {/* <Route path="train_reading_level"> */}
        {/* <Route index element={<>team's components</>} /> */}
        {/* <Route path="exercise" element={<Exercise />} />
          <Route path="exercise_clock" element={<ExerciseClock />} />
          <Route path="rate" element={<ExerciseRate />} />
          <Route path="question" element={<ExerciseQuestion />} />
          <Route path="result" element={<ExerciseResult />} />
        </Route> */}

        {/* Team D */}
        {/* <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route> */}

        {/* Team E
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route> */}

        {/* Team F */}
        {/* <Route path="/teamf">
          <Route index element={<TeamF />} />
          <Route path="components-path" element={<TeamF />} />
        </Route> */}

        {/* Team G
        <Route path="/train-focus">
          <Route index element={<>team's components</>} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="StartFocus" element={<StartFocus />} />
          <Route path="result" element={<Results />} />
          <Route path="calibration" element={<CalibrateCam />} />
          <Route path="/result" element={<Results />} />
        </Route> */}

        {/* Team H */}
        {/* <Route path="/teams/TeamH">
          <Route index element={<TeamH />} />
          <Route path="/teams/TeamH/Training" element={<Training />} /> */}
        {/* <Route path="components-path" element={<>team's components</>} /> */}
        {/* </Route> */}

        {/* Test */}
        <Route path="/test" element={<Test />} />
      </Routes>

      <Nav />
      {/* <Popup /> */}
    </>
  );
}
export default Main;