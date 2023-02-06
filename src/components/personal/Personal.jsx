import { useState } from "react";
import "./personal.scss";
import PersonalPreview from "./PersonalPreview";

const Personal = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const InputsData = {
    name,
    lastname,
    profilePhoto,
    about,
    email,
    phone,
  };

  const SubmitHandlet = (e) => {
    e.preventDefault();
    console.log(InputsData);
  };

  return (
    <section className="personal-container">
      <form action="">
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                <br />
                <span>მინიმუმ 2 ასო, ქართული ასოები</span>
              </td>
            </tr>
            <tr>
              <td>პირადი ფოტოს ატვირთვა</td>
              <td>
                <input
                  type="file"
                  placeholder="პირადი ფოტოს ატვირთვა"
                  className="upload-file"
                  onChange={(e) => setProfilePhoto(e.target.value)}
                  required
                />
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
              </td>
            </tr>
            <tr className="phone">
              <td>
                <label htmlFor="phone">მობილურის ნომერი</label>
                <input
                  type="phone"
                  placeholder="+995 551 12 34 56"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <span>
                  უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="submit-personal" onClick={SubmitHandlet}>
          ᲨᲔᲛᲓᲔᲒᲘ
        </button>
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
