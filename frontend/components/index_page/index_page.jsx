import React from 'react';
import IndvPhoto from './index_indv_photo';
import InfiniteScroll from '../infinitescroll';

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
      <div className="index_page_grid">
        {this.state.photos.map( (photo, idx) => (
            <IndvPhoto
            title={photo.title}
            url={photo.fileUrl}
            key= {`photo_${idx}`} 
            />
        ))
        }
      </div>
    );
  }

}

export default IndexPage;