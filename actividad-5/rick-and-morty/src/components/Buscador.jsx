import { useState } from "react"



export const Buscador = ({setSearchTerm}) => {

    const [buscador, setBuscador] = useState('')

    const handleChange = (e) => {
        setBuscador(e.target.value)
        setSearchTerm(e.target.value)
    }
    return (

        <>
<div className="Buscador">
            <input 
            value={buscador}
            onChange={handleChange}
            type="search" className="Input-buscador" placeholder="Buscar" />
            <button className="Input-filtros"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>



            </button>
            </div>

        </>



    )

}