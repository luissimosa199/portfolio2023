import data from "../db/data.json";

function Contact() {
  const contact = data.contact;

  return (
    <div className="section contact">
      <h2>Contacto</h2>
      <img
        src="https://live.staticflickr.com/65535/52663144505_295a3c1f06_m.jpg"
        width="95"
        height="95"
        alt="Luis Simosa Logo"
      />
      <p>Puedes conocer un poco más de mi trabajo en los siguientes enlaces</p>
      <p>Te invito a contactarme!</p>

      <div className="contact-links">{
        contact.map((e) => {
            return(
                <div className="contact-link" key={e.name}>
                    <a href={e.link}>
                    <img src={e.icon} alt={`${e.name}`} />
                    </a>
                </div>
            )
        })
      }</div>

      <h3>Luis Simosa, 2023</h3>
    </div>
  );
}

export default Contact;
