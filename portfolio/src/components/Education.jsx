import "../style/Education.css";

const Education = () => {
  return (
    <section className="education-container">
      <div className="education-card">
        <header className="education-header">
          <h2 className="greeting">Education</h2>
          <hr></hr>
          <hr className="divider" />
        </header>

        <div className="education-list">
          {/* Schooling 1*/}
          <div className="education-item">
            <div className="education-top">
              <h3 className="degree">Software Engineering Technology</h3>
            </div>
            <p className="institution">Centennial College • Toronoto, ON</p>
            <p className="description">2025 - Present</p>
          </div>
          <hr></hr>
          {/* Schooling 2 */}
          <div className="education-item">
            <div className="education-top">
              <h3 className="degree">Welding & Fabrication</h3>
            </div>
            <p className="institution">Mohawk College • Hamilton, ON</p>
            <p className="description">2022-2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
