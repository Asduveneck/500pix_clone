import React from 'react';
// We'll focus on basic functionality and assume one photo and one page only before making changes
class photoCreate extends React.Component {

  constructor(props) { // only valid in react class... 
    super(props);
    // this.handleFile = this.handleFile.bind(this)
    this.state = {
      title: "",
      description: "",
      photoFile: null, // 
      photoUrl: null,
      // photos: []
      photoErrors: [],
      backupTitle: "",
    };
  }

  // Use principles from: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
  // once you get a basic version going.

  handleFile(e) {
    const fileReader = new FileReader(); // file Reader for preview
    const file = e.currentTarget.files[0] // Moved out of setState to later 

    const photoErrors = [];
    let bugFree = true;

    // Error handling
    if (!file.type.includes("image/jpeg")) { // if there is a file of the right format
      photoErrors.push("Error: Images must be in JPEG format")
      bugFree = false;
    }
    if (file.size > 25 * Math.pow(10, 6) ) { // 25 MP constraint.
      photoErrors.push("Error: Images cannot exceed 25 Mb")
      bugFree = false;
    }

    this.setState({photoErrors}); 

    // If no bugs
    if (bugFree) {
      // default title will be the file name
      let fileName = file.name.split('.').slice(0, -1).join('.')
      this.setState({ title: fileName, backupTitle: fileName })
      fileReader.onloadend = () => {
        this.setState({ photoFile: file, photoUrl: fileReader.result });
      };
  
      if (file) {
        fileReader.readAsDataURL(file);
      }
    }
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // Following works with our AJAX call if we say `photo` instead of `{photo}`
    if (this.state.title !== "" ) {
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

    this.props.createPhoto(formData) // does the ajax call request
      .then( () => this.props.history.push("/manage_photos") );
  }



  render() {

    const imageReq =  <div className="imageReq">
      <h3>Image Requirements</h3>
      <li className="im_ind_req">JPEG only</li>
      <li className="im_ind_req">Max. photo size is 25 Mb</li>
      <ul className="fnt_err">
        {this.state.photoErrors.map( (fErr, idx) => (
          <li key={`fnt_err ${idx}`}>{fErr}</li>
        ))}
      </ul>
    </div>

    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} style={{height: "300px"}} /> : imageReq;

  return(
    <div className="photoCreate_Page">
      <h2>
        Upload photo
      </h2>

      <div className="photoCreate_content">
        <div className="pcc_Lt">
          {preview}
        </div>
        <div className="pcc_Rt fColCen">
          <form className="photo_form fColCen" onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="file-input" className="pcc_message file-input blueButton">Select Photo</label>
            <input type="file" id="file-input" className="fileInput" 
              name = "file" onChange={this.handleFile.bind(this)} />

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
            </div>
              <button className="blueButton">Upload Photo</button>
          </form>
        </div>
      </div>
      
   
      
    </div>
  )
  }
}

export default photoCreate;