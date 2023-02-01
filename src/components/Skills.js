import data from "../db/data.json";

function Skills() {
  const skills = data.skills;

  return (
    <div className="section skills">
      <h2>Skills</h2>
      <div className="skills-box">
        <ul>
          {skills.map((e) => {
            return(
                <li key={e.name}>
                    <img src={e.logo} alt={`${e.name} logo`} />
                    <h3>{e.name}</h3>
                </li>
            )
          } )}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
