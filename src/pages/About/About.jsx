import './About.css'
import {useEffect} from "react";
import ReactGA from "react-ga";


export default function About() {
    useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="Home-Container-1">
        <div className='Header-1'>
            <div className="About-Div About-Img">
                <img src="https://ik.imagekit.io/methuselah/Portfolio/mypic.jpg?updatedAt=1686230737314" className="About-Image"  alt=''/>
                
            </div>
            <div className="About-Div About-p">
                <p id='About-P'> Hi, I'm Nangialai Stoman, a full-stack developer and design enthusiast. I have been working as a web and software developer for the past 6 years, mainly focused on web technologiesand UI/UX design.
                </p>
                <p id='About-P'> Hi, I'm Nangialai Stoman, a full-stack developer and design enthusiast. I have been working as a web and software developer for the past 6 years, mainly focused on web technologiesand UI/UX design.
                </p>
                <p id='About-P'> Hi, I'm Nangialai Stoman, a full-stack developer and design enthusiast. I have been working as a web and software developer for the past 6 years, mainly focused on web technologiesand UI/UX design.
                </p>
            </div>
        </div>
        <div className='Main-Section'>
            <div className='About-Main'>
                <h1 className='H1-1'> Work & Career</h1>
                <div className='Heading-1'>
                    <div id='Career-List'>
                        {/* <ul className='Ul-About'> */}
                        
                            <div className='Li-About'><p className='Bullet'></p>
                            <div className='Work-History'>
                                <h4>Full-stack Developer</h4>
                                <p>
                                <a className='Career-Link' href='https://www.amalitech.com' rel='noreferrer' target='_blank'>Amalitech gmBH</a>
                                    </p>
                                <p> Nov 2022 - Present</p>
                            </div>
                            </div>
                            <div className='Li-About'><p className='Bullet'></p>
                            <div className='Work-History'>
                                <h4>Full-stack Developer</h4>
                                <p>
                                <a className='Career-Link' href='https://www.amalitech.com' rel='noreferrer' target='_blank'>Amalitech gmBH</a>
                                    </p>
                                <p> Nov 2022 - Present</p>
                            </div>
                            </div>
                            <div className='Li-About'><p className='Bullet'></p>
                            <div className='Work-History'>
                                <h4>Full-stack Developer</h4>
                                <p>
                                <a className='Career-Link' href='https://www.amalitech.com' rel='noreferrer' target='_blank'>Amalitech gmBH</a>
                                    </p>
                                <p> Nov 2022 - Present</p>
                            </div>
                            </div>
                            <div className='Li-About'><p className='Bullet'></p>
                            <div className='Work-History'>
                                <h4>Full-stack Developer</h4>
                                <p>
                                <a className='Career-Link' href='https://www.amalitech.com' rel='noreferrer' target='_blank'>Amalitech gmBH</a>
                                    </p>
                                <p> Nov 2022 - Present</p>
                            </div>
                            </div>
                            <div className='Li-About'><p className='Bullet'></p>
                            <div className='Work-History'>
                                <h4>Full-stack Developer</h4>
                                <p>
                                <a className='Career-Link' href='https://www.amalitech.com' rel='noreferrer' target='_blank'>Amalitech gmBH</a>
                                    </p>
                                <p> Nov 2022 - Present</p>
                            </div>
                            </div>
                        {/* </ul> */}
                    </div>
                <a download="cv.pdf" href='https://ik.imagekit.io/methuselah/cv.pdf?updatedAt=1685091385333' className='CV-Link-2'>
                <span className='Home-Button'>Download CV</span>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}
