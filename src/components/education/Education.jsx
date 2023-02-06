import { Link } from "react-router-dom";

const Education = () => {
  return (
    <form action="">
      <table cellPadding={30}>
        <thead>
          <tr>
            <td>
              <label htmlFor="">სასწავლებელი</label>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">ხარისხი</label>
              <select name="" id="">
                <option value=""></option>
              </select>
            </td>

            <td>
              <label htmlFor="">დამთავრების რიცხვი</label>
              <input type="date" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">აღწერა</label>
              <textarea type="text" />
            </td>
          </tr>

          <tr>
            <td>
              <Link to="">სხვა სასწავლებლის დამატება</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/experience">ᲣᲙᲐᲜ</Link>
            </td>
            <td>
              <Link to="/resume">ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</Link>
            </td>
          </tr>
        </thead>
      </table>
    </form>
  );
};

export default Education;
