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
        </div>

        <div className="row">
        <section>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="First Name" id="first_name" className="first_name" />
          </section>

          <section>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="Last Name" id="last_name" />
          </section>
        </div>

        <div className="row">
          <section>
            <label htmlFor="">Location</label>
            <input type="text" name="" id="City" />
            <input type="text" name="" id="Country" />
          </section>
        </div>

        <div className="row">
          <section>
            <label>About (optional)</label>
            <textarea name="About" id="about" cols="30" rows="10"></textarea>
          </section>
        </div>
        
        <div className="row">
          <section>
            <label htmlFor="website">Website</label>
            <input type="text" name="Website" id="website" className="website" />
          </section>

          <section>
            <label htmlFor="instagram">Instagram</label>
            <input type="text" name="Instagram" id="instagram" className="instagram"/>
          </section>
        </div>

        <div className="row">
          <section>
            <label htmlFor="facebook">Facebook</label>
            <input type="text" name="Facebook" id="facebook" className="facebook" />
          </section>

          <section>
            <label htmlFor="twitter">Twitter</label>
            <input type="text" name="Twitter" id="twitter" className="twitter"/>
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