function Footer() {
    const paw = "https://github.com/Szpytma/";
    const faizan = "https://github.com/SomeRandomGuy64";
    let year = new Date().getFullYear();
  
    return (
      <footer>
        Created by{" "}
        <a href={paw} target="_blank" rel="noreferrer">
          Paw
        </a>{" "}
        and{" "}
        <a href={faizan} target="_blank" rel="noreferrer">
          Faizan
        </a>{" "}
        ® {year}
      </footer>
    );
  }
  
  export default Footer;