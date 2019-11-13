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

  fetchPhotos() { // Ripping off tutorial vid https://vimeo.com/278727054 
    // For now... Will need to do all of this in a reducer LATER!
    $.ajax({
      url: `/api/photos`
    }).then(photos => {
      // debugger;
      this.setState({photos})
    })
  }

  componentDidMount() {
    this.fetchPhotos()
  }



  render() {
    if(!this.state.photos) return null; // 
    return(
      <div className="index_page_page">

      </div>
    );
  }

}

export default IndexPage;