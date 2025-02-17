


import { useState, useEffect } from "react";
import { Card } from "@/components/cards/Cards";
import { Buscador } from "@/components/Buscador";

import { PiGenderFemaleBold } from "react-icons/pi";
import { IoMaleSharp } from "react-icons/io5";
import { LiaRedditAlien } from "react-icons/lia";
// import plugin from "eslint-plugin-react";
import { GiDeadHead } from "react-icons/gi";

import { FaFaceSmile } from "react-icons/fa6";
import { PiSmileyXEyesFill } from "react-icons/pi";
import { RiAliensFill } from "react-icons/ri";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { SubHeader } from "@/components/Header";
import { LuChevronsRight } from "react-icons/lu";
import { LuChevronsLeft } from "react-icons/lu";
import { FaQuestion } from "react-icons/fa";




const Personajes = () => {


    const [datos, setDatos] = useState({});
    const [personajes, setPersonajes] = useState([]);


    const [searchTerm, setSearchTerm] = useState("");
    // const [busqueda, setBusqueda] = useState("") 

    const [filtroGenero, setFiltroGenero] = useState("")

    const [pagina, setPagina] = useState(1)
    const limit = 4;



    // const [filtroEstado, setFiltroEstado] = useState("")
    // const [filtroEspecia, setFiltroEspecie]= useState("")




    const obtenerDatos = async () => {

        const response = await fetch(`https://rickandmortyapi.com/api/character?limit=${limit}&page=${pagina}`)
        const jsonData = await response.json();
        setDatos(jsonData);
        setPersonajes(jsonData.results)


    }

    const handleNext = () => {

        setPagina(pagina + 1)
    }

    const handleAnt = () => {
        if (pagina > 0) {
            setPagina(pagina - 1)
        }
    }


    useEffect(() => {

        obtenerDatos();
        console.log(`pagina actual ${pagina}`)


    }, [pagina])







    useEffect(() => {
        // Solo filtrar si datos.results está disponible
        if (datos.results) {
            let filtered = datos.results


            //Filtro por nombre 
            if (searchTerm !== "") {

                filtered = datos.results.filter((pers) =>
                    pers.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            //Filtro por género
            if (filtroGenero !=="") {
                filtered = filtered.filter((pers) => pers.gender === filtroGenero)
            }


            setPersonajes(filtered);
        }
    }, [searchTerm, datos, filtroGenero]);



    //Filtro por genero

    const handleGenero = (genero) => {
        setFiltroGenero(genero)   //Alternar entre los géneros
    }





    return (
        <>
            <main className="Main-personajes">
                <h1 className="Main-h1">Personajes</h1>
                <Buscador setSearchTerm={setSearchTerm} />

                <SubHeader handleGenero={handleGenero} />
                <div className="Paginacion">
                    <LuChevronsLeft onClick={handleAnt} style={{ color: 'rgba(243, 246, 242, 0.6)', cursor: 'pointer' }} />
                    <p style={{ color: 'rgba(243, 246, 242, 0.6)', fontSize: '12px' }}>Estás en la página {pagina}</p>
                    <LuChevronsRight onClick={handleNext} style={{ color: 'rgba(243, 246, 242, 0.6)', cursor: 'pointer' }} />


                </div>
                <div className="Galeria">




                    {personajes && personajes.length > 0 ? (
                        personajes.map((pers, id) => {
                            const genderIcon =
                                pers.gender === 'Male' ? (
                                    <IoMaleSharp style={{ color: '#2FD7D8' }} />
                                ) : pers.gender === 'Female' ? (
                                    <PiGenderFemaleBold style={{ color: '#2FD7D8' }} />
                                ) : (
                                    <FaQuestion style={{ color: 'pink' }} />
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
                        <p style={{color:'rgba(243, 246, 242, 0.8)'}}>No se encontraron personajes  <GiDeadHead />
</p>
                    )}
                </div>
            </main>
        </>
    )

}


export default Personajes