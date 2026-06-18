import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Hi, I'm Gayathri 👩‍💻</h1>
        <p>Frontend Developer | React Learner</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a Computer Science student passionate about web development and
          React.js.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>HTML, CSS, JavaScript, React, TypeScript</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>Tic Tac Toe Game</li>
          <li>To-Do List App</li>
          <li>Portfolio Website</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: gayathribnair@gmail.com</p>
      </section>
    </div>
  );
}
