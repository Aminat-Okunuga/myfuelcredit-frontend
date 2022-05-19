import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginUser, signUpUser } from "../../store/actions/login.action";
import "../Login/Login.css";

export class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUpUser(this.state);

    this.setState({
      name: "",
      email: "",
      password: "",
    });
    console.log(this.state);
  };
  render() {
    const { signinError, tokenUp } = this.props;
    if (tokenUp) return <Navigate to='/login' />;
    return (
      <div class='entry'>
        <div class='entry__wrapper'>
          <div class='h2 entry__title text-center font-bold py-2 px-4'>Sign Up</div>
          {signinError ? (
            <div class='entry__note text-white py-2 px-2 rounded-md bg-red-500 !my-2'>
              {signinError}
            </div>
          ) : null}

          <form class='entry__fieldset form' onSubmit={this.handleSubmit}>
            <input
              class='field__input'
              type='name'
              name='name'
              placeholder='Your Name'
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              class='field__input'
              type='email'
              name='email'
              placeholder='Your email'
              required
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              class='field__input'
              type='password'
              name='password'
              placeholder='Password'
              required
              onChange={this.handleChange}
              value={this.state.password}
            />

            <button
              class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded entry__button'
              type='submit'
            >
              Sign Up
            </button>
            <p className="message font-bold text-color font-bold py-2 px-4">Already have an account?<Link to='/login'> Log In</Link></p>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    signinError: state.userReducer.signinError,
    tokenUp: state.userReducer.tokenUp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (userObj) => dispatch(signUpUser(userObj)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
