import React from 'react';
import IndvPhoto from '../index_page/index_indv_photo';
class photoManage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { // we have our photos list here!
      photos: [],
      chosenPhoto: {},
      chosenPhotoIdx: "",
      title: "",
      description: "",
    };
    this.displayPhotos = this.displayPhotos.bind(this);
    this.showOnUpdate = this.showOnUpdate.bind(this);
    this.updatePhotoPOJO = this.updatePhotoPOJO.bind(this);
    this.cancelPhotoUpdate = this.cancelPhotoUpdate.bind(this);
    this.deletePhotoPOJO = this.deletePhotoPOJO.bind(this);
    this.clearChosenPhoto = this.clearChosenPhoto.bind(this); 
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


  handleSubmit(e) { // NOT USED
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[description]', this.state.description);
    formData.append('photo[file]', this.state.photoFile);
    formData.append('photo[user_id]', this.props.currentUserID);
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

  updatePhotoPOJO() { // done to distinguish between actual POJO
    let updatedPhoto = this.state.chosenPhoto;
    updatedPhoto.title = this.state.title;
    updatedPhoto.description = this.state.description;
    this.props.updatePhoto(updatedPhoto)
      .then(() => this.clearChosenPhoto())
  }

  clearChosenPhoto() {
    this.setState({
      chosenPhoto: {}, chosenPhotoIdx: "", title: "", description: ""})
  }

  cancelPhotoUpdate() {
    this.setState({
      title: this.state.chosenPhoto.title,
      description: this.state.chosenPhoto.description
    })
  }

  deletePhotoPOJO() {
    let deletedPhoto = this.state.chosenPhoto;
    if (deletedPhoto.id !== undefined) {
      this.props.deletePhoto(deletedPhoto.id);
      let newPhotos = this.state.photos;
      newPhotos.splice(this.state.chosenPhotoIdx, 1);

      this.setState({photos: newPhotos})
      this.clearChosenPhoto()
    }
  }

  showOnUpdate() {
    if (this.state.chosenPhoto.title !== undefined) {
      let {chosenPhoto, title, description} = this.state;
      if (chosenPhoto.title !== title || chosenPhoto.description !== description) {
        return(
          <div className="update_buttons">
            <span className="update cancel" type="button" onClick={() => this.cancelPhotoUpdate()}>Cancel</span>
            <button className="update save" type="button" onClick={() => this.updatePhotoPOJO()}>Save Changes</button>
          </div>
        )
      }
    }
  }


  render() {
    if (!this.state.photos) return;
    return (
      <div className="photoCreate_Page">
        <h2>
          Photo Manager
      </h2>

        <div className="photoCreate_content">
          <div className="pcc_Lt photo_manage_gallery" >
            <h3>{this.state.photos.length} photos</h3>
            <div className="user_photos index_page_page">
              {this.displayPhotos()}
            </div>

          </div>
          <div className="pcc_Rt fColCen updateContainer">
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
                    placeholder="e.g. A sunset taken at a port in Kaohsiung, Taiwan."
                  />
                </div>
                <button type="button" onClick={() => this.deletePhotoPOJO() } className="delete">Delete photo</button>
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
