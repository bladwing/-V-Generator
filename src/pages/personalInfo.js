import { Link } from "react-router-dom";
import Personal from "../components/personal/Personal";
import { ClearStorage } from "../utils/helpFunctions";

const PersonalInfoPage = () => {
  return (
    <div className="two-side-container">
      <div className="first-side">
        <div className="page_header">
          <Link to="/" className="back-arrow">
            <img src="./img/icon/back.svg" alt="goBack" onClick={() => ClearStorage()}/>
          </Link>
          <h1>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
          <div>1/3</div>
          <hr className="header_line" />
        </div>
        <Personal />
      </div>
      <div className="second-side">this is second side</div>
    </div>
  );
};

export default PersonalInfoPage;
