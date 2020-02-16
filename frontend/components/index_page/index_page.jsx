import React from 'react';
import IndvPhoto from './index_indv_photo';
import InfiniteScroll from '../infinitescroll';
import { Link } from 'react-router-dom'; // Eventually make clicking on each photo a link or render a container...

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0, // trigger our offset parameter?
      photos: [],
    };

    // Binding Functions
    this.loadMore = this.loadMore.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    let lastPhoto = document.querySelector(".index_page_page > a:last-child");
    let lastPhotoOffset = lastPhoto.offsetTop + lastPhoto.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastPhotoOffset) {
      this.loadMore();
    }
  }

  loadMore() {
    this.setState({page: this.state.page+1})
    let prevPhotos = this.state.photos;
    this.props.fetchPhotos(this.state.page)
      .then( () => this.setState({ 
        photos: [...prevPhotos, ...this.props.photos] 
      }))
  };

  componentDidMount(){
    this.props.fetchPhotos(this.state.page)
      .then( () => this.setState({ photos: this.props.photos}))
    this.scrollListener = window.addEventListener("scroll", e => {this.handleScroll(e);
    });
  }

  render() {
    if(!this.state.photos) return null;
    return(
      <div className="index_page_all">
        <div className="index_page_header"> 
          <h1>What's popular today</h1>
          <h2>See recently added photos with the highest reviews.</h2>
        </div>
        <div id="index_page_navBar">
          <h3 id="placeholderNav">Placeholder NavBar</h3> {/* TODO: Position Sticky */}
        </div>
        <div className="index_page_page">
          {this.state.photos.map((photo, idx) => (
            <Link to={`/photo/${photo.id}`} key={`link_photo_${idx}`} style={{ height: "fit-content" }} > {/* FINDME TODO move link to within the indvPhoto, and remove this inline styling */}
              <IndvPhoto
                title={photo.title}
                url={photo.fileUrl}
                key={`photo_${idx}`}
              />
            </Link>
          ))
          }
        </div>
        {/* <button onClick={e => { this.loadMore() }}>
          Load More
        </button> */}

      </div>
    );
  }
}
/* Replace button with infinite symbol? */ 

export default IndexPage;