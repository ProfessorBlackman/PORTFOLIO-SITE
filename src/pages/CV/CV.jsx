import "./CV.css";
import CVLeft from "./CVLeft";
import CVRight from "./CVRight";

export default function CV() {
  return (
    <div id="cv-box">
      <div id="CV-container">
        <CVLeft />
        <CVRight />
      </div>
      <div id="right-button-1" className="right-h3">
        <a
          download="cv.pdf"
          href="https://ik.imagekit.io/methuselah/cv.pdf?updatedAt=1685091385333"
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
