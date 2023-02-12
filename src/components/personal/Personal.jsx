import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PersonalPreview from "../preview/PersonalPreview";
import useLocalStorage from "../../utils/localStorage";
import InputMask from "react-input-mask";

import {
  errorBorder,
  errorColor,
  DeleteItemLS,
} from "../../utils/helpFunctions.js";

import "./personal.scss";

const Personal = () => {
  const Navigate = useNavigate();
  const [name, setName] = useLocalStorage("name");
  const [lastname, setLastname] = useLocalStorage("lastname");
  const [about, setAbout] = useLocalStorage("about");
  const [email, setEmail] = useLocalStorage("email");
  const [phone, setPhone] = useLocalStorage("phone");

  useEffect(() => {
    onChange();
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("infromation", JSON.stringify([data]));
    DeleteItemLS();
    Navigate("/experience");
  };

  const onChange = () => {
    localStorage.setItem("temporaryInfromation", JSON.stringify(["name", name, "lastname",
        lastname,
        "about",
        about,
        "email",
        email,
        "phone",
        phone,
      ])
    );
  };
 
  return (
    <Fragment>
    <section>
      
      <form action="" onSubmit={handleSubmit(onSubmit)} className="form-inputs">
        <table cellPadding={28}>
          <tbody>
            <tr className="short-input-date-container">
              <td>
                <div className="error-handler">
                  <label htmlFor="name" style={errors.name && errorColor}>
                    სახელი
                  </label>
                  <br />

                  {errors.name && errors.name.type === "required" && (
                    <p className="errorMsg" style={errors.name && errorColor}>
                      სავალდებულო ველი
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}

                  {errors.name && errors.name.type === "pattern" && (
                    <p className="errorMsg" style={errors.name && errorColor}>
                      მხოლოდ ქართული ასობები.
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}

                  {errors.name && errors.name.type === "minLength" && (
                    <p className="errorMsg" style={errors.name && errorColor}>
                      მინიმუმ ორი სიმბოლო.
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {errors.name === undefined &&
                    getValues("name") !== undefined &&
                    getValues("name") !== "" && (
                      <img
                        src="img/valid.png"
                        alt="valid"
                        className="valid-img"
                      />
                    )}
                </div>

                <input
                  type="text"
                  placeholder="ანზორი"
                  id="name"
                  {...register("name", {
                    required: { value: true },
                    minLength: { value: 2 },
                    pattern: { value: /^[ა-ჰ]+$/ },
                    onChange: (e) => setName(e.target.value),
                  })}
                  value={name}
                  className="short-input-label"
                  style={errors.name && errorBorder}
                />

                <div className="hint">მინიმუმ 2 ასო, ქართული ასოები</div>
              </td>

              <td>
                <div className="error-handler">
                  <label htmlFor="lastname">გვარი</label>
                  <br />

                  {errors.lastname && errors.lastname.type === "required" && (
                    <p
                      className="errorMsg"
                      style={errors.lastname && errorColor}
                    >
                      სავალდებულო ველი
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {errors.lastname && errors.lastname.type === "pattern" && (
                    <p
                      className="errorMsg"
                      style={errors.lastname && errorColor}
                    >
                      მხოლოდ ქართული ასობები.
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {errors.lastname && errors.lastname.type === "minLength" && (
                    <p
                      className="errorMsg"
                      style={errors.lastname && errorColor}
                    >
                      მინიმუმ ორი სიმბოლო.
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}

                  {errors.lastname === undefined &&
                    getValues("lastname") !== undefined &&
                    getValues("lastname") !== "" && (
                      <img
                        src="img/valid.png"
                        alt="valid"
                        className="valid-img"
                      />
                    )}
                </div>

                <input
                  type="text"
                  className="short-input-label"
                  placeholder="მუმლაძე"
                  id="lastname"
                  {...register("lastname", {
                    required: true,
                    minLength: { value: 2 },
                    pattern: { value: /^[ა-ჰ]+$/ },
                    onChange: (e) => setLastname(e.target.value),
                  })}
                  value={lastname}
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
                  {...register("about", {
                    onChange: (e) => setAbout(e.target.value),
                  })}
                  value={about}
                ></textarea>
              </td>
            </tr>
            <tr className="email">
              <td>
                <div className="long-input-error-handler">
                  <label htmlFor="email">ელ.ფოსტა</label>
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg" style={errors.email && errorColor}>
                      სავალდებულო ველი
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg" style={errors.email && errorColor}>
                      უნდა მთავრდებოდეს @redberry.ge-ით{" "}
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}

                  {errors.email === undefined &&
                    getValues("email") !== undefined &&
                    getValues("email") !== "" && (
                      <img
                        src="img/valid.png"
                        alt="valid"
                        className="long-input-valid-img"
                      />
                    )}
                </div>

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
                    onChange: (e) => setEmail(e.target.value),
                  })}
                  value={email}
                />

                <div className="hint">უნდა მთავრდებოდეს @redberry.ge-ით</div>
              </td>
            </tr>
            <tr className="phone">
              <td>
                <div className="long-input-error-handler">
                  <label htmlFor="phone">მობილურის ნომერი</label>

                  {errors.phone && errors.phone.type === "required" && (
                    <p className="errorMsg" style={errors.phone && errorColor}>
                      სავალდებულო ველი
                      <img src="img/error.png" alt="error" />
                    </p>
                  )}
                  {errors.phone && errors.phone.type === "pattern" && (
                    <p className="errorMsg" style={errors.phone && errorColor}>
                      არასწორი ფორმატი <img src="img/error.png" alt="error" />
                    </p>
                  )}

                  {errors.phone === undefined &&
                    getValues("phone") !== undefined &&
                    getValues("phone") !== "" && (
                      <img
                        src="img/valid.png"
                        alt="valid"
                        className="long-input-valid-img"
                      />
                    )}
                </div>
                <InputMask
                  type="text"
                  mask="+999 999 99 99 99"
                  className="long-label-inputs"
                  placeholder="+995 551 12 34 56"
                  id="phone"
                  {...register("phone", {
                    required: { value: true },
                    pattern: {
                      value: /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
                    },
                    onChange: (e) => setPhone(e.target.value),
                  })}
                  value={phone}
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
                <div>
                <PersonalPreview name={name} lastname={lastname} email={email} phone={phone} about={about}/>
                </div>
  
      

        </Fragment>
  );
  
};

export default Personal;
