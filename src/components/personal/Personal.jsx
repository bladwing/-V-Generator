import { useState } from "react";
import { Link } from "react-router-dom";
import PersonalPreview from "../preview/PersonalPreview";

import "./personal.scss";

const Personal = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState(false);

  const InputsData = {
    name,
    lastname,
    profilePhoto,
    about,
    email,
    phone,
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("personalInformation", JSON.stringify([InputsData]));
  };

  const LiveInputHandler = (e) => {
    const Values = e.target.value;
    const CheckName = document.getElementById("name").value.trim().length < 2;
    CheckName === true ? setError(true) : setError(false) || setName(Values);
    const CheckLastname =
      document.getElementById("lastname").value.trim().length < 2;
    CheckLastname === true
      ? setError(true)
      : setError(false) || setLastname(Values);
  };

  console.log(InputsData);
  return (
    <section className="conatiner-for-two-block">
      <form action="" onSubmit={SubmitHandler} className="form-inputs">
        <table cellPadding={28}>
          <tbody>
            <tr className="name-lastname-container">
              <td>
                <label htmlFor="name">სახელი</label>
                <br />
                <input
                  type="text"
                  className="short-input-label"
                  placeholder="ანზორი"
                  id="name"
                  onChange={LiveInputHandler}
                  required
                />

                <div className="hint">მინიმუმ 2 ასო, ქართული ასოები</div>
              </td>
              <td>
                <label htmlFor="lastname">გვარი</label>
                <br />
                <input
                  type="text"
                  className="short-input-label"
                  placeholder="მუმლაძე"
                  id="lastname"
                  onChange={LiveInputHandler}
                  required
                />

                <div className="hint">მინიმუმ 2 ასო, ქართული ასოები</div>
              </td>
            </tr>

            <tr>
              <td className="upload-file">
                <label htmlFor="upload-photo">პირადი ფოტოს ატვირთვა</label>
                <input id="upload-photo" type="file" accept="image/*" hidden />
                <button
                  className="upload-button"
                  type="button"
                  onClick={(e) => setProfilePhoto(e.target.value)}
                >
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
                  onChange={(e) => setAbout(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  maxLength={13}
                  onChange={LiveInputHandler}
                  required
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
          {/* <Link to="/experience" className="link-button">ᲨᲔᲛᲓᲔᲒᲘ</Link> */}
        </div>
      </form>

      {/* <PersonalPreview
        name={name}
        lastname={lastname}
        profilePhoto={profilePhoto}
        about={about}
        email={email}
        phone={phone}
      /> */}
    </section>
  );
};

export default Personal;
