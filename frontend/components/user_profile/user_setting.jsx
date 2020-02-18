import React, { useState } from 'react';
import { Link } from 'react-router-dom';

class UserSetting extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      location_city: this.props.user.location_city || "",
      location_country: this.props.user.location_country || "" ,
      about: this.props.user.about || "",
      website: this.props.user.website || "",
      instagram_username: this.props.user.instagram_username || "",
      facebook_address: this.props.user.facebook_address || "",
      twitter: this.props.user.twitter || ""
    }
    this.updateUserPOJO = this.updateUserPOJO.bind(this);
  }

  componentDidMount() {
    // if (!this.props.)
    // console.log("testing");
    // console.log(this.props.user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateUserPOJO() {
    let updatedUser = this.state;
    // do a check on first_name and last_name to be at least 3 characters each:
    updatedUser.id = this.props.user.id
    updatedUser.user_name = this.props.user.user_name
    // console.log("updated user:", updatedUser)
    // debugger;
    this.props.updateUser(updatedUser)
      .then(() => document.location.reload()) // Bug: horrible patch. 
    // this.props.closeModal();
  }


  render(){
    // console.log(this.state);
    return (
      <div className="usr_setting_page" >
        <div className="header">
          {/* Contains image for cover photo and user picture */}
          <div className="cover_photo">
              <span className="icon">Change your cover photo</span>
          </div>
          <div className="user_photo">
          </div>
        </div>

        <div className="row">
          <section>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="First Name" placeholder="First Name" 
            onChange={this.update('first_name')} value={this.state.first_name}
            id="first_name" className="first_name input"/>
          </section>

          <section>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="Last Name" placeholder="Last Name" 
              onChange={this.update('last_name')} value={this.state.last_name}
            id="last_name" className="last_name input"/>
          </section>
        </div>

        <div className="pseudoLabel">Location</div>
        <div className="row">
          <section>
            <label htmlFor="City" className="blank"> </label>
            <input type="text" maxLength="128" name="City" placeholder="City" 
              onChange={this.update('location_city')} value={this.state.location_city}
            id="City" className="City input"/>
          </section>
          <section>
            <label htmlFor="Country" className="blank"> </label>
            <input type="text" maxLength="128" name="Country" placeholder="Country" 
            onChange={this.update('location_country')} value={this.state.location_country}
            id="Country" className="Country input"/>
          </section>
        </div>

        <div className="row">
          <section>
            <label htmlFor="about">About (optional)</label>
            <textarea name="About"  cols="30" rows="10" placeholder="Tell the world your story."
              onChange={this.update('about')} value={this.state.about}
              id="about" className="input"></textarea>
          </section>
        </div>
        
        <div className="row">
          <section>
            <label htmlFor="website">Website</label>
            <input type="text" maxLength="128" name="Website" placeholder="Enter URL"
              onChange={this.update('website')} value={this.state.website}
              id="website"  className="website input"/>
          </section>

          <section>
            <label htmlFor="instagram">Instagram</label>
            <input type="text" maxLength="128" name="Instagram" placeholder="Username"
              onChange={this.update('instagram_username')} value={this.state.instagram_username}
              id="instagram"  className="instagram input"/>
          </section>
        </div>

        <div className="row">
          <section>
            <label htmlFor="facebook">Facebook</label>
            <input type="text" maxLength="128" name="Facebook" placeholder="Full facebook address"
              onChange={this.update('facebook_address')} value={this.state.facebook_address}
              id="facebook"  className="facebook input"/>
          </section>

          <section>
            <label htmlFor="twitter">Twitter</label>
            <input type="text" maxLength="128" name="Twitter" placeholder="Username"
              onChange={this.update('twitter')} value={this.state.twitter}
              id="twitter"  className="twitter input"/>
          </section>
        </div>

        <div className="footer">
          {/* save or cancel buttons here. */}
          <button type="button" className="cancel" onClick={() => this.props.closeModal()} >Cancel</button>
          <button type="button" className="save" onClick={() => this.updateUserPOJO()}>Save</button>
        </div>
      </div>

    )
  }
}

export default UserSetting;