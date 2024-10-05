import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
   <nav className="navbar navbar-expand-lg navbar-primary bg-primary p-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Fullstack Application</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className='btn btn-outline-light px-3' to={"/adduser"}>Adduser</Link>
      </div>
    </nav>
  )
}

export default Navbar