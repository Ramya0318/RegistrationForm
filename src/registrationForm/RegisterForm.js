import React from 'react';
import './style.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["name"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          fields['country']="";
          fields['state']="";
          fields['city']="";
         
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter Name.";
      }

      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
       
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter a strong password.";
        }
      }
      if (!fields["country"]) {
        formIsValid = false;
        errors["country"] = "*Please enter your Country";
      }
      if (!fields["state"]) {
        formIsValid = false;
        errors["state"] = "*Please enter your State";
      }
      if (!fields["city"]) {
        formIsValid = false;
        errors["city"] = "*Please enter your city";
      }
      
      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Registration Form</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Name</label>
        <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} placeholder="Enter your Name" />
        <div className="errorMsg">{this.state.errors.name}</div>
        <label>Email ID</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} placeholder="Enter your email" />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile No </label>
        <div className='form1'><label for='number'>  
</label> 
     
  </div>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}  placeholder="Enter your Mobile no." />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder="Enter your password" />
        <div className="errorMsg">{this.state.errors.password}</div>
       
       <label><div className='form3'> Country
       
     </div>
        </label> <input type="text" name="country" value={this.state.fields.country} onChange={this.handleChange}placeholder="Enter yor Country" />
        <div className="errorMsg">{this.state.errors.country}</div>
        <label><div className='form3'> State
       
     </div>
        </label> <input type="text" name="state" value={this.state.fields.state} onChange={this.handleChange} placeholder="Enter your State"/>
        <div className="errorMsg">{this.state.errors.state}</div>
        <label><div className='form3'> City
       
     </div>
        </label> <input type="text" name="city" value={this.state.fields.city} onChange={this.handleChange} placeholder="Enter your City"/>
        <div className="errorMsg">{this.state.errors.city}</div>
        <label><div className='form3'> Message
       
       </div>
          </label><textarea className="message"  placeholder="Write something..." />
        
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }q


}


export default RegisterForm;