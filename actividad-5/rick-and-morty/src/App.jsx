


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'


import { Nav } from './components/footer/Nav'
import { Buscador } from './components/Buscador'


import Personajes from './pages/Personajes'
import { Card } from './components/cards/Cards'
import { Header } from './components/Header'


import Episodios from './pages/Episodios'
import Lugares from './pages/Lugares'
import Inicio from './pages/Inicio'


function App() {

  const pathvalue= window.location.pathname.slice(1) || 'inicio';
  console.log(pathvalue);
  let page;

  switch(pathvalue) {
    case 'personajes' : page = <Personajes />; break; case 'episodios': page = <Episodios />; break; case 'lugares': page = <Lugares /> ; break; default:page = <Inicio />
  }


  const [count, setCount] = useState(0)



  return (
    <>
 
 <Header />

 <Personajes />


     {/* <Buscador />  */}
    <Nav />
  




    </>
  )




}

export default App
