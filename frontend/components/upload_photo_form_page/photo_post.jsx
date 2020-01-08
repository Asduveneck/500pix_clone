import React from 'react';



class photoCreate extends React.Component {

  constructor(props) { // only valid in react class... 
    super(props);
    this.handleFiles = this.handleFiles.bind(this)
    this.state = {
      title: "",
    };
  }




  // Use principles from: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
  // once you get a basic version going.

  handleFiles() {
    console.log("test")
  };

  handleInput(e) {
    this.setState({title: e.currentTarget.value})

  }

  handleSubmit(e) {
    
  }


  render() {
  return(
    <div className="photoCreate_Page">
      New photos here
      <div id="drop-area">
        <form className="photo_form">

            <span>Upload photos</span>

            <button>Select Photos </button>
            <input type="file" id="fileElem" />
            {/* files supposed to go in handleFiles */}
          <span>Or drag and drop photos anywhere on this page</span>
        </form>
      </div>
    </div>
  )
  }
}

export default photoCreate;