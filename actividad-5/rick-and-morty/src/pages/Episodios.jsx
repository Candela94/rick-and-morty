
import { Header } from "@/components/Header"
import { Footer } from "@/components/footer/Footer"
import { Buscador } from "@/components/Buscador"

import { LuChevronsRight } from "react-icons/lu";
import { LuChevronsLeft } from "react-icons/lu";

import { useState, useEffect } from "react"

import { CardEpisodios } from "@/components/cards/Cards";


const Episodios = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [pagina, setPagina] = useState(1)
    const limit = 4;


 
    const [totalPaginas, setTotalPaginas] = useState(1)
    const [totalEpisodios, setTotalEpisodios] = useState(0)

    const [episodios, setEpisodios] = useState([])

    const handleNext = () => {

        setPagina(pagina + 1)
    }

    const handleAnt = () => {
        if (pagina > 0) {
            setPagina(pagina - 1)
        }
    }



    const obtenerDatos = async () => {

        const response = await fetch(`https://rickandmortyapi.com/api/episode?&page=${pagina}&name=${searchTerm}`)

        const jsonData = await response.json();
        setEpisodios(jsonData.results)


        setTotalPaginas(jsonData.info.pages)
        setTotalEpisodios(jsonData.info.count)


    }


    useEffect(() => {
        obtenerDatos()
    },[])


    return (

        <>
            <Header />


            <main className="Main-personajes">
                <h1 className="Main-h1">Episodios</h1>
                <Buscador setSearchTerm={setSearchTerm} />



                <div className="Paginacion">

                    <LuChevronsLeft onClick={handleAnt} style={{ color: 'rgba(243, 246, 242, 0.6)', cursor: 'pointer' }} />


                    <div className="Pag-personajes">
                        <p style={{ color: 'rgba(243, 246, 242, 0.6)', fontSize: '12px' }}>Estás en la página {pagina} de {totalPaginas}</p>
                        <p style={{ color: 'rgba(243, 246, 242, 0.6)', fontSize: '12px' }}>Mostrando {episodios.length} episodios de {totalEpisodios}</p>
                    </div>



                    <LuChevronsRight onClick={handleNext} style={{ color: 'rgba(243, 246, 242, 0.6)', cursor: 'pointer' }} />


                </div>

<div className="Galeria-episodios">


        {

            episodios.map((episode, id) => {

                return(
                    <CardEpisodios 
                    key={id}
                    name={episode.name}
                    date={episode.air_date}
                    episode={episode.episode}
                    
                    
                    />
                )
            })
        }

</div>
           
            </main>

            <Footer />
        </>
    )
}


export default Episodios