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
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount(){ // Clear errors upon loading the form.
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) { // Sign someone in...
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  } 

  handleDemo(e) { // Sign in a demo user
    e.preventDefault();
    let user = { user_name: 'guest', password: '!Password' };
    this.props.demo(user); // still has errors showing up
  }

  signupOnly(object){
    if (this.props.formType === 'signup') return (object)
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
      <div className="login_signup_form_page">  {/* Should be grey everywhere... */}
        <div className="login_signup_form_box">
          <div className="session_form_inner"> 

        <form onSubmit={this.handleSubmit} className="session_form">   
            <br />
            <h2>{this.props.headerMain}</h2>
            <h3>{this.props.headerSub}</h3>
            <ul className="session_errors">
              {this.renderErrors()} {/* 500pix has this as a popup notification alert */}
            </ul>
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

                <div className="demo_user"> 
                  <h5>Interested in trying 1000px?</h5>
                  <button onClick={this.handleDemo} id="demo_button" >Guest Account</button> {/* Make an 'a' tag instead? */}
                </div>

              <h4>
                {this.props.navPrompt} {this.props.navLink}
              </h4>
            </div>
          </form>

          </div>
        </div>
      </div>



    );
  }
}

export default SessionForm;
