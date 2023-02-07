import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API = "https://resume.redberryinternship.ge/api/degrees";

const Education = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    GetGrade();
  }, []);

  const GetGrade = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setGrades(data);
  };




  return (
    <section style={{ marginLeft: "6px" }}>
      <form action="" className="form-module">
        <table cellPadding={30}>
          <thead className="inputs-container">
            <tr>
              <td>
                <label htmlFor="academy">სასწავლებელი</label> <br />
                <input
                  type="text"
                  id="academy"
                  placeholder="სასწავლებელი"
                  className="long-label-inputs"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="quality">ხარისხი</label><br />
                <select name="" id="quality" onChange={(e) => (console.log(e.target.value))}>
                  {grades.map((grade) => (
                    <option key={grade.id}>{grade.title}</option>
                  ))}
                </select>
              </td>

              <td>
                <label htmlFor="eduEndDate">დამთავრების რიცხვი</label><br />
                <input type="date" id="eduEndDate" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="edu-description">აღწერა</label>
                <textarea
                  type="text"
                  id="edu-description"
                  placeholder="აღწერა"
                />
              </td>
            </tr>

            <tr>
              <td>
                <Link to="" className="additional-button">
                  სხვა სასწავლებლის დამატება
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/experience" className="link-button">
                  ᲣᲙᲐᲜ
                </Link>
              </td>
              <td>
                <button className="submit-button">ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</button>
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </section>
  );
};

export default Education;
