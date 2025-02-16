
import './cards.css'
import { SlLocationPin } from "react-icons/sl";



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