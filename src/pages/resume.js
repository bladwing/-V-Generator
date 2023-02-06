import { Link } from "react-router-dom";
import Resume from "../components/resume/Resume";

const ResumePage = () => {
  return (
    <section>
      <h1 className="page_header">ჯერ არაფერი</h1>

      <Link to="/">Finish</Link>
      <hr />
      <Resume />
    </section>
  );
};

export default ResumePage;
