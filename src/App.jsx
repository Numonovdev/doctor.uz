import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bemorlar from './pages/Bemorlar'
import Tahlillar from './pages/Tahlillar'
import Navbatlar from './pages/Navbatlar'
import Profil from './pages/Profil'
import Xatopage from './pages/Xatopage'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bemorlar' element={<Bemorlar />} />
        <Route path='/tahlillar' element={<Tahlillar />} />
        <Route path='/navbatlar' element={<Navbatlar />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Xatopage />} />
      </Routes>
  
  )
}

export default App
