import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PersonalPreview from "../preview/PersonalPreview";
import useLocalStorage from "../../utils/localStorage";

import { errorBorder, DeleteItemLS } from "../../utils/helpFunctions.js";

import "./personal.scss";

const Personal = () => {
  const Navigate = useNavigate();
  const [name, setName] = useLocalStorage("name");
  const [lastname, setLastname] = useLocalStorage("lastname");
  const [about, setAbout] = useLocalStorage("about");
  const [email, setEmail] = useLocalStorage("email");
  const [phone, setPhone] = useLocalStorage("phone");
  const [img, setImg] = useLocalStorage("img");

  useEffect(() => {
    onChange();
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("infromation", JSON.stringify([data]));
    DeleteItemLS();
    Navigate("/experience");
  };

  const onChange = () => {
    localStorage.setItem(
      "temporaryInfromation",
      JSON.stringify([
        "name",
        name,
        "lastname",
        lastname,
        "about",
        about,
        "email",
        email,
        "phone",
        phone,
        img,
        "img",
      ])
    );
  };

  const handleFileSelect = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setImg(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImg(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Fragment>
      <section>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="form-inputs"
        >
          <table cellPadding={28}>
            <tbody>
              <tr className="short-input-date-container">
                <td>
                  <div className="error-handler">
                    <label htmlFor="name">სახელი</label>
                    <br />

                    {errors.name && errors.name.type === "required" && (
                      <p className="errorMsg">
                        სავალდებულო ველი
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}

                    {errors.name && errors.name.type === "pattern" && (
                      <p className="errorMsg">
                        მხოლოდ ქართული ასობები.
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}

                    {errors.name && errors.name.type === "minLength" && (
                      <p className="errorMsg">
                        მინიმუმ ორი სიმბოლო.
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}
                    {name !== "" &&
                    name !== undefined &&
                    name.length >= 2 &&
                    name.match(/^[ა-ჰ]+$/) ? (
                      <img
                        src="img/valid.png"
                        alt="valid"
                        className="valid-img"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <input
                    type="text"
                    value={name}
                    placeholder="ანზორი"
                    id="name"
                    className="short-input-label"
                    style={errors.name && errorBorder}
                    {...register("name", {
                      required: { value: true },
                      minLength: { value: 2 },
                      pattern: { value: /^[ა-ჰ]+$/ },
                      onChange: (e) => setName(e.target.value),
                    })}
                  />

                  <div className="hint">მინიმუმ 2 ასო, ქართული ასოები</div>
                </td>

                <td>
                  <div className="error-handler">
                    <label htmlFor="lastname">გვარი</label>
                    <br />

                    {errors.lastname && errors.lastname.type === "required" && (
                      <p className="errorMsg">
                        სავალდებულო ველი
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}
                    {errors.lastname && errors.lastname.type === "pattern" && (
                      <p className="errorMsg">
                        მხოლოდ ქართული ასობები.
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}
                    {errors.lastname &&
                      errors.lastname.type === "minLength" && (
                        <p className="errorMsg">
                          მინიმუმ ორი სიმბოლო.
                          <img src="img/error.png" alt="error" />
                        </p>
                      )}

                    {lastname !== "" &&
                    lastname !== undefined &&
                    lastname.length >= 2 &&
                    lastname.match(/^[ა-ჰ]+$/) ? (
                      <img
                        src="img/valid.png"
                        alt="valid"
                        className="valid-img"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <input
                    type="text"
                    className="short-input-label"
                    placeholder="მუმლაძე"
                    style={errors.lastname && errorBorder}
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
                  <h4>პირადი ფოტოს ატვირთვა</h4>

                  <input
                    id="file"
                    type="file"
                    name="image"
                    {...register("uploadPhoto", { required: true })}
                    onChange={handleFileSelect}
                  />

                  <label htmlFor="file" className="upload-button ">
                    ატვირთვა
                  </label>
                  {errors.uploadPhoto &&
                    errors.uploadPhoto.type === "required" && (
                      <img src="img/error.png" alt="error" />
                    )}
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
                    onChange={(e) => setAbout(e.target.value)}
                    value={about}
                  ></textarea>
                </td>
              </tr>
              <tr className="email">
                <td>
                  <div className="long-input-error-handler">
                    <label htmlFor="email">ელ.ფოსტა</label>
                    {errors.email && errors.email.type === "required" && (
                      <p className="errorMsg">
                        სავალდებულო ველი
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                      <p className="errorMsg">
                        უნდა მთავრდებოდეს @redberry.ge-ით{" "}
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}

                    {email !== "" &&
                    email !== undefined &&
                    email.length >= 2 &&
                    email.match(/^[a-zA-Z0-9.]+@redberry.ge$/) ? (
                      <img
                        src="img/valid.png"
                        alt="valid"
                        className="long-input-valid-img"
                      />
                    ) : (
                      ""
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
                    style={errors.email && errorBorder}
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
                      <p className="errorMsg">
                        სავალდებულო ველი
                        <img src="img/error.png" alt="error" />
                      </p>
                    )}
                    {errors.phone && errors.phone.type === "pattern" && (
                      <p className="errorMsg">
                        არასწორი ფორმატი <img src="img/error.png" alt="error" />
                      </p>
                    )}
                    {phone !== "" &&
                    phone !== undefined &&
                    phone.length >= 2 &&
                    phone.match(/^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/) ? (
                      <img
                        src="img/valid.png"
                        alt="valid"
                        className="long-input-valid-img"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <input
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
                    style={errors.phone && errorBorder}
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
        <PersonalPreview
          name={name}
          lastname={lastname}
          email={email}
          phone={phone}
          about={about}
          img={img}
        />
      </div>
    </Fragment>
  );
};

export default Personal;
