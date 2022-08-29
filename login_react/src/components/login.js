import Button from '@mui/material/Button';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
            password : "",
            display : "",
            name : ""

    };
  }
  UserName =(e) => {
         this.setState({name : e.target.value});
  }

    passwordset = (e) => {
        this.setState({password : e.target.value})
    }
    login = () => {
        debugger;
        let username =  localStorage.getItem('username');
        let password =   localStorage.getItem('password');
        if(this.state.name === username && this.state.password === password)
        {
              this.setState({display : "Login successfull"});
        }
        else
        this.setState({display : "User Not Found"});


    }

  render() {

    return (
            <>
             <label>Username : </label>
                           <input type="text" placeholder="Enter Username" className="username-field" required onChange = {this.UserName}/>
               			<br/><br/>
                           <label>Password : </label>
                           <input type="password" placeholder="Enter Password" className="pass-field" required onChange = {this.passwordset}/>
               			 <br/><br/>
                           <Button variant="outlined" onClick={this.login}>Login</Button>
                        {this.state.display}



            </>

    );
  }
}

 function LoginFunction(props) {
  const navigation = useNavigate();

  return <Login {...props} navigation={navigation} />;
}
export default LoginFunction;