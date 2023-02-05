import "./personal.scss";

const Personal = () => {
  return (
    <section className="personal-container">
      <form action="">
        <table cellPadding={30} className="personal-input-parts">
          <tbody className="name">
            <tr>
              <td>
                <label htmlFor="name">სახელი</label>
                <br />
                <input type="text" placeholder="ანზორი" id="name" required />
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
                />
                <span>
                  უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="submit-personal">ᲨᲔᲛᲓᲔᲒᲘ</button>
      </form>
    </section>
  );
};

export default Personal;
