import './GridItem.css'


export default function GridItem() {
  return (
    <div className='Item'>
        <a id='Project-Link' href='www.linkedin.com'>
            <img className='Item-H' id='IMG' src='https://ik.imagekit.io/methuselah/Portfolio/developer.svg?updatedAt=1686230763351' />
            <div id='Item-Text'>
                <h4 id='head'>Developer Project</h4>
                <p id='text' >Developer</p>
            </div>
        </a>
    </div>
  )
}
