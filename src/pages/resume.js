import { Link } from "react-router-dom";
import Resume from "../components/resume/Resume";

const ResumePage = () => {
  return (
    <section>
           <Link to="/">
          <img src="./img/icon/back.svg" alt="goBack" />
        </Link>
      <Resume />
    </section>
  );
};

export default ResumePage;
