import { Link } from "react-router-dom";
import PersonalPreview from "../components/preview/PersonalPreview";


const ResumePage = () => {
  return (
    <section>
           <Link to="/">
          <img src="./img/icon/back.svg" alt="goBack" />
        </Link>
     <PersonalPreview/>
    </section>
  );
};

export default ResumePage;
