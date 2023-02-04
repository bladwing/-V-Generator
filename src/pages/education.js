import { Link } from "react-router-dom";
const Education = () => {
  return (
    <section>
      <h1 className="page_header">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h1>
      <Link to="/experience">BACK</Link>
      <br />
      <Link to="/resume">Next</Link>
      <hr />
    </section>
  );
};

export default Education;
