// FINDME CARLOS AND ALEX COMMENTED OUT THE JSX INLINE STYLE AND USED img URL here! WORKS LOCALLY
import React from 'react';
import { Link } from 'react-router-dom'; // Eventually make clicking on each photo a link or render a container...

// import { AuthRoute } from '../../util/route_util'; // Will probably not use

class IndexIndvPhoto extends React.Component{

  render() {
    let {title, url, height, editMode, chosen} = this.props;
    // let title = this.props.title;
    // let url = this.props.url;

    let nonHover = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      // height: '250px',
      width: 'auto',
    }

    if (height) { // if we pass in a height prop
      nonHover.height = height;
    } else {
      nonHover.height= "250px";
    }

// onClick={() => openModal('login')}>Login</button> // cannot be passed through yet...
    if (editMode) { // manage photo page
      // check if idx here is same as chosenPhoto...
      if (chosen) {
        return <div className="indvPhoto edtPhoto chPhoto" style={nonHover} > </div>
      } else {
        return <div className="indvPhoto edtPhoto" style={nonHover} > </div>
      }


    } else { // index or user page
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
    }
};

export default IndexIndvPhoto