import { useState } from "react";
import { useForm } from "react-hook-form";

import "./personal.scss";

const Personal = () => {
  // const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [profilePhoto, setProfilePhoto] = useState("");
  // const [about, setAbout] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  // const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("personalInformation", JSON.stringify([data]));
  };

  const errorBorder = {
    border: "1px solid red",
  };
  const errorColor = {
    color: "red",
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="form-inputs">
        <table cellPadding={28}>
          <tbody>



            <tr className="short-input-date-container">
              <td>
                <label htmlFor="name" style={errors.name && errorColor}>
                  სახელი
                </label>
                <br />
                <input
                  className={
                    errors.name === undefined &&
                    getValues("name") !== undefined &&
                    getValues("name") !== ""
                      ? "name-input valid short-input-label"
                      : "name-input short-input-label"
                  }
                  type="text"
                  placeholder="ანზორი"
                  id="name"
                  {...register("name", {
                    required: { value: true, message: "error" },
                    minLength: { value: 2, message: "error" },
                    pattern: { value: /^[ა-ჰ]+$/ },
                  })}
                  style={errors.name && errorBorder}
                />
                {errors.name && errors.name.type === "pattern" && (
                   <div className="hint" style={errors.name && errorColor}>
                   მინიმუმ 2 ასო, ქართული ასოები
                 </div> 
                ) }
                    <div className="hint" style={errors.name && errorColor}>
                   მინიმუმ 2 ასო, ქართული ასოები
                 </div> 
              </td>



              <td>
                <label htmlFor="lastname">გვარი</label>
                <br />
                <input
                  type="text"
                  className="short-input-label"
                  placeholder="მუმლაძე"
                  id="lastname"
                  {...register("lastname", {
                    required: true,
                    minLength: { value: 2 },
                    pattern: { value: /^[ა-ჰ]+$/ },
                  })}
                />

                <div className="hint">მინიმუმ 2 ასო, ქართული ასოები</div>
              </td>
            </tr>

            <tr>
              <td className="upload-file">
                <label htmlFor="upload-photo">პირადი ფოტოს ატვირთვა</label>
                <input
                  id="upload-photo"
                  type="file"
                  accept="image/*"
                  hidden
                  {...register("upload-photo", { required: true })}
                />
                <button className="upload-button" type="button">
                  ატვირთვა
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="about">ჩემს შესახებ (არასავალდებულო)</label>
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  id="about"
                  placeholder="ზოგადი ინფო შენ შესახებ"
                  {...register("about")}
                ></textarea>
              </td>
            </tr>
            <tr className="email">
              <td>
                <label htmlFor="email">ელ.ფოსტა</label>

                <input
                  type="email"
                  className="long-label-inputs"
                  id="email"
                  placeholder="anzorr666@redberry.ge"
                  {...register("email", {
                    pattern: {
                      value: /^[a-zA-Z0-9.]+@redberry.ge$/,
                    },
                    required: { value: true },
                  })}
                />

                <div className="hint">უნდა მთავრდებოდეს @redberry.ge-ით</div>
              </td>
            </tr>
            <tr className="phone">
              <td>
                <label htmlFor="phone">მობილურის ნომერი</label>

                <input
                  type="text"
                  className="long-label-inputs"
                  placeholder="+995 551 12 34 56"
                  id="phone"
                  {...register("phone", {
                    required: { value: true },
                    pattern: {
                      value: /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
                    },
                  })}
                />
                <div className="hint">
                  უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="button-container-personal">
          <button className="submit-button">ᲨᲔᲛᲓᲔᲒᲘ</button>
        </div>
      </form>
    </section>
  );
};

export default Personal;
