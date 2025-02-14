


import { useState, useEffect } from "react";
import { Card } from "@/components/cards/Cards";
import { Buscador } from "@/components/Buscador";

import { PiGenderFemaleBold } from "react-icons/pi";
import { IoMaleSharp } from "react-icons/io5";
import { LiaRedditAlien } from "react-icons/lia";
// import plugin from "eslint-plugin-react";


const Personajes = () => {


    const [datos, setDatos] = useState({});
    const [personajes, setPersonajes] = useState([]);

    const [resultados, setResultados] = useState([]);
    const [busqueda, setBusqueda] = useState("") //se almacena lo que se busca 




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

        const resultadosFiltrados = personajes.filter((personaje) => personaje.name.toLowerCase().includes(busqueda.toLowerCase()));

        setResultados(resultadosFiltrados);
    }, [busqueda, personajes])

    return (
        <>
        
        <h1>Hola</h1>

        <Buscador /> 

        <div className="Galeria">
            {
                 personajes.map((pers, id) => {

                    const genderIcon = pers.gender === 'Male' ? <IoMaleSharp style={{color:'#a1f771'}} /> : pers.gender==='Female' ? <PiGenderFemaleBold  style={{color:'#2FD7D8'}} /> : <LiaRedditAlien  style={{color:'pink'}} />;

                   return (
                       <Card key={id} imagen={pers.image} nombre={pers.name} genero={genderIcon} origen={pers.origin.name} especie={pers.species} vivo={pers.status} episodio={pers.episodie} />
                   );
                
                 })
            }
        </div>
        
        
        </>
    )

}


            export default Personajes