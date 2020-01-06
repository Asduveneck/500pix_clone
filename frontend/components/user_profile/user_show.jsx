import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndvPhoto from '../index_page/index_indv_photo'

class userShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId) // see app.jsx
  }

  componentWillUnmount() {
    this.props.clearUser();
  }


  render() {
    let user = this.props.user;
    if (!user) return null;
    console.log(user);
    let { user_name, first_name, last_name, location_city, location_country, about, photos } = user;

    let userPhotos = [];
    // loop over photoId and fetch each photo.

    return (
      <div className="userShowPage">
        <div className="temp user_back_img">
          {/* background image with thin 1px bottom border. Replace with img tag later */}
        </div>

        <div className="temp user_prof_img">
          {/* profile image: round border, fixed size, negative margin of half */}
        </div>

      <h2 className="user_fl_name">{first_name} {last_name}</h2>

      <p className="user_about">{about}</p>
      <div className="user_stats_location"> </div>
      <div className="user_ext_links"></div> 
      <div className="temp user_TODO_links">
        {/* Placeholder class, for now will only have users uploaded photos. */}
        PHOTOS {photos.length}
      </div>
        <div className="user_photos">
          {/* Another image gallery. Iterate through photos */}
          {/* May make this responsive to above link so we display different ones like tabs */}
        </div>


      </div>
    )
  }
}

export default userShow;