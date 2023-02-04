import { Link } from "react-router-dom";

const ExperiencePage = () => {
  return (
    <section>
      <h1 className="page_header">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h1>
      <Link to="/personal">BACK</Link><br />
      <Link to="/education">Next</Link>
      <hr />
    </section>
  );
};

export default ExperiencePage;
