import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../../utils/localStorage";
import PersonalPreview from "../preview/PersonalPreview";
import { errorBorder } from "../../utils/helpFunctions";
import "./education.scss";

const API = "https://resume.redberryinternship.ge/api/degrees";

const Education = () => {
  const [grades, setGrades] = useState([]);

  const [educenter, setEducenter] = useLocalStorage("educenter");
  const [quality, setQuality] = useLocalStorage("quality");
  const [endEduDate, setEndEduDate] = useLocalStorage("endEduDate");
  const [eduDescription, setEduDescription] = useLocalStorage("eduDescription");
  const Navigation = useNavigate();

  useEffect(() => {
    GetGrade();
  }, []);

  const GetGrade = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setGrades(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("educationinformation", JSON.stringify([data]));
    Navigation("/resume");
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="form-inputs">
        <table cellPadding={30}>
          <thead>
            <tr>
              <td>
                <div className="long-input-error-handler">
                  <label htmlFor="academy">სასწავლებელი</label>
                  {errors.educenter && errors.educenter.type === "required" && (
                    <p className="errorMsg">
                      სავალდებულო ველი
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {errors.educenter &&
                    errors.educenter.type === "minLength" && (
                      <p className="errorMsg">
                        მინიმუმ ორი სიმბოლო.
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}
                  {educenter !== "" &&
                  educenter !== undefined &&
                  educenter.length >= 2 ? (
                    <img
                      src="/img/valid.png"
                      alt="valid"
                      className="long-input-valid-img"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <input
                  type="text"
                  id="educenter"
                  placeholder="სასწავლებელი"
                  className="long-label-inputs"
                  style={errors.educenter && errorBorder}
                  value={educenter}
                  {...register("educenter", {
                    required: true,
                    minLength: { value: 2 },
                    onChange: (e) => setEducenter(e.target.value),
                  })}
                />
                <div className="hint">მინიმუმ 2 სიმბოლო</div>
              </td>
            </tr>

            <tr className="short-input-date-container">
              <td>
                <div className="edu-error-handler">
                  <label htmlFor="quality">ხარისხი</label>
                  {errors.quality && errors.quality.type === "required" && (
                    <img src="img/error.png" alt="error" />
                  )}
                  {quality !== "" ? (
                    <img
                      src="/img/valid.png"
                      alt="valid"
                      className="valid-img"
                    />
                  ) : (
                    ""
                  )}
                </div>

                <select
                  name="quality"
                  id="quality"
                  value={quality}
                  style={errors.quality && errorBorder}
                  className="degrees-select"
                  {...register("quality", {
                    required: true,
                    onChange: (e) => setQuality(e.target.value),
                  })}
                >
                  <option value="">აირჩიეთ ხარისხი</option>
                  {grades.map((grade) => (
                    <option key={grade.id}>{grade.title}</option>
                  ))}
                </select>
              </td>

              <td>
                <div className="edu-error-handler">
                  <label htmlFor="endEduDate">დამთავრების რიცხვი</label>
                  {errors.endEduDate &&
                    errors.endEduDate.type === "required" && (
                      <img src="img/error.png" alt="error" />
                    )}
                  {endEduDate !== "" && endEduDate !== undefined ? (
                    <img
                      src="/img/valid.png"
                      alt="valid"
                      className="valid-img"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <input
                  type="date"
                  name="endEduDate"
                  id="endEduDate"
                  className="date-inputs"
                  style={errors.endEduDate && errorBorder}
                  value={endEduDate}
                  {...register("endEduDate", {
                    required: true,
                    onChange: (e) => setEndEduDate(e.target.value),
                  })}
                />
              </td>
            </tr>

            <tr>
              <td>
                <div className="long-input-error-handler">
                  <label htmlFor="edu-description">აღწერა</label>
                  {errors.eduDescription &&
                    errors.eduDescription.type === "required" && (
                      <p className="errorMsg">
                        სავალდებულო ველი
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}
                  {eduDescription !== "" && eduDescription !== undefined ? (
                    <img
                      src="img/valid.png"
                      alt="valid"
                      className="long-input-valid-img"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <textarea
                  type="text"
                  id="eduDescription"
                  name="eduDescription"
                  placeholder="აღწერა"
                  style={errors.eduDescription && errorBorder}
                  value={eduDescription}
                  {...register("eduDescription", {
                    required: true,
                    onChange: (e) => setEduDescription(e.target.value),
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

      <PersonalPreview />
    </section>
  );
};

export default Education;
