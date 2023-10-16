import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vasif Uravakonda</h1>
        <p>MERN Full-Stack Developer</p>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>
          I am a passionate full-stack developer with a strong focus on creating clean,
          elegant, and efficient solutions. With a background in computer
          science and a keen eye for design, I enjoy turning complex problems
          into simple, beautiful, and intuitive designs.
        </p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <div className="Project">
          <h3>Project 1</h3>
          <p>A simple React app that displays a list of projects.</p>
          <button class="bg-warning"><a href="https://example.com/project-1">project1</a></button>
        </div>
        <div className="Project">
          <h3>Project 2</h3>
          <p>A more complex React app that uses a database to store and retrieve project data.</p>
          
          <button class="bg-warning"><a href="https://example.com/project-2">project2</a></button>
        </div>
        
      </section>
      <section className="Contact">
        <h2>Contact</h2>
        <p>Email: vasif219515@gmail.com</p>
        <p>Phone: (322) 654-754</p>
        
      </section>
      <footer>
        <p>© 2023 Vasif</p>
      </footer>
    </div>
  );
}

export default App;