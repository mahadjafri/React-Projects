import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const listSkills = [
  { skill: "Analytics", level: "advanced", color: "red" },
  { skill: "Machine Learning", level: "advanced", color: "skyblue" },
  { skill: "Python", level: "advanced", color: "orange" },
  { skill: "SQL", level: "advanced", color: "silver" },
  { skill: "Gen AI", level: "intermediate", color: "pink" },
  { skill: "React", level: "intermediate", color: "green" },
  { skill: "JavaScript", level: "intermediate", color: "yellow" },
  { skill: "CSS", level: "beginner", color: "purple" },
];

const emoji = {
  beginner: "👶",
  intermediate: "👍",
  advanced: "💪",
};

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img className="avatar" src={"pfp.jpeg"} alt="profile" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Mahad Jafri</h1>
      <h2>Data Scientist & Automation Expert</h2>
      <p>
        I love using data to crack tough problems and building automations that
        take the boring work off people’s plates. Lately, I’ve been diving into
        web development in my free time to broaden my skills and build more
        well-rounded solutions.
      </p>
      <p>Here are the skills that I bring to the table:</p>
    </div>
  );
}

function Skill({ skillobj }) {
  console.log(skillobj);
  const skillemoji = emoji[skillobj.level];

  return (
    <div className="skill" style={{ backgroundColor: skillobj.color }}>
      <span>
        {skillobj.skill}
        {skillemoji}
      </span>
    </div>
  );
}

function SkillList() {
  const num_skills = listSkills.length;
  return (
    <ul className="skill-list">
      {num_skills > 0
        ? listSkills.map((skill) => <Skill skillobj={skill} />)
        : "No Skills Mastered"}
    </ul>
    // <div className="skill-list">
    //   <Skill name="HTML" emoji="🦆" color="red" />
    //   <Skill name="CSS" emoji="🦀" color="blue" />
    //   <Skill name="JavaScript" emoji="🐑" color="orange" />
    //   <Skill name="React" emoji="🦫" color="yellow" />
    //   <Skill name="Nodejs" emoji="🍄" color="green" />
    // </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
