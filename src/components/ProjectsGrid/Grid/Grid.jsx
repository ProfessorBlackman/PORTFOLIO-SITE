import GridItem from "./GridItem/GridItem"
import './Grid.css'


export default function Grid() {
  return (
    <div className="Grid-Class">
      <div className="Projects-Grid">
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
      </div>
        <a className=' More CV-Link' href="/projects">More Projects</a>
        </div>
  )
}
