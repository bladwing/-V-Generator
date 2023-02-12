import "./preview.scss";

const PersonalPreview = (props) => {


  
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
