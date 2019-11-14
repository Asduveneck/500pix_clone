import React from 'react';
import IndvPhoto from './index_indv_photo';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     photos: [] // Following along
  //   }

  //   // Binding Functions
    // this.props.fetchPhotos = this.props.fetchPhotos.bind(this);
  }

  componentDidMount(){
    this.props.fetchPhotos()
      .then( () => this.setState({
        photos: this.props.photos
      }
        ))
    // in container mSTP.
  }



  render() {
    if(!this.state.photos) return null; //
    return(
      <div className="index_page_page">
          <h2>Can you see me?</h2>
        {this.state.photos.map( (photo, idx) => (
          <div className="ipp_contents">
            <IndvPhoto
            title={photo.title}
            url={photo.fileUrl} 
            />
          </div>
        ))
        }
      </div>
    );
  }

}

export default IndexPage;