import React from 'react';
import { Link } from 'react-router-dom'; // Eventually make clicking on each photo a link

class IndexIndvPhoto extends React.Component{

  render() {
    let title = this.props.title
    
    

    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }

};

export default IndexIndvPhoto