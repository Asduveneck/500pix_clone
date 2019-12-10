// FINDME CARLOS AND ALEX COMMENTED OUT THE JSX INLINE STYLE AND USED img URL here! WORKS LOCALLY
import React from 'react';
import { Link } from 'react-router-dom'; // Eventually make clicking on each photo a link or render a container...

// import { AuthRoute } from '../../util/route_util'; // Will probably not use

class IndexIndvPhoto extends React.Component{

  render() {
    let title = this.props.title;
    let url = this.props.url;

    let nonHover = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      height: '250px',
      width: 'auto',
    }
// onClick={() => openModal('login')}>Login</button> // cannot be passed through yet...
    return (
      <div className="indvPhoto" style={nonHover}>
        <div className="i_p_gradient">
          <div className="top">
            {/* <h1>Placeholder Top</h1> */}
          </div>
          <div className="bottom">
            <h4>{title}</h4> 
          </div>
        </div>
        {/* <img src={url} alt={title}/> */}
      </div>
    )
  }
};

export default IndexIndvPhoto