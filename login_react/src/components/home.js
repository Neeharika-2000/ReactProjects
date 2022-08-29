import Button from '@mui/material/Button';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }
    login = () => {
        this.props.navigation("Login");
    }
    signup = () => {
     this.props.navigation("Signup");
    }

  render() {
    return (
            <>
            <h1> Home Page </h1>
                <Button variant="outlined" onClick={this.login}>Login</Button>
                <Button variant="outlined" onClick={this.signup}>Sign Up</Button>
            </>

    );
  }
}
 function HomeFunction(props) {
  const navigation = useNavigate();

  return <Home {...props} navigation={navigation} />;
}
export default HomeFunction;