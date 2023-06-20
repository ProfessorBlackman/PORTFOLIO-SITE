import { Route, Routes } from 'react-router-dom'
import "./components/ColorScheme/ColorScheme";

import DarkModeToggle from './components/ColorScheme/ColorScheme';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import CV from './pages/CV/CV';
import './App.css'
import NavBar from './components/NavBar/navBar';
import ContactMe from './pages/ContactMe/ContactMe';
import Blog from './pages/Blog/Blog';
import { useEffect } from 'react';

import ReactGA from 'react-ga';
import {inject} from "@vercel/analytics";


inject();

function App() {
    ReactGA.initialize(' G-8S5FNDQYYQ');
    useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);



    // const [isDarkMode, setIsDarkMode] = useState(false);
  
    // const handleDarkModeToggle = () => {
    //   setIsDarkMode(!isDarkMode);
    //   localStorage.setItem('dark-mode',"true")
    //   document.documentElement.classList.toggle("dark-mode");
    // };

    // useEffect(()=>{
    //   const mode = Boolean(localStorage.getItem('dark-mode'))
    //   if (mode) {
    //     setIsDarkMode(!isDarkMode)
    //     document.documentElement.classList.toggle("dark-mode");
    //   }
    // },[])

  return (
    <div className='body-container'>
      <NavBar>
        <DarkModeToggle/>
      </NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/contact-me' element={<ContactMe />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
