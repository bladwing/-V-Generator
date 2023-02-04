import { Link } from "react-router-dom";

const PersonalInfoPage = () => {
  return (
    <section>
      <h1 className="page_header">ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
      <Link to="/">BACK</Link> <br />
      <Link to="/experience">Next</Link>
      <hr />
    </section>
  );
};

export default PersonalInfoPage;
