import "./Home.css";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import {useEffect} from "react";
import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="Home-Container">
      <div className="Header">
        <div className="Home-Div Home-p">
          <h1 className="H1"> HI, I AM METHUSELAH</h1>
          <p id="P"> A Full-Stack Developer & Tech Enthusiast</p>
          <a
            download="cv.pdf"
            href="https://ik.imagekit.io/methuselah/Portfolio/cv.pdf?updatedAt=1686230756947"
            className="CV-Link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="Home-Button">Download CV</span>
          </a>
        </div>
        <div className="Home-Div Img">
          <img
            src="https://ik.imagekit.io/methuselah/developer.svg?updatedAt=1685091384468"
            className="Image"
          />
        </div>
      </div>
      <ProjectsGrid />
    </div>
  );
}
