import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faLinkedin,
  faGithub,
  faHashnode,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

import './navBar.css'
import DarkModeToggle from "../ColorScheme/ColorScheme";

export default function NavBar() {
  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Projects", route: "/projects" },
    { name: "CV", route: "/cv" },
    { name: "Contact Me", route: "/contact-me" },
    { name: "Blog", route: "/blog" },
  ];

  const [activeItem, setActiveItem] = useState('')

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="Navigation">
      <nav >
        <ul id="Ul-1">
          {navItems.map((link, index) => {
            return (
              <li key={index} onClick={() => handleClick(link.name)} >
                <Link to={link.route} className={ ` Nav-Item ${activeItem === link.name ? 'Nav-Item-1' : ''}`} >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
          <ul className="Nav-Item" id="Ul-2">
            <DarkModeToggle />
          </ul>
        <ul id="Ul-3">
          <li className="Social-Item">
            <a
              href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                // color="red"
                className="anchor-icon"
              />
            </a>
          </li>
          <li className="Social-Item">
            <a
              href="https://github.com/bobangajicsm"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                // color="red"
                className="anchor-icon"
              />
            </a>
          </li>
          <li className="Social-Item">
            <a
              href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faHashnode}
                // color="red"
                className="anchor-icon"
              />
            </a>
          </li>
          <li className="Social-Item">
            <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
              <FontAwesomeIcon
                icon={faMedium}
                // color="red"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
