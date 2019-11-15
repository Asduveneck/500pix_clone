import React from 'react';
import { Link } from 'react-router-dom'; // Eventually make clicking on each photo a link
import { AuthRoute } from '../../util/route_util';

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
      </div>
    )
  }
};

export default IndexIndvPhoto