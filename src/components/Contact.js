
import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class App extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className='cards' id="Contact" id="Contact2">
         <h1>Contact</h1>
         <div className='cards__container'>
       <div className='cards__wrapper'>
      <div className="App">
      <form id="contact-form" onSubmit={this.handleSubmit}>
      <div className="form-group">
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>

          <div className="form-group">
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
       
         <div className="form-group">
              <label htmlFor="message" style={{color:"white"}}>Message</label>
             <textarea className="form-control" rows="5" id="message" value={this.state.message}  onChange={this.handleChange} />
       </div>
        
        <button type="submit">submit</button>
      </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}


