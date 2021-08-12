import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
   return (

      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
         <div className="container-fluid">
            <Link to="/" className="navbar-brand">Expensas Argentinas </Link>

            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
               <div className="navbar-nav d-flex justify-content-end">
                  <NavLink exact activeClassName="active" className="nav-item nav-link " to="/">Inicio</NavLink>
                  <NavLink exact activeClassName="active" className="nav-item nav-link" to="/config">Configuracion</NavLink>
                  <NavLink exact activeClassName="active" className="nav-item nav-link" to="/consorcios">Consorcios</NavLink>

               </div>
            </div>
         </div>
      </nav>








   )
}

export default Header
