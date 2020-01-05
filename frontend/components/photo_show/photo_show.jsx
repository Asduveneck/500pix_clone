import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// TODO: React Hooks
// const photoShow = (test) => {
//   return (
//     <div className="indvPhotoShow">
//       <h1>{test}</h1>
//     </div>
//   );
// };

class photoShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId) // see app.jsx
  }

  render() {
    let photo = this.props.photo;
    if (!photo) return null;
    
    let {title, description, views, rating, fileUrl} = photo;

    let photoStyle = {
      backgroundImage: `url(${fileUrl})`,
      backgroundSize: 'cover',
      minHeight: '600px',
      height: '50vh',
      width: '95vw'
    }
    return (
      <div className = "indvPhotoShowPage">

        <div className = "indvPhoto-Container" > 
          <div className="indvPhoto">
            <img src={fileUrl} alt={title} width='100%' height='auto' minHeight='600px' />
          </div>
        </div>

        <div className = "indvPhoto-details-container">
          <div className = "iPS user-info">
            <div className="left">
              <h2>{title}</h2>
              <span>by </span>
                {/* TODO: jBuilder to get username  */}
            </div>
            <div className="right">
              {/* TODO: user pic goes here eventually */}
            </div>
          <p>{description}</p>
          </div>
          <div className = "iPS photo-stats"></div>
            <h2>{rating}</h2>
            <h2>{views}</h2>
        </div>

        <div className="ips stats-Pitch">
          {/* Border around this while repeating graph svg */}
        </div>
        {/* Then make a bunch of spans for each metadata */}


        <Link to='/index'>All</Link>

      </div>
    )
  }
};

export default photoShow;