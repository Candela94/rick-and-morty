


import { useState, useEffect } from "react";
import { Card } from "@/components/cards/Cards";
import { Buscador } from "@/components/Buscador";

import { Header } from "@/components/Header";
import { Footer } from "@/components/footer/Footer";

import { PiGenderFemaleBold } from "react-icons/pi";
import { IoMaleSharp } from "react-icons/io5";
import { LiaRedditAlien } from "react-icons/lia";

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


   
    const [personajes, setPersonajes] = useState([]);

    const [totalPaginas, setTotalPaginas] = useState(1)
    const [totalPersonajes, setTotalPersonajes] = useState(0)


    const [searchTerm, setSearchTerm] = useState("");
    // const [busqueda, setBusqueda] = useState("") 

    const [filtroGenero, setFiltroGenero] = useState("")
    const [filtroEspecie, setFiltroEspecie] = useState("")
    const [filtroEstado, setFiltroEstado] = useState("")




    const [pagina, setPagina] = useState(1)





    const obtenerDatos = async () => {

        const response = await fetch(queryParams())
        const jsonData = await response.json();

        setPersonajes(jsonData.results)

        // setTotalPaginas(jsonData.info.pages)
        // setTotalPersonajes(jsonData.info.count)
        


    }


    const queryParams = () => {

        let url = `https://rickandmortyapi.com/api/character?&page=${pagina}&name=${searchTerm}`

        if(filtroGenero) {
            url += `&gender=${filtroGenero}`
        }

        if(filtroEstado) {
          url +=`&status=${filtroEstado}` 
        }

        if(filtroEspecie) {
            url +=`&species=${filtroEspecie}`
        }

        return url;


    }


    useEffect(() => {
        obtenerDatos()
       
    }, [pagina, searchTerm,filtroGenero,filtroEspecie, filtroEstado])


    

   
    const handleGenero = (genero) => {
        setFiltroGenero(genero);
    }

    const handleEspecie = (especie) => {
        setFiltroEspecie(especie);
    }

    const handleEstado = (estado) => {
        setFiltroEstado(estado);
    }



    const handleNext = () => {

        setPagina(pagina + 1)
    }

    const handleAnt = () => {
        if (pagina > 0) {
            setPagina(pagina - 1)
        }
    }











    return (
        <>
        <Header />


            <main className="Main-personajes">
                <h1 className="Main-h1">Characters</h1>

                <Buscador setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

                <SubHeader 
                handleGenero={handleGenero}
                handleEspecie= {handleEspecie}
                handleEstado= {handleEstado}/>
                <div className="Paginacion">

                    <LuChevronsLeft onClick={handleAnt} style={{ color: 'rgba(243, 246, 242, 0.6)', cursor: 'pointer' }} />


                    {/* <div className="Pag-personajes">
                    <p style={{ color: 'rgba(243, 246, 242, 0.6)', fontSize: '12px' }}>Estás en la página {pagina} de {totalPaginas}</p>
                    <p style={{ color: 'rgba(243, 246, 242, 0.6)', fontSize: '12px' }}>Mostrando {personajes.length} personajes de {totalPersonajes}</p>
                    </div> */}



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
                        <p style={{ color: 'rgba(243, 246, 242, 0.8)' }}>No se encontraron personajes  <GiDeadHead />
                        </p>
                    )}
                </div>
            </main>

            <Footer />
        </>
    )

}


export default Personajes