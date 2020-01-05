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
    console.log(photo);
    let {title, description, views, rating, fileUrl, created_at, photographer} = photo;

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
            <img src={fileUrl} alt={title} width='100%' height='auto' />
          </div>
        </div>

        <div className = "indvPhoto-details-container">
          <div className = "iPS user-info">
            <div className="left">
              <h2 className="iPS margb8">{title}</h2>
              <span>by {photographer} </span>
                {/* TODO: LINK to photographer showPage  */}
            </div>
            <div className="right">
              {/* TODO: user pic goes here eventually */}
            </div>
          </div>
          {/* location creation info here */}
          <p>{description}</p>
          <div className = "iPS photo-stats">
          {/* swap top h2 for span */}
            <div className="stat">
              <span className="iPS margb8">Rating</span> 
              <h2>{rating}</h2>
            </div>
            <div className="stat">
              <span className="iPS margb8">Views</span>
              <h2>{views}</h2>
            </div>

            <div className="ips stats-Pitch">
              {/* Border around this while repeating graph svg */}
            </div>
            {/* Then make a bunch of spans for each metadata */}          
        </div>
        {/* Category */}
            
        {/* Tags */}

        <Link to='/index' className="temp1">Home</Link>
      </div>

      </div>
    )
  }
};

export default photoShow;