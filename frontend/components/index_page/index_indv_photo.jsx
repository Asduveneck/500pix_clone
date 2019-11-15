import React from 'react';
import { Link } from 'react-router-dom'; // Eventually make clicking on each photo a link or render a container...
import { Z_ASCII } from 'zlib';
// import { AuthRoute } from '../../util/route_util'; // Will probably not use

class IndexIndvPhoto extends React.Component{
  constructor(props){
    super(props);
    this.state = { isOpen: false };
    this.handleEnlarge = this.handleEnlarge.bind(this);
  }

  handleEnlarge() {
    this.setState({ isOpen: !this.state.isOpen });
    // console.log("clicked");
  };

  render() {
    let title = this.props.title;
    let url = this.props.url;

    let nonHover = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      height: '250px',
      width: 'auto',
    }

    let modalClick = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      width: '60vh',
      height: 'auto',
      position: 'absolute',
      zIndex: '1',
    }

    if(this.state.isOpen){

      
    } else {
      nonHover.height = '250px';
      nonHover.width = 'auto';
      nonHover.position = 'static'
      delete nonHover.zIndex 
    }

    return (
      <div className="indvPhoto" style={nonHover} onClick={this.handleEnlarge} >
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