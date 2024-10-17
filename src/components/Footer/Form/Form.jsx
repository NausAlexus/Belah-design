import "./Form.css";

const Form = () => {
  return (
    <>
      <form className="form-registration" action="#" method="post">
        <div className="registration-name">
          <div>
            <p>Nombre (required)</p>

            <label htmlFor="FirstuserName">First Name</label>
            <input type="text" id="FirstuserName" required />
          </div>
          <div>
            <label htmlFor="LastuserName">Last Name</label>
            <input type="text" id="LastuserName" />
          </div>
        </div>
        <div className="email-registrations">
          <label htmlFor="email-registration">Correo (required)</label>
          <input type="email" name="email" id="email-registration" required />
          <div className="cheked-news">
            <input type="checkbox" name="news" id="singup-news" />
            <label htmlFor="singup-news">Sign up for news and updates</label>
          </div>
        </div>
        <div className="asunto-registration">
          <label htmlFor="asunto">Asunto (required)</label>
          <input type="text" required />
        </div>
        <div className="mensaje-registration">
          <label htmlFor="Mensaje">Mensaje (required)</label>
          <textarea name="Mensaje" id="Mensaje" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;