import React from 'react';
import IndvPhoto from './index_indv_photo';
// Change to be just ONE picture with no style. 
class modPhoto extends React.Component {




  render() {

    let nonHover = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
    }
    return (
      <div className="modPhoto" style={nonHover}></div>
    );
  }

}

export default modPhoto;