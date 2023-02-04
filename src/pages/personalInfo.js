import { Link } from "react-router-dom";

const PersonalInfoPage = () => {
  return (
    <section className="next_Pages">
      <div className="page_header">
        <Link to="/">
          <img src="./img/icon/back.svg" alt="goBack" />
        </Link>
        <h1>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
        <div>1/3</div>
        <hr className="header_line" />
      </div>

      <br />
      <Link to="/experience">Next</Link>
    </section>
  );
};

export default PersonalInfoPage;
