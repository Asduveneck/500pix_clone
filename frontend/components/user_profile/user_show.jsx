import React, { useState } from 'react';
import { Link } from 'react-router-dom';

class userShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId) // see app.jsx
  }

  componentWillUnmount() {
    console.log("clearing user now");
    this.props.clearUser();
  }


  render() {
    let user = this.props.user;
    if (!user) return null;
    console.log(user);

    return (
      <div className="userShowPage">
        Testing
      </div>
    )
  }
}

export default userShow;