import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./education.scss";

const API = "https://resume.redberryinternship.ge/api/degrees";

const Education = () => {
  const [grades, setGrades] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    GetGrade();
  }, []);

  const GetGrade = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setGrades(data);
  };

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("educationinformation", JSON.stringify([data]));
  };


  return (
    <section>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="form-inputs">
        <table cellPadding={30}>
          <thead>
            <tr>
              <td>
                <label htmlFor="academy">სასწავლებელი</label> <br />
                <input
                  type="text"
                  id="academy"
                  placeholder="სასწავლებელი"
                  className="long-label-inputs"
                  {...register("academy", {
                    required: true,
                    minLength: { value: 2},
                  })}
                />
                <div className="hint">მინიმუმ 2 სიმბოლო</div>
              </td>
            </tr>

            <tr className="short-input-date-container">
              <td>
                <label htmlFor="quality">ხარისხი</label>
                <br />
                <select
                  name=""
                  id="quality"
                  onChange={(e) => console.log(e.target.value)}
                  className="degrees-select"
                  {...register("quality", {
                    required: true
                  })}
                >
                  <option>აირჩიეთ ხარისხი</option>
                  {grades.map((grade) => (
                    <option key={grade.id}>{grade.title}</option>
                  ))}
                </select>
              </td>

              <td>
                <label htmlFor="eduEndDate">დამთავრების რიცხვი</label>
                <br />
                <input type="date" id="eduEndDate" className="date-inputs"     {...register("eduEndDate", {
                    required: true
                  })}/>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="edu-description">აღწერა</label>
                <textarea
                  type="text"
                  id="edu-description"
                  placeholder="აღწერა"
                  {...register("edu-description", {
                    required: true
                  })}
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
                <Link to="" className="additional-button">
                  სხვა სასწავლებლის დამატება
                </Link>
              </td>
            </tr>
          </thead>
        </table>
        <div className="button-container">
          <Link to="/experience" className="link-button">
            ᲣᲙᲐᲜ
          </Link>
          <button className="submit-button">ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</button>
        </div>
      </form>
    </section>
  );
};

export default Education;
