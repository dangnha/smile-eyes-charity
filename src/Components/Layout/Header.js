import { Link } from "react-router-dom";
import "./Header.css"
import Language from "./Language";
import { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState(
    {
      image: './image/vietnam.png',
      language: 'Vietnamese'
    }
  )

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav id="nav">
      <div id="navbar-language">
        <Language selected={selected} setSelected={setSelected}/>
      </div>

      <div id="navbar-title">

        <div id="logo">
          <img src="./image/logo.png" alt="abc" />
          <p>Smile Eye Charity</p>
        </div>

        <div>
        <ul id="title" className={clicked ? "#title active" : "title"}>
            <li><Link to="/"><p>Home</p></Link></li>
            <li><Link to="/programs"><p>Project</p></Link></li>
            <li><Link to="/aboutus"><p>About Us</p></Link></li>
            <li><Link to="/contact"><p>Contact</p></Link></li>
            <li><Link to="/sponsor"><p>Sponsor</p></Link></li>
        </ul>
        </div>

        <div id="mobile" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        
      </div>
    </nav>
  );
};

export default Header;
