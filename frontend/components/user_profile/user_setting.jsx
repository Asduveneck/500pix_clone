import React, { useState } from 'react';
import { Link } from 'react-router-dom';

class UserSetting extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
  }

  render(){
    console.log("testing 123")
    return (
      <div className="usr_setting_page">
        <h2>Testing 1 2 3</h2>
        <h2>TESTING</h2>
        <h2>FINDME</h2>
        {console.log("testing 123")}
      </div>

    )
  }
}

export default UserSetting;