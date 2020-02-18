import React, { useState } from 'react';
import { Link } from 'react-router-dom';

class UserSetting extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
  }

  render(){
    console.log("testing 123")
    return (
      <div className="usr_setting_page">
        <div className="header">
          {/* Contains image for cover photo and user picture */}
          <div className="cover_photo">
          </div>
          <div className="user_photo">
          </div>
        </div>

        <div className="row">
        <section>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="First Name" placeholder="First Name" id="first_name" className="first_name input"/>
          </section>

          <section>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="Last Name" placeholder="Last Name" id="last_name" className="last_name input"/>
          </section>
        </div>

        <div className="pseudoLabel">Location</div>
        <div className="row">
          <section>
            <label htmlFor="City" className="blank"> </label>
            <input type="text" maxLength="128" name="City" placeholder="City" id="City" className="City input"/>
          </section>
          <section>
            <label htmlFor="Country" className="blank"> </label>
            <input type="text" maxLength="128" name="Country" placeholder="Country" id="Country" className="Country input"/>
          </section>
        </div>

        <div className="row">
          <section>
            <label>About (optional)</label>
            <textarea name="About" id="about" cols="30" rows="10" className="input">Tell the world your story.</textarea>
          </section>
        </div>
        
        <div className="row">
          <section>
            <label htmlFor="website">Website</label>
            <input type="text" maxLength="128" name="Website" id="website" placeholder="Enter URL" className="website input"/>
          </section>

          <section>
            <label htmlFor="instagram">Instagram</label>
            <input type="text" maxLength="128" name="Instagram" id="instagram" placeholder="Username" className="instagram input"/>
          </section>
        </div>

        <div className="row">
          <section>
            <label htmlFor="facebook">Facebook</label>
            <input type="text" maxLength="128" name="Facebook" id="facebook" placeholder="Full facebook address" className="facebook input"/>
          </section>

          <section>
            <label htmlFor="twitter">Twitter</label>
            <input type="text" maxLength="128" name="Twitter" id="twitter" placeholder="Username" className="twitter input"/>
          </section>
        </div>

        <div className="footer">
          {/* save or cancel buttons here. */}
        </div>
      </div>

    )
  }
}

export default UserSetting;