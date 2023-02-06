import { Link } from "react-router-dom";

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
              <input type="text" id="jobDescription" placeholder="აღწერა"/>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="">მეტი გამოცდილების დამატება</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/personal">ᲣᲙᲐᲜ</Link>
            </td>
            <td>
              <Link to="">ᲨᲔᲛᲓᲔᲒᲘ</Link>
            </td>
          </tr>
        </thead>
      </table>
    </form>
  );
};

export default Experience;
