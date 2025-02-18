


import { PiGenderIntersexBold } from "react-icons/pi";
import { RiAliensFill } from "react-icons/ri"; 
import { FaFaceSmile } from "react-icons/fa6";
import { NavLink } from "react-router";

import { useState } from "react";


export const  Header = () => {

    return (

        <>
        
        <header className="Header">
            <nav className="Header-nav">
                <NavLink to='/'><img className = "Header-img" src="./public/img/rick-morty.png" alt="logo" /></NavLink>
            </nav>
        </header>
        
        
        </>
    )

}






export const SubHeader = ({handleGenero}) => {




const [menu, setMenu] = useState (null)


const handleAbrirMenu = (categoria) => {
    setMenu (menu === categoria  ? null : categoria)
   
}



return(
    <>



    <header className={`SubHeader ${menu ? 'open' : ''}`}> 


  <nav className="SubHeader-nav">
    <ul className="SubHeader-ul">
        <li className="SubHeader-li">
            <button onClick={() => handleAbrirMenu ('genero')} className="Filtros">
            <PiGenderIntersexBold />
                <p className="Filtros-p">Género  </p>
           
                </button>
            
        {menu === 'genero' && (

            <nav className={`Menu-navFiltro ${menu === 'genero' ? 'open' : ''}`}>
                <ul className="Menu-ul">
                    <li><button className="Menu-buttons">Male</button></li>
                    <li><button className="Menu-buttons">Female</button></li>
                    <li><button className="Menu-buttons">Alien</button></li>
                </ul>
            </nav>

        )}
        </li>






        <li className="SubHeader-li">
        <button onClick={() => handleAbrirMenu ('especie')}  className="Filtros">
        <RiAliensFill />
                <p className="Filtros-p"> Especie  </p>
            

                </button>


                {menu === 'especie' && (

<nav className={`Menu-navFiltro ${menu === 'especie' ? 'open' : ''}`}>
    <ul className="Menu-ul">
        <li><button  className="Menu-buttons">Humano</button></li>
        <li><button  className="Menu-buttons">Alien</button></li>
     
    </ul>
</nav>

)}
        </li>
        <li className="SubHeader-li">
        <button  onClick={() => handleAbrirMenu ('estado')} className="Filtros">
        <FaFaceSmile  />
                <p className="Filtros-p">Estado  </p>
              

                </button>




                {menu === 'estado' && (

<nav className={`Menu-navFiltro ${menu === 'estado' ? 'open' : ''}`}>
    <ul className="Menu-ul">
        <li><button className="Menu-buttons">Vivo</button></li>
        <li><button className="Menu-buttons">Muerto</button></li>
     
    </ul>
</nav>

)}
        </li>
    </ul>
</nav>
    </header>
    
    </>
)

}