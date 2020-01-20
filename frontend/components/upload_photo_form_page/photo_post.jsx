import React from 'react';
// We'll focus on basic functionality and assume one photo and one page only before making changes
class photoCreate extends React.Component {

  constructor(props) { // only valid in react class... 
    super(props);
    // this.handleFile = this.handleFile.bind(this)
    this.state = {
      title: "",
      description: "",
      // You update all this other information in a redirect.
      photoFile: null, // 
      photoUrl: null,
      // photos: []
    };
  }




  // Use principles from: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
  // once you get a basic version going.

  handleFile(e) {
    const fileReader = new FileReader(); // file Reader for preview
    const file = e.currentTarget.files[0] // Moved out of setState to later 

    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  // handleInput(e) { // some other page will do the actual sending. We may have our handleSubmit be a way to thread in props!
  //   this.setState({title: e.currentTarget.value})
  // } // bbeing done as update as in our session_form.jsx 

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // Following works with our AJAX call if we say `photo` instead of `{photo}`
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[file]', this.state.photoFile); // QUESTION: will this be restricted by my routes / model?
    formData.append('photo[user_id]', this.props.currentUserID);
    // formData.append('photo[photo]', "testing");
    // OKAY here:
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    // debugger; // Keys are properly nested. Fails in server end because it can't find photo...?

    this.props.createPhoto(formData); // does the ajax call request
  }



  render() {
    // Return a photo if present:
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} style={{height: "250px"}} /> : null;

  return(
    <div className="photoCreate_Page">
      <div className="photoCreate_Nav">
        Upload photo
      </div>

      <div className="photoCreate_content">
        <div className="pcc_Lt">
          {preview}
        </div>
        <div className="pcc_Rt">
          <form className="photo_form" onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="upload file">Upload Photo</label>
            <input type="file" id="fileElem" classname="fileInput" 
              name = "upload file" onChange={this.handleFile.bind(this)} />
            <label htmlFor="photo title">Title:</label>
              <input type="text" name="photo title" value={this.state.title} 
                onChange={this.update('title')} />
            <br/>
            <label htmlFor="photo description">Description:</label>
              <textarea name="description" name="photo description" 
                value={this.state.description} 
                onChange={this.update('description')} />
            {/* <span>Or drag and drop photos anywhere on this page</span> */}
            <button>Upload Photo</button>
          </form>
        </div>
      </div>
      
   
      
    </div>
  )
  }
}

export default photoCreate;