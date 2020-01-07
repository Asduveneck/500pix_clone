import React from 'react';
import IndvPhoto from './index_indv_photo';
import InfiniteScroll from '../infinitescroll';
import { Link } from 'react-router-dom'; // Eventually make clicking on each photo a link or render a container...



// $(window).scroll(function () {
//   let scroll = $(window).scrollTop();
//   if (scroll >= 95) {
//     console.log("hit target");
//     $("#index_page_navBar").addClass("navBarNow");
//   } else {
//     $("#index_page_navBar").removeClass("navBarNow");
//     console.log("no longer a nav bar")
//   }
// });



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
      <div className="index_page_all">
        <div className="index_page_header"> 
          <h1>What's popular today</h1>
          <h2>See recently added photos with the highest reviews.</h2>
        </div>
        <div id="index_page_navBar">
          <h3 id="placeholderNav">Placeholder NavBar</h3>
        </div>
        <div className="index_page_page">
          {this.state.photos.map((photo, idx) => (
            <Link to={`/photo/${photo.id}`} key={`link_photo_${idx}`}>
              <IndvPhoto
                title={photo.title}
                url={photo.fileUrl}
                key={`photo_${idx}`}
              />
            </Link>
          ))
          }
        </div>
      </div>
    );
  }

}

export default IndexPage;