import React, { useState } from 'react';

export default function App() {
  const [clicks, setClicks] = useState(0);

  const projects = [
    { name: "Portfolio Website", desc: "My personal portfolio project." },
    { name: "Todo App", desc: "A simple task manager." },
    { name: "Blog Platform", desc: "React-based blogging project." }
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <div>
      <nav>
        <h1>Ogunleye Emmanuel Adebayo</h1>
        <div>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
      </nav>

      <h2>Welcome to My Portfolio</h2>
      <p>Matric Number: 24/1379</p>

      <button onClick={() => setClicks(clicks + 1)}>
        Clicked {clicks} times
      </button>

      <h2 id="projects">Projects</h2>
      {projects.map((p, i) => (
        <div key={i} className="card">
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
        </div>
      ))}

      <h2 id="skills">Skills</h2>
      <div className="skills">
        {skills.map((s, i) => (
          <span key={i} className="skill">{s}</span>
        ))}
      </div>
    </div>
  );
}
