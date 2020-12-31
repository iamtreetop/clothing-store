import React from 'react';
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // debugger
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

  //   try {
  //     await auth.signInWithEmailAndPassword(email, password);
  //     this.setState({ email: '', password: ''})
  //   } catch (error) {
  //     console.log(error);
  //   };

    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const {value, name} = e.target;

    this.setState({ [name]: value})
  };

  render() {
    // debugger
    const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type='email' 
            name='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='email'
            required />
          <FormInput 
            type='password' 
            name='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
            label='password'
            required />
          <div className='buttons'>
            <CustomButton type="submit"> SIGN IN </CustomButton>
            <CustomButton 
              type="button" 
              onClick={googleSignInStart} 
              isGoogleSignIn
            > 
              Sign in with Google
            </CustomButton>
            </div>
        </form>
      </div>
    )
  };
};

const mapDTP = (dispatch) => {
  // debugger
  return ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
  })
};

export default connect(
  null, 
  mapDTP
)(SignIn);