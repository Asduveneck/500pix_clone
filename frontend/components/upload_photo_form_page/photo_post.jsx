import React from 'react';



class photoCreate extends React.Component {

  constructor(props) { // only valid in react class... 
    super(props);
    // this.handleFile = this.handleFile.bind(this)
    this.state = {
      // title: "",
      // description: "",
      // You update all this other information in a redirect.
      photos: []
    };
  }




  // Use principles from: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
  // once you get a basic version going.

  handleFile(e) {
    this.setState({photos: e.currentTarget.files})
  };

  // handleInput(e) { // some other page will do the actual sending. We may have our handleSubmit be a way to thread in props!
  //   this.setState({title: e.currentTarget.value})
  // }

  handleSubmit(e) {

  }


  render() {
  return(
    <div className="photoCreate_Page">
      New photos here
      <div id="drop-area">
        <form className="photo_form" onSubmit={this.handleSubmit.bind(this)}>

            <span>Upload photos</span>

            <button>Select Photos </button>
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