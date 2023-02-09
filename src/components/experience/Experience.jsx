import { Link } from "react-router-dom";
import "./experience.scss";

const Experience = () => {
  return (
    <section className="section-components-container">
      <form action="">
        <table cellPadding={30}>
          <thead className="inputs-container">
            <tr>
              <td>
                <label htmlFor="postion">თანამდებობა</label>
                <br />
                <input
                  type="text"
                  id="postion"
                  placeholder="თანამდებობა"
                  className="long-label-inputs"
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="costumer">დამსაქმებელი</label>
                <br />
                <input
                  type="text"
                  id="costumer"
                  placeholder="დამსაქმებელი"
                  className="long-label-inputs"
                />
              </td>
            </tr>

            <tr>
              <td width={18}>
                <label htmlFor="startFrom">დაწყების რიცხვი</label>
                <input type="date" id="startFrom" className="date-inputs" />
              </td>
              <td>
                <label htmlFor="endFrom">დამთავრების რიცხვი</label>
                <input type="date" id="endFrom" className="date-inputs" />
              </td>
            </tr>

            <tr>
              <td className="input-container">
                <label htmlFor="jobDescription">აღწერა</label>
                <br />
                <textarea
                  type="text"
                  id="jobDescription"
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  className="long-label-inputs"
                />
              </td>
            </tr>
            <tr>
              <td>
                <hr />
              </td>
            </tr>

            <tr>
              <td>
                <Link to="" className="additional-button add-more">
                  მეტი გამოცდილების დამატება
                </Link>
              </td>
            </tr>
          </thead>
        </table>
        <div className="button-container">
          <Link to="/personal" className="link-button">
            ᲣᲙᲐᲜ
          </Link>
          <button className="submit-button">ᲨᲔᲛᲓᲔᲒᲘ</button>
          <Link to="/education" className="link-button">
          ᲨᲔᲛᲓᲔᲒᲘ
          </Link>
        </div>
        
      </form>
    </section>
  );
};

export default Experience;
