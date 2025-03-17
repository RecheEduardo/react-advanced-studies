import BuscarAlunos from './assets/components/BuscarAlunos'
import CopiarTexto from './assets/components/CopiarTexto'
import Pokedex from './assets/components/Pokedex'
import './App.css'

function App() {
  return (
    <>
      <h1>Testes de requisição por Custom Hooks</h1>
      <hr />
      <Pokedex />
      <hr />
      <BuscarAlunos />
      <hr />
      <CopiarTexto />
    </>
  )
}

export default App
