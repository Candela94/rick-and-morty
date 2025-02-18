


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'


import { Footer } from './components/footer/Footer'
import { Buscador } from './components/Buscador'


import Personajes from './pages/Personajes'
import { Card } from './components/cards/Cards'
import { Header } from './components/Header'


import Episodios from './pages/Episodios'
import Lugares from './pages/Lugares'
import Inicio from './pages/Inicio'

import { BrowserRouter, Route, Routes } from 'react-router'
import { CheckBox } from './components/CheckBox'




function App() {

  

  const [count, setCount] = useState(0)



  return (
    <>
 
   <BrowserRouter> 
    
    
    <Routes>

      <Route path='/' element={<Inicio />}></Route>
      <Route path='/lugares' element={<Lugares />}></Route>
      <Route path='/episodios' element={<Episodios />}></Route>
      <Route path='personajes' element={<Personajes />}></Route>

    </Routes>
    
    
    
    </BrowserRouter>
 




    
  
  




    </>
  )




}

export default App
