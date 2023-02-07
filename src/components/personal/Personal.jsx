import { useState } from "react";
import PersonalPreview from "./PersonalPreview";

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
    <section className="personal-container">
      <form action="" onSubmit={SubmitHandler}>
        <table cellPadding={30} className="personal-input-parts">
          <tbody className="name">
            <tr>
              <td>
                <label htmlFor="name">სახელი</label>
                <br />

                <input
                  type="text"
                  placeholder="ანზორი"
                  id="name"
                  onChange={LiveInputHandler}
                  pattern='[a-zA-Z0-9_]'
                  required
                />

                <br />
                <span>მინიმუმ 2 ასო, ქართული ასოები</span>
              </td>
              <td className="lastname">
                <label htmlFor="lastname">გვარი</label>
                <br />
                <input
                  type="text"
                  placeholder="მუმლაძე"
                  id="lastname"
                  style={{ border: error === true ? "1px solid red" : "" }}
                  onChange={LiveInputHandler}
                  required
                />
                <br />
                <span>მინიმუმ 2 ასო, ქართული ასოები</span>
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
                  id="email"
                  placeholder="anzorr666@redberry.ge"
                  onChange={LiveInputHandler}
                  required
                />
                <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
              </td>
            </tr>
            <tr className="phone">
              <td>
                <label htmlFor="phone">მობილურის ნომერი</label>
                <input
                  type="text"
                  placeholder="+995 551 12 34 56"
                  id="phone"
                  // pattern="/^\+[0-9]{3}[0-9]{9}/g"
                  maxLength={13}
                  onChange={LiveInputHandler}
                  required
                />
                <span>
                  უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="submit-button">ᲨᲔᲛᲓᲔᲒᲘ</button>
      </form>
      <PersonalPreview
        name={name}
        lastname={lastname}
        profilePhoto={profilePhoto}
        about={about}
        email={email}
        phone={phone}
      />
    </section>
  );
};

export default Personal;
