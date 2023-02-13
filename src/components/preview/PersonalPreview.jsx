import { useEffect, useState } from "react";
import "./preview.scss";

const PersonalPreview = (props) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState();

  useEffect(() => {
    UpdateInfo();
  });

  const UpdateInfo = () => {
    setAbout(JSON.parse(localStorage.getItem("about")));
    setName(JSON.parse(localStorage.getItem("name")));
    setLastname(JSON.parse(localStorage.getItem("lastname")));
    setPhoto(JSON.parse(localStorage.getItem("image")));
    setEmail(JSON.parse(localStorage.getItem("email")));
    setPhone(JSON.parse(localStorage.getItem("phone")));
  };

  return (
    <div className="section">
      <div className="personal-preview">
        <div className="information-container">
          <h1>
            {name} {lastname}
          </h1>

          <h3>
            <img
              src="/img/icon/email-icon.png"
              alt="email-icon"
              style={{
                display: email === "" ? "none" : "block",
                width: "16.67px",
                height: "16.67px",
              }}
            />

            {email}
          </h3>

          <h3>
            <img
              src="/img/icon/phone-icon.png"
              alt=""
              style={{ display: phone === "" ? "none" : "block" }}
            />
            {phone}
          </h3>
          <div
            style={{ display: about === "" ? "none" : "block" }}
            className="about-header"
          >
            ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
          </div>
          <p style={{ lineBreak: "anywhere" }}>{about}</p>
        </div>
        <img className="profile-photo" src={props.img} alt="logo" />
      </div>
    </div>
  );
};

export default PersonalPreview;
