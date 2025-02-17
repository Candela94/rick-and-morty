
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



export const CardLugares = ({ nombre, tipo, dimension, residentes, img, creacion }) => {




    return (
        <>

            <div className="Card-lugares">


                <div className="Card-imgInfo">
                    <img src={img} alt="lugar" className="Card-imgLugar" />

                    <div className="Infor-lugar">
                        <h3 className="Card-titulo">{nombre}</h3>
                        <p className="Card-p">{tipo}</p>
                        <p className="Card-p">{dimension}</p>
                        <p className="Card-p">{creacion}</p>
                    </div>
                </div>


                <div className="Residentes">
                    <img src={residentes} alt="residente1" className="Residente1" />
                    <img src={residentes} alt="residente2" className="Residente1" />
                </div>


            </div>

        </>

    )
}