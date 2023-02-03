import PurpleDivider from "./PurpleDivider";

function Intro() {
  return (
    <div className="section intro">
      <h2>Desarrollador web fullstack</h2>
      <p>
        Me gusta resolver problemas de manera simple, aprender nuevas
        herramientas y crear sitios interesantes y atractivos
      </p>
      <div className="intro-photo">
        <img
          src="https://live.staticflickr.com/65535/52667033048_3424147583.jpg"
          width="300"
          height="251"
          alt="Luis Simosa avatar"
        />
      </div>
      <div className="intro-img">
        <PurpleDivider />
      </div>
    </div>
  );
}

export default Intro;
