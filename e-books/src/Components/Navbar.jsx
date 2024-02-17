import React from 'react'
import "../Components/style.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbox">
            <div className="elem">
                <h3><a href="#">Story</a></h3>
            </div>
            <div className="elem">
                <h3><a href="#">Novels</a></h3>
            </div>
            <div className="elem">
                <h3><a href="#">Programmings</a></h3>
            </div>
            <div className="elem">
                <h3><a href="#">All</a></h3>
            </div>
        </div>
    </div>
  )
}

export default Navbar