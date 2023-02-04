import { Link } from "react-router-dom";

const Education = () => {
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
      <Link to="/resume">Next</Link>
    </section>
  );
};

export default Education;
