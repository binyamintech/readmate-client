import Test from "../../test/Test";
import Header from "../Header";
import Nav from "../Nav";
import Popup from "../Popup";
import { Outlet, Route, Routes } from "react-router-dom"
// import TextArea from "../common/TextArea/Index";

import Exercise from "../../../pages/TrainReading/Level/Exercise"
import ExerciseClock from "../../../pages/TrainReading/Level/ExerciseClock"
import ExerciseQuestion from "../../../pages/TrainReading/Level/ExerciseQuestion"
import ExerciseRate from "../../../pages/TrainReading/Level/ExerciseRate"
import ExerciseResult from "../../../pages/TrainReading/Level/ExerciseResult"
// import TeamC from '../../teams/TeamC'


function Main() {
  return (
    <>
      <Header/>

      {/* content */}
      <Routes>
        {/* Team A */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team B */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team C */}
        <Route path="train_reading_level">
          {/* <Route index element={<>team's components</>} /> */}
          <Route path="exercise" element={<Exercise/>} />
          <Route path="exercise_clock" element={<ExerciseClock/>} />
          <Route path="rate" element={<ExerciseRate/>} />
          <Route path="question" element={<ExerciseQuestion/>} />
          <Route path="result" element={<ExerciseResult/>} />
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
        {/* <Route path="/teamf">
          <Route index element={<TeamF />} />
          <Route path="components-path" element={<TeamF />} />
        </Route> */}

        {/* Team G */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team H */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Test */}
        <Route path="/test" element={<Test />} />
      </Routes>

      <Nav />
      {/* <Popup /> */}
    </>
  );
}

export default Main;
