import { Link } from "react-router-dom";
import "./experience.scss"

const Experience = () => {
  return (
    <form action="">
      <table cellPadding={30}>
        <thead>
          <tr>
            <td>
              <label htmlFor="postion">თანამდებობა</label>
              <input type="text" id="postion" placeholder="თანამდებობა"/>
            </td>
          </tr>
          <tr>
            <td>
            <label htmlFor="costumer">დამსაქმებელი</label>
              <input type="text" id="costumer" placeholder="დამსაქმებელი"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="startFrom">დაწყების რიცხვი</label>
              <input type="date" id="startFrom"/>
            </td>
            <td>
              <label htmlFor="endFrom">დამთავრების რიცხვი</label>
              <input type="date" id="endFrom"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="jobDescription">აღწერა</label>
              <textarea type="text" id="jobDescription" placeholder="აღწერა"/>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="" className="additional-button">მეტი გამოცდილების დამატება</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/personal" className="link-button">ᲣᲙᲐᲜ</Link>
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
