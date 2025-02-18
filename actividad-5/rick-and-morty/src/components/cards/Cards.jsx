
import './cards.css'
import { SlLocationPin } from "react-icons/sl";

import { GrLocation } from "react-icons/gr";
import { FaRegCirclePlay } from "react-icons/fa6";


export const Card = ({ nombre, genero, origen, especie, vivo, episodio, imagen }) => {


    return (

        <>

            <div className="Card">


                <img src={imagen}
                    className="Card-img" />


                <h4 className="Nombre">{nombre}</h4>
                <div className="Card-informacion">
                    <div className="Card-iconos">
                        <p className="Card-p">{genero}</p>
                        <p className="Card-p">{especie}</p>
                        <p className='Card-p' >{vivo}</p>


                    </div>
                    <div className="Informacion-icono">
                        <SlLocationPin />

                        <p className="Card-p">{origen}</p>
                    </div>
                    <div className="Informacion-icono">
                        <p className='Card-p'> {episodio}</p>
                    </div>
                </div>


            </div>



        </>
    )


}



export const CardLugares = ({ nombre, tipo, dimension, residentes, img, creacion }) => {




    return (
        <>

            <div className="Card-lugares">


                <div className="Card-info">

                    <div className="Informacion-icono">
                    <GrLocation />
                        <h4 className="Card-titulo">{nombre}</h4>
                    </div>
                    <p className="Card-p">{tipo}</p>
                    <p className="Card-p">{dimension}</p>
                    <p className="Card-p">{creacion}</p>

                </div>


                <div className="Residentes">
                   
                </div>


            </div>

        </>

    )
}




export const CardEpisodios = ({name, date, episode}) => {



    return(

        <>
        
        <div className="Card-episodios">
        <div className="Icono">
        <FaRegCirclePlay style={{fontSize:'30px', color: '#2FD7D8'}}/>
        </div>

        <div className="Card-infoEpisodio">
            <h4>{name}</h4>
            <p className='Card-p'>{date}</p>
            <p className='Card-p'>{episode}</p>
        </div>

        </div>
        
        </>


    )


}