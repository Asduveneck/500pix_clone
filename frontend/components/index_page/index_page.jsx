import React from 'react';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [] // Following along
    }

    // Binding Functions
    this.fetchPhotos = this.fetchPhotos.bind(this);
  }

  componentDidMount() {
    // this.props.fetchPhotos() // in container mSTP.
  }



  render() {
    if(!this.state.photos) return null; // 
    return(
      <div className="index_page_page">
        <h2>Can you see me?</h2>
      </div>
    );
  }

}

export default IndexPage;