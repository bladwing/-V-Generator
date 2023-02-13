import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PersonalPreview from "../preview/PersonalPreview";
import useLocalStorage from "../../utils/localStorage";
import { errorBorder } from "../../utils/helpFunctions";

import "./experience.scss";

const Experience = () => {
  const [position, setPosition] = useLocalStorage("position");
  const [company, setCompany] = useLocalStorage("company");
  const [startDate, setStartDate] = useLocalStorage("startDate");
  const [endDate, setEndDate] = useLocalStorage("endDate");
  const [jobDescription, setJobDescription] = useLocalStorage("jobDescription");
  
const Navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("Experience", JSON.stringify([data]));
    Navigate('/education')
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="form-inputs">
        <table cellPadding={30}>
          <thead>
            <tr>
              <td>
                <div className="long-input-error-handler">
                  <label htmlFor="postion">თანამდებობა</label>
                  <br />
                  {errors.postion && errors.postion.type === "required" && (
                    <p className="errorMsg">
                      სავალდებულო ველი
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {errors.position && errors.position.type === "minLength" && (
                    <p className="errorMsg">
                      მინიმუმ ორი სიმბოლო.
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {position !== "" &&
                  position !== undefined &&
                  position.length >= 2 ? (
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
                  id="postion"
                  placeholder="თანამდებობა"
                  className="long-label-inputs"
                  value={position}
                  {...register("postion", {
                    required: true,
                    minLength: { value: 2 },
                    onChange: (e) => setPosition(e.target.value),
                  })}
                />

                <div className="hint">მინიმუმ 2 სიმბოლო</div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="long-input-error-handler">
                  <label htmlFor="company">დამსაქმებელი</label>
                  <br />
                  {errors.company && errors.company.type === "required" && (
                    <p className="errorMsg">
                      სავალდებულო ველი
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {errors.company && errors.company.type === "minLength" && (
                    <p className="errorMsg">
                      მინიმუმ ორი სიმბოლო.
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {company !== "" &&
                  company !== undefined &&
                  company.length >= 2 ? (
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
                  id="company"
                  placeholder="დამსაქმებელი"
                  className="long-label-inputs"
                  value={company}
                  {...register("costumer", {
                    required: true,
                    minLength: { value: 2 },
                    onChange: (e) => setCompany(e.target.value),
                  })}
                />
                <div className="hint">მინიმუმ 2 სიმბოლო</div>
              </td>
            </tr>

            <tr className="short-input-date-container">
              <td>
                <label htmlFor="startFrom">დაწყების რიცხვი</label>
                <br />

                <input
                  type="date"
                  id="startFrom"
                  className="date-inputs"
                  style={errors.startDate && errorBorder}
                  value={startDate}
                  {...register("startDate", {
                    required: true,
                    onChange: (e) => setStartDate(e.target.value),
                  })}
                />
                {errors.startDate && errors.startDate.type === "required" && (
                  <img src="img/error.png" alt="error" />
                )}
                {startDate !== "" ? (
                  <img
                    src="/img/valid.png"
                    alt="valid"
                    className="long-input-valid-img"
                  />
                ) : (
                  ""
                )}
              </td>
              <td>
                <label htmlFor="endFrom">დამთავრების რიცხვი</label>
                <br />
                <input
                  type="date"
                  id="endFrom"
                  className="date-inputs"
                  style={errors.startDate && errorBorder}
                  value={endDate}
                  {...register("endDate", {
                    required: true,
                    onChange: (e) => setEndDate(e.target.value),
                  })}
                />
                {errors.endDate && errors.endDate.type === "required" && (
                  <img src="img/error.png" alt="error" />
                )}
                {endDate !== "" ? (
                  <img
                    src="/img/valid.png"
                    alt="valid"
                    className="long-input-valid-img"
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="jobDescription">აღწერა</label>
     
                <div className="long-input-error-handler">
                
                {errors.jobDescription &&
                  errors.jobDescription.type === "required" && (
                    <p className="errorMsg">
                        სავალდებულო ველი
                    <img src="img/error.png" alt="error" />
                    </p>
                  )}
                {jobDescription !== "" ? (
                  <img
                    src="/img/valid.png"
                    alt="valid"
                    className="long-input-valid-img"
                  />
                ) : (
                  ""
                )}
                </div>
                <textarea
                  type="text"
                  id="jobDescription"
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  style={errors.jobDescription && errorBorder}
                  value={jobDescription}
                  {...register("jobDescription", {
                    required: true,
                    onChange: (e) => setJobDescription(e.target.value),
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
      <PersonalPreview />
    </section>
  );
};

export default Experience;
