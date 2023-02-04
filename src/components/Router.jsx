import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import Personal from "../pages/personalInfo";
import Expirience from "../pages/experience";
import Education from "../pages/education";
import Resume from "../pages/resume";


const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/expirience" element={<Expirience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};
export default RouterComponent;
