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
      .then( () => this.setState({user_name: '', password: ''}));
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to thousand pix!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()} {/* 500pix has this as a popup notification alert */}
          <div className="login-form">
            <br /> 

            {this.signupFormExtras("First Name:", 'first_name')}
            {this.signupFormExtras("Last Name:", 'last_name')}
          

            <label>Username:
              <input type="text"
                value={this.state.user_name}
                onChange={this.update('user_name')}
                className="login-input"
              />
            </label>

            {this.signupFormExtras("Email:", 'email')}

            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
