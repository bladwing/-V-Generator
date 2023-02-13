import { Link } from "react-router-dom";
import Education from "../components/education/Education";

const EducationPage = () => {
  return (
    <div className="two-side-container">
      <div className="first-side">
        <div className="page_header">
          <Link to="/experience" className="back-arrow">
            <img src="./img/icon/back.svg" alt="goBack" />
          </Link>
          <h1>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h1>
          <div>3/3</div>
          <hr className="header_line" />
        </div>
        <br />
        <Education />
      </div>
      <div className="second-side">
        
        </div>
    </div>
  );
};

export default EducationPage;
