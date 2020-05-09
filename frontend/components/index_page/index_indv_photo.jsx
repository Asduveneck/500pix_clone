import React from 'react';
import { Link } from 'react-router-dom';

class IndexIndvPhoto extends React.Component{

  render() {
    let {title, url, height, editMode, chosen} = this.props;

    let nonHover = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      width: 'auto',
    }

    if (height) { // if we pass in a height prop
      nonHover.height = height;
    } else {
      nonHover.height= "250px";
    }

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
