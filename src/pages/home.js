import { Link } from "react-router-dom";
import "./stylepages.scss";

const HomePage = () => {
  return (
    <section className="Home_page">
      <img src="./img/logo.svg" alt="redberry_logo" className="logo" />
      <hr className="line-homepage"/>

      <Link to="/personal">ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Link>
      <img src="./img/stamp.svg" alt="stamp" className="stamp" />
    </section>
  );
};

export default HomePage;
