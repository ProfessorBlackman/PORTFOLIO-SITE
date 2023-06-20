// import "./CV.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import {
  SiFlutter,
  SiGnubash,
  SiIntellijidea,
  SiPostgresql, SiRedis,
  SiVim,
  SiVisualstudiocode,
  SiWebstorm
} from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";

export default function CVLeft() {
  return (
      <div id="CV-left">
        <div id="side-left">
          <div id="CV-Image">
            <img src="https://ik.imagekit.io/methuselah/Portfolio/mypic.jpg?updatedAt=1686230737314" id="img" />
          </div>
          <div className="Section">
            <h2 className="main-text" id="contact">
              Contact
            </h2>
            <h3 className="phone">Phone</h3>
            <p className="regular-txt">+233 55 270 8723</p>
            <h3 className="phone">Email</h3>
            <p className="regular-txt">nwodobehm@gmail.com</p>
            <h3 className="phone">LinkedIn</h3>
            <p className="regular-txt">methuselahnwodobeh</p>
            <h3 className="phone">Github</h3>
            <p className="regular-txt">ProfessorBlackman</p>
          </div>
          <div className="Section">
            <h2 className="main-text">Skills</h2>
            <p className="regular-txt">
              <FontAwesomeIcon icon={faPython} className="bullet-icon" />
              Python Programming
            </p>
            <p className="regular-txt">
              <SiDjango className="bullet-icon" />
              Django
            </p>
            <p className="regular-txt">
              <SiFlask className="bullet-icon" />
              Flask
            </p>
            <p className="regular-txt">
              <FontAwesomeIcon icon={faReact} className="bullet-icon" />
              React
            </p>
            <p className="regular-txt">
              <FontAwesomeIcon icon={faHtml5} className="bullet-icon" />
              HTML/CSS/JS
            </p>
            <p className="regular-txt">
              <SiPostgresql className="bullet-icon" />
              PostgresQL
            </p>
            <p className="regular-txt">
              <SiRedis className="bullet-icon" />
              Redis
            </p>
            <p className="regular-txt">
              <SiFlutter className="bullet-icon" />
              Flutter
            </p>
            <p className="regular-txt">
              <SiGnubash className="bullet-icon" />
              Bash
            </p>
          </div>
          <div className="Section">
            <h2 className="main-text">Tools</h2>
            <p className="regular-txt">
              <SiPycharm className="bullet-icon" />
              PyCharm
            </p>
            <p className="regular-txt">
              {/* <FontAwesomeIcon icon={faCode} className="bullet-icon" /> */}
              <SiVisualstudiocode className="bullet-icon" />
              Visual Studio Code
            </p>
            <p className="regular-txt">
              <FontAwesomeIcon icon={faGit} className="bullet-icon" />
              Git
            </p>
            <p className="regular-txt">
              <FontAwesomeIcon icon={faGithub} className="bullet-icon" />
              Github
            </p>
            <p className="regular-txt">
              <FontAwesomeIcon icon={faAndroid} className="bullet-icon" />
              Android Studio
            </p>
            <p className="regular-txt">
              <SiWebstorm className="bullet-icon" />
              WebStorm
            </p>
            <p className="regular-txt">
              <SiIntellijidea className="bullet-icon" />
              Intellij Idea
            </p>
            <p className="regular-txt">
              <SiVim className="bullet-icon" />
              Vim
            </p>
          </div>
          <div className="Section">
            <h2 className="main-text">Language</h2>
            <p className="regular-txt">English</p>
          </div>
        </div>
      </div>
  );
}
