import React from 'react';

class photoManage extends React.Component {

  constructor(props) { // only valid in react class... 
    super(props);
    // this.handleFile = this.handleFile.bind(this)
    this.state = { // we have our photos list here!
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId) // Fetches all user photos
      .then(res => {
        let user = res.user;
        let photoIds = user.photos;

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
    if (this.state.title !== "") {
      formData.append('photo[title]', this.state.title);
    } else {
      formData.append('photo[title]', this.state.backupTitle);
    }
    formData.append('photo[description]', this.state.description);
    formData.append('photo[file]', this.state.photoFile); // QUESTION: will this be restricted by my routes / model?
    formData.append('photo[user_id]', this.props.currentUserID);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    this.props.createPhoto(formData); // does the ajax call request
    // add an image redirect here
  }



  render() {

    const imageReq = <div className="imageReq">
      <h3>Image Requirements</h3>
      <li className="im_ind_req">JPEG only</li>
      <li className="im_ind_req">Max. photo size is 25 Mb</li>
      <ul className="fnt_err">
        {this.state.photoErrors.map((fErr, idx) => (
          <li key={`fnt_err ${idx}`}>{fErr}</li>
        ))}
      </ul>
    </div>

    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} style={{ height: "300px" }} /> : imageReq;

    return (
      <div className="photoCreate_Page">
        <h2>
          Upload photo
      </h2>

        <div className="photoCreate_content">
          <div className="pcc_Lt">
          // TODO: Here is where we will import all our photos
          </div>
          <div className="pcc_Rt fColCen">
            <form className="photo_form fColCen" onSubmit={this.handleSubmit.bind(this)}>
              <label htmlFor="file-input" className="pcc_message file-input blueButton">Select Photo</label>
              <input type="file" id="file-input" className="fileInput"
                name="file" onChange={this.handleFile.bind(this)} />

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
                <button className="blueButton">Upload Photo</button>
              </div>
            </form>
          </div>
        </div>



      </div>
    )
  }
}

export default photoManage;