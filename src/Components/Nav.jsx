import React from "react";
import { Link } from "react-router-dom";
import "./Componentscss/Nav.css"
import icono from "../Components/Componentsimg/usuario.png"

const Nav = () => {
  return (
    <div>
      <nav>
            <div class="izquierda">
                <Link to="/"><h1 class="Titulo text-black text-decoration-none">PRADA</h1></Link>
            </div>
            <div class="centro">
                <ul><li><Link class="options text-black text-decoration-none" to="/Pagina2"><b>WOMEN</b></Link></li></ul>
                <ul><li><Link class="options text-black text-decoration-none" to="/Pagina3"><b>MEN</b></Link></li></ul>
                <ul><li><Link class="options text-black text-decoration-none" to="/Pagina4"><b>BAGS</b></Link></li></ul>
            </div>
            <div class="derecha">
                <Link to="/Pagina5"><img class="search" src={icono} alt=""/></Link>
            </div>

        </nav>
    </div>
  );
};

export default Nav;
