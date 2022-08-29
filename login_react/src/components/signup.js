import Button from '@mui/material/Button';
import React, { Component } from 'react';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
            display : "",
            newpassword : "",
            verifypassword : "",
            username : ""
    };
 }
    UserName =(e) => {
         this.setState({username : e.target.value});
    }
     NewPassword = (e) =>{
                 this.setState({newpassword : e.target.value});
    }
     Verifypassword = (e) =>{
               this.setState({verifypassword : e.target.value});
    }

   signup = () => {
   if(this.state.newpassword === this.state.verifypassword && this.state.newpassword != "" && this.state.verifypassword != "")
   {
   localStorage.setItem('username', this.state.username);
    localStorage.setItem('password', this.state.verifypassword);
   this.setState({display :"Registration successfull"});
   }
   else
   this.setState({display :"passwords doesn't match"});
   }


  render() {
    return (
             <>
                         <label>Username : </label>
                                       <input type="text" placeholder="Enter Username" className="username-field" required onChange = {this.UserName}/>
                           			<br/><br/>
                         <label>New Password : </label>
                          <input type="password" placeholder="Enter Password" className="pass-field" required onChange = {this.NewPassword}/>
                          <br/><br/>
                          <label>Re-Type Password : </label>
                          <input type="password" placeholder="Enter Password" className="pass-field" required onChange = {this.Verifypassword}/>
                          <br/><br/>
                            <Button variant="outlined" onClick={this.signup}>Login</Button>

                          {this.state.display}

                        </>

    );
  }
}

export default SignUp;