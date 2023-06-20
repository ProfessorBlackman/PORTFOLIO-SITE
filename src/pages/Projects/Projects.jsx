import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid"
import {useEffect} from "react";
import ReactGA from "react-ga";


export default function Projects() {

    useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <ProjectsGrid />
    </div>
  )
}
