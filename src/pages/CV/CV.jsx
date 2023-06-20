import "./CV.css";
import CVLeft from "./CVLeft";
import CVRight from "./CVRight";
import {useEffect} from "react";
import ReactGA from "react-ga";

export default function CV() {
    useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div id="cv-box">
      <div id="CV-container">
        <CVLeft />
        <CVRight />
      </div>
      <div id="right-button-1" className="right-h3">
        <a
          download="cv.pdf"
          href="https://ik.imagekit.io/methuselah/Portfolio/cv.pdf?updatedAt=1686230756947"
          id="cv-download"
          target="_blank"
          rel="noreferrer"
        >
          <span className="CV-Download">Download CV</span>
        </a>
      </div>
    </div>
  );
}
