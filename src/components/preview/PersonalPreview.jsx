import { useEffect } from "react";
import { useState } from "react";
import "./preview.scss";

const PersonalPreview = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {setData(props.name)
  }, []);

  console.log(data);
  console.log(props.name)

console.log(props.img)


  return (
    <div className="SECTION">
      <table>
        <thead>
          <tr>
            <td>
              <h1>{props.name}</h1>
            </td>
            <td>
            <h1>{props.lastname}</h1>
            </td>
            <td>
              <img src={props.img} alt="logo" style={{width: "100px", height: "100px", border: "1px solid red", padding: "30px", borderRadus: "30px"}} />
            </td>
          </tr>
          <tr>
            <td>
              <h3>{props.email}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>{props.phone}</h3>
            </td>
          </tr>
          <tr>
            <td>{props.about}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default PersonalPreview;
