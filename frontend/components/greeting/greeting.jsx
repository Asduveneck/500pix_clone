import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome {currentUser.user_name}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
  // if (currentUser) return personalGreeting(); // Imperfect
  return currentUser ? personalGreeting() : null //sessionLinks(); // Done in navbar
};

export default Greeting;
