
import './cards.css'



export const Card = ({ nombre, genero, origen, especie, vivo, episodio, imagen }) => {


    return (

        <>

            <div className="Card">


                <img src={imagen} 
                className="Card-img" />


                    <h4 className="Nombre">{nombre}</h4>
                    <div className="Card-informacion">
                    <p className="Card-p">{genero}</p>
                    <p className="Card-p">{origen}</p>
                    <p className="Card-p">{especie}</p>

                    <p className='Card-p' >{vivo}</p>
                    <p className='Card-p'> {episodio}</p>
              
                    </div>


            </div>



        </>
    )


}