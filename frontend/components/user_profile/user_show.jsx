import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndvPhoto from '../index_page/index_indv_photo'

class userShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { 
    // Change the URL, we update the user component, but we don't remount.
    // upon update, do something. So I should be looking into update 
    console.log("Component did mount")
    // console.log(this.props.match.params.user_name);
    this.props.fetchUser(this.props.match.params.userId) // see app.jsx
      .then(res => {
        console.log("In component did mount fetched User success callback")
        let user = res.user;
        let photoIds = user.photos;
        // let userPhotos = [];
      //   photoIds.map(photoId => {
      //     this.props.fetchPhoto(photoId).then((res) => {
      //       userPhotos.push(res.photo)
      //     })
      //   }
      // )
      // console.log("Still in success cb. About to set state");
      // this.setState({photos: userPhotos})
      // console.log("Still in success cb. State:");
      // console.log(this.state);

      Promise.all(photoIds.map(photoId => {
        return this.props.fetchPhoto(photoId) // See if any of this is necessary because you set up props as you do this...
      })).then(res => {
        let userPhotos = []; // TODO: For loop dispatching setState puts the photos in props already.
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

  // componentDidUpdate() { // triggers infinite loop
  //   console.log("Component did update")
  //   // console.log(this.props.match.params.user_name);
  //   this.props.fetchUser(this.props.match.params.userId) // see app.jsx
  //     .then(res => {
  //       console.log("In component did update fetched User success callback")
  //       let user = res.user;
  //       let photoIds = user.photos;
  //       let userPhotos = [];
  //       photoIds.map(photoId => {
  //         this.props.fetchPhoto(photoId).then((res) => {
  //           userPhotos.push(res.photo)
  //         })
  //       }
  //       )
  //       console.log("Still in success cb. About to set state");
  //       this.setState({ photos: userPhotos })
  //       console.log("Still in success cb. State:");
  //       console.log(this.state);

  //     })
  // }
  // Stops infinite loop:
  // shouldComponentUpdate(nextProps, nextState) { 
    // console.log("in shouldComponentUpdate")
    // console.log("this.props:")
    // console.log(this.props)
    // console.log("path:")
    // // console.log(nextState)
    // let currentPath = this.props.location.pathname
    // let nextPath = nextProps.location.pathname
    // console.log(currentPath)
    // if (!this.props.user) return true; // rerender if there is no user
  // //   if (!this.state.photos) return true; 
  // //   // console.log(this.props.user.photos.length);
  // //   // console.log(nextState.photos.length);
  // //   // if(this.props.user.photos.length !== nextState.photos.length) return true; // INFINITE LOOP LOGIC HERE

  // //   // Stop user component re-rendering with each new photo being fetched
  //   if (this.props.user.id === undefined) return true;
  //   if (this.props.user.id === nextProps.user.id) { // CAUSING PROBLEMS?
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // componentWillUnmount() {
  //   this.props.clearUser();
  // }

  render() {
    console.log("In render");
    console.log(this.props);
    let user = this.props.user;
    if (!user) return null;
    // if (!this.state.photos) return null; // BREAKS code
    console.log(user);
    let { user_name, first_name, last_name, location_city, location_country, about, photos } = user;

    // let userPhotos = [];
    // // loop over photoId and fetch each photo.

    // photos.map(photoId => {
    //   this.props.fetchPhoto(photoId).then((res) => {
    //     // console.log("dispatched fetchPhoto. Now returning:");
    //     userPhotos.push(res.photo)
    //   })
    // })
    // console.log("userPhotos");
    // console.log(userPhotos);

    // console.log("state");
    // console.log(this.state);
    // this.setState({photos: userPhotos}) // not allowed
    // console.log(this.state);

    // console.log("Render State:");
    // console.log(this.state);

    const displayPhotos = () => {
      if (this.state.photos) {
        // console.log("Found some photos. this.state.photos:");
        // console.log(this.state.photos);
        return this.state.photos.map((photo, idx) => {
          // console.log(idx); // already missing one! Don't know why but oh well
          // console.log(photo);
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
        // console.log("No photos found")
        return "0 Photos were found"
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
          {/* {console.log("IN DIV HERE. State")} */}
          {/* {console.log(userPhotos)}
          {console.log(userPhotos.map)} */}
          {/* {console.log(this.state)} */}
          {/* {console.log(this.state.photos)} */}
          {displayPhotos()}
        </div>


      </div>
    )
  }
}

export default userShow;