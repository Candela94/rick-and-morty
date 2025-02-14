


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'


import { Nav } from './components/footer/Nav'
import { Buscador } from './components/Buscador'


import Personajes from './pages/Personajes'
import { Card } from './components/cards/Cards'


function App() {



  const [count, setCount] = useState(0)



  return (
    <>
 

 <Personajes />

     {/* <Buscador />  */}
    <Nav />
  




    </>
  )




}

export default App
