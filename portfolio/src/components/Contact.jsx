import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="contact-container">
      <h2 className="greeting">Contact Me</h2>

      <form onSubmit={handleSubmit} action="" method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" required />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" required />
        </div>

        <br />

        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
