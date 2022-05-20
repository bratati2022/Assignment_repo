import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="Header shadow mb-4">
      <div className='container'>
        <div className='Header-inner'>
          <a className='navbar-brand'>CollectOp CHASSIS</a>

          <div className='icon-inputGrp mx-auto'>
            <span className="icon-placeholder">
              <i class="las la-search la-2x"></i>
            </span>
            <input type="search" 
              id="search" 
              name="search" 
              className="icon-input form-control"
            />
          </div>

          <nav className="Header__nav">
            <ul className="nav-ul m-0">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/auctions">Auctions</Link></li>

              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/news">News</Link></li>

              <li><Link to="/submitvehicle">SubmitVehicle</Link></li>
              <li><Link to="/">SignIn</Link></li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header