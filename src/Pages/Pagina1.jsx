import React from 'react';
import "./Pagescss/Pagina1.css"
// import Video from "./Pagesimg/12.mp4"
import { Link } from 'react-router-dom';
import Video1 from "../Components/video1"

const Pagina1 = () => {
    // return(
    //     <div>
    //         cl
    //     </div>
    // )
    return (
        <div>
        
        <Video1/>
        
        <div class="abajo">
            <div class="izq">
                <div class="contenido1">
                    <Link to="/Pagina2"><h5 class="tituls">Women's Bags</h5></Link>
                    <Link class="disc" to="/Pagina2">Discover</Link>
                </div>
            </div>
            <div class="der">
                <div class="contenido2">
                    <Link to="/Pagina3"><h5 class="tituls">Prada Re-Edition</h5></Link>
                    <p>A new version of an icon, with gold touches</p>
                    <Link class="disc" to="/Pagina3">Discover</Link>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Pagina1;
