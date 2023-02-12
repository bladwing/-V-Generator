import { useEffect } from "react";
import { useState } from "react";
import "./preview.scss";

const PersonalPreview = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {}, []);

  console.log(data);
  console.log(props.name);

  console.log(props.img);

  return (
    <div className="section">
      <div className="personal-preview">
        <div className="information-container">
          <h1>
            {props.name} {props.lastname}
          </h1>

          <h3>{props.email}</h3>
          <h3>{props.phone}</h3>
          <p>{props.about}</p>
        </div>
        <img className="profile-photo"
            src={props.img}
            alt="logo"
          />
            
      
      </div>
    </div>
  );
};

export default PersonalPreview;
