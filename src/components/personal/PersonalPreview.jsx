const PersonalPreview = (props) => {
  return (
    <table className="live-preview">
      <tbody>
        <tr>
          <td>
            <h2>
              {props.name} {props.lastname}
            </h2>
          </td>
        </tr>
        <tr>
          <td>
            <h4>{props.email}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <h4>{props.phone}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              {props.about}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PersonalPreview;
