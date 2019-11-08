import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if(props.formType === 'signup') { // If signup form, more parameters in state.
      this.state = {
        user_name: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
      };
    } else {
      this.state = {
        user_name: '',
        password: ''
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  renderErrors() { // Perhaps I'll need to do something different than a list of li. Maybe have it pop up at top or beneath the broken field
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // Helper function to create additional inputs as part of our state if we're in a signup form
  signupFormExtras(labelName, stateName){
    if (this.props.formType === 'signup') {
      // console.log(this.state.user_name); 
      let modStateName = `this.state.` + stateName
      return (
        <div>
          <label>{labelName}</label>
            <br /> 
            <input type="text"
              value={eval(modStateName)}
              onChange={this.update(stateName)}
              className="login-input"
            />
          <br />
        </div>
      )
    }
  }


  render() {
    return (
      <div className="session_page__content_region">
        <form onSubmit={this.handleSubmit} className="session_form">   
            <br />
            <h2>{this.props.headerMain}</h2>
            <h3>{this.props.headerSub}</h3>
            {this.renderErrors()} {/* 500pix has this as a popup notification alert */}
            <div className="login-form">
              <br /> 

              {this.signupFormExtras("First Name", 'first_name')}
              {this.signupFormExtras("Last Name", 'last_name')}
            

              <label>Username</label>
              <br /> 
                <input type="text"
                  value={this.state.user_name}
                  onChange={this.update('user_name')}
                  className="login-input"
                />
              <br /> 

              {this.signupFormExtras("Email", 'email')}

              <label>Password</label>
              <br /> 
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              
              <br />
              <br /> 
             <button className="session-submit" type="submit" value={this.props.formType}>{this.props.formType}</button>

              <br />
              <br />
              <h4>
                {this.props.navPrompt} {this.props.navLink}
              </h4>

            </div>
          </form>
      </div>
    );
  }
}

export default SessionForm;
