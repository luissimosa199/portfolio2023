import WhiteDivider from "./WhiteDivider.js";

function About() {
  return (
    <div id="about" className="section about">
      <h2>Sobre mi</h2>
      <p>
        Me inicié en la programación impulsado por años de interes en la
        automatización, las computadoras y el internet.
      </p>
      <p>
        Me considero una persona curiosa por naturaleza, siempre interesado en
        aprender nuevas herramientas y mejores practicas.
      </p>
      <p>
        Trato de hacer siempre algo nuevo con cada proyecto y de sacarle el 100%
        de provecho a los conocimientos que he recolectado.
      </p>
      <div className="about-divider">
        <WhiteDivider />
      </div>
    </div>
  );
}

export default About;
