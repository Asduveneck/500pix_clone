import React from 'react';
import IndvPhoto from '../index_page/index_indv_photo';
class photoManage extends React.Component {

  constructor(props) { // only valid in react class... 
    super(props);
    // this.handleFile = this.handleFile.bind(this)
    this.state = { // we have our photos list here!
      photos: [],
      chosenPhoto: {},
      chosenPhotoIdx: "",
      title: "",
      description: "",
    };
    this.displayPhotos = this.displayPhotos.bind(this);
    this.showOnUpdate = this.showOnUpdate.bind(this);
  }

  componentDidMount() {
    let photoIds = this.props.currentUser.photos;

    Promise.all(photoIds.map(photoId => {
      return this.props.fetchPhoto(photoId)
    })).then(res => {
      let userPhotos = []; // TODO: For loop dispatching setState puts the photos in props already.
      for (let i = 0; i < res.length; i++) {
        userPhotos.push(res[i].photo)
      }
      return userPhotos;
    }).then(res => {
      this.setState({ photos: res })
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) { // need to modify for updatePhoto
    e.preventDefault();
    const formData = new FormData();
    // Following works with our AJAX call if we say `photo` instead of `{photo}`
    formData.append('photo[description]', this.state.description);
    formData.append('photo[file]', this.state.photoFile); // QUESTION: will this be restricted by my routes / model?
    formData.append('photo[user_id]', this.props.currentUserID);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    // this.props.createPhoto(formData); // does the ajax call request
    // add an image redirect here
  }

  displayPhotos() {
    if (this.state.photos) {
      return this.state.photos.map((photo, idx) => {
        return (
          <div key={`photo_${idx}`} onClick={() => this.setState({
            chosenPhoto: photo, chosenPhotoIdx: idx, title: photo.title,
            description: photo.description})}
            >
            <IndvPhoto
              editMode={true}
              url={photo.fileUrl}
              idx={idx}
              height="125px"
              chosen={this.state.chosenPhotoIdx===idx}
            />
          </div>
        )
      }
      )
    } else {
      return [];  // return an empty array...
    }
  }

  showOnUpdate() {
    if (this.state.chosenPhoto.title !== undefined) { // if there is a chosenPhoto
      let {chosenPhoto, title, description} = this.state;
      // if there is a change
      if (chosenPhoto.title !== title || chosenPhoto.description !== description) {
        // debugger;
        return(
          <div className="update_buttons">
            <span className="update cancel" type="button" onClick={() => console.log("reset state")}>Cancel</span>
            <button className="update save" type="button" onClick={() => console.log("update function")}>Save Changes</button>
          </div>
        )
      }
    }
  }


  render() {
    if (!this.state.photos) return null;
    // {this.showOnUpdate()}
    return (
      <div className="photoCreate_Page">
        <h2>
          Photo Manager
      </h2>

        <div className="photoCreate_content">
          <div className="pcc_Lt photo_manage_gallery">
            <h3>{this.state.photos.length} photos</h3>
            <div className="user_photos index_page_page">
              {this.displayPhotos()}
            </div>

          </div>
          <div className="pcc_Rt fColCen">
            <form className="photo_form fColCen" onSubmit={this.handleSubmit.bind(this)}>
              {/* <label htmlFor="file-input" className="pcc_message file-input blueButton">Select Photo</label> */}
              {/* <input type="file" id="file-input" className="fileInput"
                name="file" onChange={this.handleFile.bind(this)} /> */}

              <div className="form_inputs fColCen">
                <div className="input fColCen">
                  <label htmlFor="photo title">Title:</label>
                  <textarea name="photo title" value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="e.g. Sunset in Blue"
                    className="title"
                  />
                </div>
                <div className="input fColCen">
                  <label htmlFor="photo description">Description:</label>
                  <textarea name="description" name="photo description"
                    value={this.state.description}
                    onChange={this.update('description')}
                    placeholder="e.g. A sunset taken at a port in Kaosiung, Taiwan."
                  />
                </div>

                {/* <span>Or drag and drop photos anywhere on this page</span> */}

                {/* <button className="blueButton" type="button" onClick={() => console.log("do nothing")}>Upload Photo</button> */}
                
                <button type="button" onClick={() => console.log("delete photo")} className="delete">Delete photo</button>
                {this.showOnUpdate()}
              </div>
            </form>
          </div>
        </div>



      </div>
    )
  }
}

export default photoManage;