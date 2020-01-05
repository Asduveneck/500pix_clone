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
      height: '50vh',
      width: '95vw'
    }
    return (
      <div className = "indvPhotoShowPage">

        <div className = "indvPhoto-Container" style={photoStyle}> 
        </div>

        <div className = "indvPhoto-details-container">
          <div className = "iPS-top">
            <h2>{title}</h2>
            <h2>{rating}</h2>
            <h2>{views}</h2>
          </div>
          <div className = "iPS-bottom"></div>
          <p>{description}</p>
        </div>


        <Link to='/'>All</Link>

      </div>
    )
  }
};

export default photoShow;