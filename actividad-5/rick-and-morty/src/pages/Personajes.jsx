


import { useState, useEffect } from "react";
import { Card } from "@/components/cards/Cards";
import { Buscador } from "@/components/Buscador";

import { PiGenderFemaleBold } from "react-icons/pi";
import { IoMaleSharp } from "react-icons/io5";
import { LiaRedditAlien } from "react-icons/lia";
// import plugin from "eslint-plugin-react";


import { FaFaceSmile } from "react-icons/fa6";
import { PiSmileyXEyesFill } from "react-icons/pi";
import { RiAliensFill } from "react-icons/ri";  
import { PiPersonArmsSpreadFill } from "react-icons/pi";  
import { SubHeader } from "@/components/Header";




const Personajes = () => {


    const [datos, setDatos] = useState({});
    const [personajes, setPersonajes] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    // const [busqueda, setBusqueda] = useState("") 

    const [filtroGenero, setFiltroGenero]= useState("")


    // const [filtroEstado, setFiltroEstado] = useState("")
    // const [filtroEspecia, setFiltroEspecie]= useState("")


    const handleFemenino = () => {
        setFiltroGenero("Female");
    }



    const obtenerDatos = async () => {

        const response = await fetch("https://rickandmortyapi.com/api/character")
        const jsonData = await response.json();
        setDatos(jsonData);
        setPersonajes(jsonData.results)


    }




    useEffect(() => {

        obtenerDatos();


    }, [])
     





   
    useEffect(() => {
        // Solo filtrar si datos.results está disponible
        if (datos.results) {
            if (searchTerm === "") {
                setPersonajes(datos.results);
            } else {
                const filtered = datos.results.filter((pers) =>
                    pers.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setPersonajes(filtered);
            }
        }
    }, [searchTerm, datos, filtroGenero]);
 




    return (
        <>
         <main className="Main-personajes">
                <Buscador setSearchTerm={setSearchTerm} />

                <SubHeader handleFemenino={handleFemenino} />
                <div className="Galeria">

                    {personajes && personajes.length > 0 ? (
                        personajes.map((pers, id) => {
                            const genderIcon =
                                pers.gender === 'Male' ? (
                                    <IoMaleSharp style={{ color: '#2FD7D8'  }} />
                                ) : pers.gender === 'Female' ? (
                                    <PiGenderFemaleBold style={{ color: '#2FD7D8' }} />
                                ) : (
                                    <LiaRedditAlien style={{ color: 'pink' }} />
                                );

                            const aliveIcon =
                                pers.status === 'Alive' ? (
                                    <FaFaceSmile style={{ color: '#40FF7F' }} />
                                ) : (
                                    <PiSmileyXEyesFill style={{ color: '#FF4069' }} />
                                );

                            const humanIcon =
                                pers.species === 'Human' ? (
                                    <PiPersonArmsSpreadFill style={{ color: '#B9CBFF' }} />
                                ) : (
                                    <RiAliensFill style={{ color: '#A109EE' }} />
                                );

                            return (
                                <Card
                                    key={id}
                                    imagen={pers.image}
                                    nombre={pers.name}
                                    genero={genderIcon}
                                    origen={pers.origin.name}
                                    especie={humanIcon}
                                    vivo={aliveIcon}
                                    // episodio={pers.episode} 
                                />
                            );
                        })
                    ) : (
                        <p>No se encontraron personajes</p>
                    )}
                </div>
            </main>
        </>
    )

}


            export default Personajes