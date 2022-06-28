import Test from "../../test/Test";
import Header from "../header";
import Nav from "../Nav";
// import Popup from "../popup/Popup";
import { Outlet, Route, Routes } from "react-router-dom";
import { SignIn } from "../../../pages/SignIn/Sign-in/SignIn";
import SignUp from "../../../pages/SignUp/SignUp/SignUp";
<<<<<<< HEAD
=======
import ClassroomIdPage from "../../../pages/SignUp/ClassroomId";
>>>>>>> 949881f37a7f68edf03be1305f99e17e5fa41f33
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";

function Main() {
  return (
    <>
      {/* <Header /> */}

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
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
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
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

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
<<<<<<< HEAD
        <Route path="/test1" element={<SignIn />} />
        <Route path="/test" element={<SignUp />} />
=======
        <Route path='/test' element={<SignIn/>} />
        <Route path='/test1' element={<SignUp/>} />
        <Route path='/test2' element={<ClassroomIdPage/>} />


>>>>>>> 949881f37a7f68edf03be1305f99e17e5fa41f33
      </Routes>

      <Nav />
      {/* <Popup /> */}
    </>
  );
}

export default Main;
