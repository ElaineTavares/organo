import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return ( 
      <div>
        <Banner/>
        <Formulario/>   
      </div>
  )
}

export default App
