import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './home/Home';
import Personajes from './personajes/Personajes';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personajes/:id" element={<Personajes />} />
    </Routes>
    </>
  )
}

export default App
