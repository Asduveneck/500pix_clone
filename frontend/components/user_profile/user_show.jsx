import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndvPhoto from '../index_page/index_indv_photo'

class userShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() { 
    // if (!this.props.user) return null;
    // Change the URL, we update the user component, but we don't remount.
    // upon update, do something. So I should be looking into update 
    this.props.fetchUser(this.props.match.params.userId) // see app.jsx
      .then(res => { // missing one photo each time.
        let user = res.user;
        let photoIds = user.photos;
        this.setState({user, photoIds});

      Promise.all(photoIds.map(photoId => {
        return this.props.fetchPhoto(photoId)
      })).then(res => {
        let userPhotos = [];
        for(let i = 0; i < res.length; i++) {
          userPhotos.push(res[i].photo)
        }
        return userPhotos;
      }).then(res => {
        this.setState({ photos: res })
        // console.log(res);
      });

      });
  }

  // Stops infinite loop:
  shouldComponentUpdate(nextProps, nextState) { 
    let currentPath = this.props.location.pathname
    let nextPath = nextProps.location.pathname
    if (!this.props.user || !this.state.photos ) return true; // rerender if there is no user
    if (currentPath !== nextPath) { // switching to another user.
      document.location.reload() // TODO: Refactor this out. Horrible patch for above bug: not updating state
    } 

    if (this.props.user.photos.length !== nextState.photos.length) {
      if (this.props.user.photos === 0 || !this.props.user.photos) return true;
      return true;
    }
    return true;
  }

  render() {
    let user = this.props.user;
    if (!user) return null;
    let { user_name, first_name, last_name, location_city, location_country, about, photos, photos_all } = user;

    const displayPhotos = () => {
      if (this.state.photos) {
        return this.state.photos.map((photo, idx) => {
          return (
            <Link to={`/photo/${photo.id}`} key={`link_photo_${photo.id}`} style={{ height: "fit-content" }} > {/* FINDME TODO move link to within the indvPhoto, and remove this inline styling */}
            <IndvPhoto
              title={photo.title}
              url={photo.fileUrl}
              key={`photo_${idx}`}
            />
          </Link>
        )}

        )
      } else {
        return "0 Photos were found"
      }
    }

    const displaySetting = () => {
      if (this.props.user.id === parseInt(this.props.currentUserId)) {
        return this.props.openModal
      }
    }
    

    return (
      <div className="userShowPage" key={`user_${user_name}`}>
        <div className="temp user_back_img">
          {/* background image with thin 1px bottom border. Replace with img tag later */}
        </div>

        <div className="temp user_prof_img">
          {/* profile image: round border, fixed size, negative margin of half */}
        </div>
      {displaySetting()}
      <h2 className="user_fl_name" key={`user_id_${user.id}`}>{first_name} {last_name}</h2>

      <p className="user_about">{about}</p>
      <div className="user_stats_location"> </div>
      <div className="user_ext_links"></div> 
      <div className="temp user_TODO_links">
        {/* Placeholder class, for now will only have users uploaded photos. */}
        PHOTOS {photos.length}
      </div>
        <div className="user_photos index_page_page">
          {/* Another image gallery. Reusing previous class for now */}
          {/* May make this responsive to above link so we display different ones like tabs */}

          {displayPhotos()}
        </div>


      </div>
    )
  }
}

export default userShow;
