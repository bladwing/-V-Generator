import { Link } from "react-router-dom";
import "./experience.scss";

const Experience = () => {
  return (
    <section>
      <form action="" className="form-inputs">
        <table cellPadding={30}>
          <thead>
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
                <div className="hint">მინიმუმ 2 სიმბოლო</div>
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
                <div className="hint">მინიმუმ 2 სიმბოლო</div>
              </td>
            </tr>

            <tr className="short-input-date-container">
              <td>
                <label htmlFor="startFrom">დაწყების რიცხვი</label><br />
                <input type="date" id="startFrom" className="date-inputs" />
              </td>
              <td>
                <label htmlFor="endFrom">დამთავრების რიცხვი</label><br />
                <input type="date" id="endFrom" className="date-inputs" />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="jobDescription">აღწერა</label>
                <br />
                <textarea
                  type="text"
                  id="jobDescription"
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
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
        </div>
        
      </form>
    </section>
  );
};

export default Experience;
