import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="h-100 w-100  ">

            <div className="navbox text-center mt-5">
            <i className="fa fa-filter fa-3x" aria-hidden="true"></i>
            </div> 
            <div className="navbox  text-center mt-5">
            <NavLink className=" link" to="/chart"> <i className="fa fa-bar-chart fa-3x" aria-hidden="true"></i></NavLink>
            </div>
            <div className="navbox  text-center mt-5">
            <i className="fa fa-rss fa-3x" aria-hidden="true"></i>
            </div> 
        
      </div>
    )
}

export default Nav
