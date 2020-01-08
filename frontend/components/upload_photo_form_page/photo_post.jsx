import React from 'react';

const photoCreate = () => {

  // constructor(props) { // only valid in react class... 
  //   super(props);
  //   this.handleFiles = this.handleFiles.bind(this)
  // }

  const handleFiles = () => {
    console.log("test")
  }

  return(
    <div className="photoCreate_Page">
      New photos here
      <div className="drop-area">
        <form className="photo_form">

            <span>Upload photos</span>

            <button>Select Photos </button>
            <input type="file" id="fileElem" onChange={handleFiles()}/>
            {/* files supposed to go in handleFiles */}
          <span>Or drag and drop photos anywhere on this page</span>
        </form>
      </div>
    </div>
  )
}

export default photoCreate;