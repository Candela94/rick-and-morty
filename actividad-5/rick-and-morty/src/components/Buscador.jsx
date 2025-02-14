import { useState } from "react"



export const Buscador = ({setBusqueda}) => {

    const [buscador, setBuscador] = useState('')

    const handleChange = (e) => {
        setBuscador(e.target.value)
        setBusqueda(e.target.value)
    }
    return (

        <>
<div className="Buscador">
            <input 
            value={buscador}
            onChange={handleChange}
            type="search" className="Input-buscador" placeholder="Buscar" />
            <button className="Input-filtros"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>


            </button>
            </div>

        </>



    )

}