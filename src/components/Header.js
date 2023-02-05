function Header() {
  return (
    <header>
      <img
        src="https://live.staticflickr.com/65535/52662785736_8401cc437b_m.jpg"
        width="95"
        height="95"
        alt="Luis Simosa Logo"
      />
      <ul>
        <input type="checkbox" name="menuicon" id="menuicon" className="menucheckbox"/>
        <label htmlFor="menuicon" className="menuicon">≡</label>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </header>
  );
}

export default Header;
