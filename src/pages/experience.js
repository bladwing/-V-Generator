import { Link } from "react-router-dom";

const ExperiencePage = () => {
  return (
    <section className="next_Pages">
      <div className="page_header">
        <Link to="/personal">
          <img src="./img/icon/back.svg" alt="goBack" />
        </Link>
        <h1>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h1>
        <div>2/3</div>
        <hr className="header_line" />
      </div>

      <br />
      <Link to="/education">Next</Link>
    </section>
  );
};

export default ExperiencePage;
