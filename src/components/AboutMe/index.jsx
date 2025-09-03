import "./AboutMe.css";


function AboutMe() {
  return (
    <div className="about-div">
      <img
        className="profile-photo"
        src="src\imgs\Perfil_Vinissin-removebg-preview.png"
        alt="profilePic"
      />
      <div>
      <h1>Sobre mim:</h1>
      <p>
        Me chamam de Nissin, tenho 22 anos e sou desenvolvedor web full stack.
        Apaixonado por animais, música, jogos, culinária e tecnologia, encontro
        na programação a oportunidade de criar experiências digitais únicas.
        Mineiro de Juiz de Fora, sou movido pelo compromisso de transformar
        ideias em código e ajudar a construir o futuro da web.
      </p>
      </div>
    </div>
  );
}

export default AboutMe;
