import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./experience.scss";

const Experience = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("experienceinformation", JSON.stringify([data]));
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="form-inputs">
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
                  {...register("postion", {
                    required: true,
                    minLength: { value: 2 },
                  })}
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
                  {...register("costumer", {
                    required: true,
                    minLength: { value: 2 },
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
                  {...register("startFrom", {
                    required: true,
                  })}
                />
              </td>
              <td>
                <label htmlFor="endFrom">დამთავრების რიცხვი</label>
                <br />
                <input
                  type="date"
                  id="endFrom"
                  className="date-inputs"
                  {...register("endFrom", {
                    required: true,
                  })}
                />
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
                  {...register("jobDescription", {
                    required: true,
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
    </section>
  );
};

export default Experience;
