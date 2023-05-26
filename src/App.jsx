import { Route, Routes } from 'react-router-dom'


import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import CV from './pages/CV/CV';
import './App.css'
import NavBar from './components/NavBar/navBar';

function App() {

  return (
    <div className='body-container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/cv' element={<CV />} />
      </Routes>
    </div>
  )
}

export default App
