
import { useState, useEffect } from "react"
import { CardLugares } from "@/components/cards/Cards"

import { Buscador } from "@/components/Buscador";
import { LuChevronsRight } from "react-icons/lu";
import { LuChevronsLeft } from "react-icons/lu";
import { Header } from "@/components/Header";
import { Footer } from "@/components/footer/Footer";

const Lugares = () => {


    const [data, setData] = useState({});
    const [lugares, setLugares] = useState([])


    const [searchTerm, setSearchTerm] = useState("");

    const [pagina, setPagina] = useState(1)
    const limit = 4;





    const handleNext = () => {

        setPagina(pagina + 1)
    }

    const handleAnt = () => {
        if (pagina > 0) {
            setPagina(pagina - 1)
        }
    }




    useEffect(() => {
        // Solo filtrar si datos.results está disponible
        if (data.results) {


            if (searchTerm === "") {
                setLugares(data.results);
            } else {
                const filtered = data.results.filter((place) =>
                    place.name.toLowerCase().includes(searchTerm.toLowerCase())
                );



                setLugares(filtered);
            }
        }
    }, [searchTerm, data]);

    const obtenerLugares = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/location&page=${pagina}&name=${searchTerm}`)
        const jsonData = await response.json();

        setData(jsonData);
        setLugares(jsonData.results)

    }




    useEffect(() => {
        obtenerLugares()
    }, [])

    return (

        <>

        <Header />
            <main className="Main-personajes">
                <h1 className="Main-h1">Lugares</h1>

                <Buscador setSearchTerm={setSearchTerm} />
                <div className="Paginacion">
                    <LuChevronsLeft onClick={handleAnt} style={{ color: 'rgba(243, 246, 242, 0.6)', cursor:'pointer' }} />
                    <p style={{ color: 'rgba(243, 246, 242, 0.6)', fontSize: '12px' }}>Estás en la página {pagina}</p>
                    <LuChevronsRight onClick={handleNext} style={{ color: 'rgba(243, 246, 242, 0.6)', cursor:'pointer' }} />


                </div>


                {

                    lugares.map((lugar, id) => {
                        return (

                            <CardLugares
                                key={id}
                                img={lugar.url}
                                nombre={lugar.name}
                                tipo={lugar.type}
                                creacion={lugar.created}



                            />
                        )
                    })
                }


            </main>

<Footer />
        </>
    )
}


export default Lugares