import "./App.css";
function App() {
  return (
  
    
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Urvi Bhagat</h1>
          <h2>Computer Engineering Student</h2>
          <p>
            Passionate Computer Engineering student with knowledge of React,
            JavaScript, GitHub, Supabase and Web Development.
          </p>

          <button>Contact Me</button>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am Urvi Bhagat, a Diploma Computer Engineering student. I have
          completed my second year and am currently doing an internship. I enjoy
          building modern web applications and learning new technologies.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-box">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>GitHub</span>
          <span>Supabase</span>
          <span>VS Code</span>
        </div>
      </section>
    

      <section id="projects" className="projects">
  <h2>Projects</h2>

  <div className="project-container">
    <div className="project-card">
      <h3>E-Commerce Website</h3>
      <p>
        Developed a responsive online shopping website using React and modern
        web technologies.
      </p>
    </div>

    <div className="project-card">
      <h3>Agri Senses</h3>
      <p>
        Smart agriculture startup project focused on helping farmers with
        technology-driven solutions.
      </p>
    </div>

    <div className="project-card">
      <h3>CRUD Application</h3>
      <p>
        Built a CRUD application with React and database integration for data
        management.
      </p>
    </div>
  </div>
</section>
<section id="contact" className="contact">
  <h2>Contact Me</h2>
  <p>Email: urvibhagat@example.com</p>
  <p>Phone: +91 XXXXX XXXXX</p>
  <p>Location: Vaitarna, Maharashtra</p>
</section>
<nav className="navbar">
  <h2>Urvi Portfolio</h2>

  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
    </>
  );
}

export default App;