import BuscarAlunos from './assets/components/BuscarAlunos'
import CopiarTexto from './assets/components/CopiarTexto'
import Pokedex from './assets/components/Pokedex'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/NavBar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<BuscarAlunos />} />  
        <Route path='/pokedex' element={<Pokedex />} />  
        <Route path='/copytext' element={<CopiarTexto />} />  
      </Routes>
    </>
  )
}

export default App
