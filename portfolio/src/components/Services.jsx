const Services = () => {
  return (
    <section>
      <h2 className="greeting">My Services</h2>

      <div>
        {/* Service 1 */}
        <div>
          <h3>Fullstack Webpage Development</h3>
          <p>
            Development of web applications from scratch, including frontend and backend development. With a focus on what the customer needs and
            wants. Through the use of MERN stack technologies, I can create responsive and user-friendly web applications.
          </p>
        </div>

        {/* Service 2 */}
        <div>
          <h3>Thirdparty API Integrations</h3>
          <p> Integration of third-party APIs into existing web applications to enhance functionality and provide additional features for users.</p>
        </div>

        {/* Service 3 */}
        <div>
          <h3>Database Design</h3>
          <p>
            Design and implementation of databases to store and manage data for applications. This includes creating database schemas, defining
            relationships between tables, and ensuring data integrity.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Services;
