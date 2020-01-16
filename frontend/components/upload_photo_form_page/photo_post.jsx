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
      // photos: []
    };
  }




  // Use principles from: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
  // once you get a basic version going.

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]}) // Need to index into the array for the photo files...
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
    formData.append('photo[title]', this.state.title); // title will just be the filename minus extension until user manually updates
    // and we'll be allowing multiple photo uploads...
    formData.append('photo[description]', this.state.description);
    formData.append('photo[file]', this.state.photoFile); // QUESTION: will this be restricted by my routes / model?
    formData.append('photo[user_id]', this.props.currentUserID);

    this.props.createPhoto(formData); // does the ajax call request
  }



  render() {
    console.log(this.props);
  return(
    <div className="photoCreate_Page">
      New photos here
      <div id="drop-area">
        <form className="photo_form" onSubmit={this.handleSubmit.bind(this)}>

            <span>Upload photos</span>

            {/* <button>Select Photos </button> */}
            {/* <input type="text"/> Do this for title and description? */}
            <input type="text" value={this.state.title} onChange={this.update('title')} />
            <textarea name="description" value={this.state.description} onChange={this.update('description')} />
            <input type="file" id="fileElem" onChange={this.handleFile.bind(this)} />
            {/* files supposed to go in handleFiles */}
          <span>Or drag and drop photos anywhere on this page</span>
        </form>
      </div>
    </div>
  )
  }
}

export default photoCreate;