import { Link } from "react-router-dom";
import Education from "../components/education/Education";

const EducationPage = () => {
  return (
    <section className="next_Pages">
      <div className="page_header">
        <Link to="/experience">
          <img src="./img/icon/back.svg" alt="goBack" />
        </Link>
        <h1>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h1>
        <div>3/3</div>
        <hr className="header_line" />
      </div>
      <br />
      <Education/>
    </section>
  );
};

export default EducationPage;
