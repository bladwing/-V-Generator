import { Link } from "react-router-dom";
import "./experience.scss";

const Experience = () => {
  return (
    <form action="" className="experince-module">
      <table cellPadding={30}>
        <thead>
          <tr>
            <td className="input-container">
              <label htmlFor="postion">თანამდებობა</label>
              <input
                type="text"
                id="postion"
                placeholder="თანამდებობა"
                className="long-label-inputs"
              />
            </td>
          </tr>

          <tr>
            <td className="input-container">
              <label htmlFor="costumer">დამსაქმებელი</label>
              <input
                type="text"
                id="costumer"
                placeholder="დამსაქმებელი"
                className="long-label-inputs "
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="startFrom">დაწყების რიცხვი</label>
              <input type="date" id="startFrom" className="date-inputs" />
            </td>
            <td>
              <label htmlFor="endFrom">დამთავრების რიცხვი</label>
              <input type="date" id="endFrom" className="date-inputs" />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="jobDescription">აღწერა</label>
              <textarea type="text" id="jobDescription" placeholder="აღწერა" />
            </td>
          </tr>

          <tr>
            <td>
              <Link to="" className="additional-button">
                მეტი გამოცდილების დამატება
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/personal" className="link-button">
                ᲣᲙᲐᲜ
              </Link>
            </td>
            <td>
              <button className="submit-button">ᲨᲔᲛᲓᲔᲒᲘ</button>
            </td>
          </tr>
        </thead>
      </table>
    </form>
  );
};

export default Experience;
