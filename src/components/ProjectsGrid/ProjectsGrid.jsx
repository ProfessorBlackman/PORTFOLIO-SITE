import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './ProjectsGrid.css'
import Grid from './Grid/Grid'

export default function ProjectsGrid() {
  return (
    <div>
        <div className='Main'>
            <div className='Headie'>
                    <h1 className='H1'> Projects Portfolio</h1>
                    <p>Search profects by title or filter by category</p>
            </div>
                <div className='Projects'>
                    <div className='SearchAndFilter'>
                        <div className='Input-Style Search'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} color="#000000" className="Searchicon" />
                            <input type='text' id='Search-Input' placeholder='Search Projects'/>
                        </div>
                            <select className='Input-Select' id='Filter' defaultValue="all projects">
                                <option className='Input-Options' value="all projects">All Projects</option>
                                <option className='Input-Options' value="web app">Web Application</option>
                                <option className='Input-Options' value="mobile app">Mobile Application</option>
                                <option className='Input-Options' value="frontend">Frontend</option>
                                <option className='Input-Options' value="Backend">Backend</option>
                                <option className='Input-Options' value="Fullstack">Backend</option>
                            </select>
                    </div>
                    <div className='Grid'>
                    <Grid />
                    </div>
                </div>
            </div>
    </div>
  )
}
