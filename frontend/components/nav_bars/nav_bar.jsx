import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout}) => {

  const leftSide = () => (
    <div className="nb_l"> {/* Refactor or replace the other `.nb_l` with this const... */}
      <nav>
        <Link to="/">1000 px</Link> {/* Works since in Routes we can switch or modulate what / hits...
          BUT I need to change the action to be a refresh if we're logged in. So... I'll need something similar to lines 21.
        */}
        <a href="https://github.com/Asduveneck" target="_blank" className="fab fa-github"></a>
        <a href="https://www.linkedin.com/in/alex-duveneck-848b118a/" target="_blank" className="fab fa-linkedin-in"></a>
      </nav>
    </div>
  )

  const rightSide = () => {
    let rsContents = [];

    if(!currentUser) { // If there is no current user,
      rsContents=[
        <Link to="/login" key="navk1" className="navk log" >Login</Link>,
        <Link to="/signup" key="navk2" className="navk sign">Sign up</Link>
      ]
    } else {
      rsContents=[
        <div key="navk3" className="far fa-user-circle"></div>, // Will be a link placeholder
        <div key="navk4" className="fas fa-plus"></div>,
        <button onClick={logout} key="navk5">Log Out</button>
      ]
    }
    return(
      <div className="nb_r"> {/* Refactor or replace the other `.nb_r` with this const... */}
        <nav>
          {rsContents.map(el => el)} {/* Iterate through each element. splat maybe? */}
        </nav>
      </div>
    )
  }

  const mainBar = () => (
    <div id="nav_bar_outer">
      {leftSide()}
      {rightSide()}
    </div>
  )

  return mainBar();
}; 

export default NavBar;