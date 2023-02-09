import { Link } from "react-router-dom";
import Experience from "../components/experience/Experience"

const ExperiencePage = () => {
  return (
    <div className="two-side-container">
       <div className="first-side">
      <div className="page_header">
        <Link to="/personal" className="back-arrow">
          <img src="./img/icon/back.svg" alt="goBack" />
        </Link>
        <h1>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h1>
        <div>2/3</div>
        <hr className="header_line" />
      </div>
      <Experience/>
      </div>
      <div className="second-side">this is second side</div>
    </div>
  );
};

export default ExperiencePage;
