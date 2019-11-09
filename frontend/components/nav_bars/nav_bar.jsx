import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout}) => {

  const leftSide = () => (
    <div className="nb_l"> {/* Refactor or replace the other `.nb_l` with this const... */}
      <nav>
        <Link to="/">"Logo"</Link> {/* Works since in Routes we can switch or modulate what / hits...
          BUT I need to change the action to be a refresh if we're logged in. So... I'll need something similar to lines 21.
        */}
        <a href="https://github.com/Asduveneck">"Github Icon"</a>
        <a href="https://www.linkedin.com/in/alex-duveneck-848b118a/">"Linkedin Icon"</a>
      </nav>
    </div>
  )

  const rightSide = () => {
    let rsContents = [];

    if(!currentUser) { // If there is a current user,
      rsContents=[
        <Link to="/login">Login</Link>,
        <Link to="/signup">Sign up!</Link>
      ]
    } else {
      rsContents=[
        <h3>Profile Icon</h3>, // Will be a link placeholder
        <h3>Add Photo option </h3>,
        <button onClick={logout}>Log Out</button>
      ]
    }
    return(
      <div className="nb_r"> {/* Refactor or replace the other `.nb_r` with this const... */}
          {rsContents.map(el => el)} {/* Iterate through each element. splat maybe? */}
      </div>
    )
  }

  const mainBar = () => (
    <div className="nav_bar_outer">
      {leftSide()}
      {rightSide()}
    </div>
  )

  return mainBar();
}; 

export default NavBar;