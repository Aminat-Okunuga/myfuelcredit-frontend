import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/login.action";
import "./Login.css";

class NewLogin extends Component {
  state = {
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
    this.props.loginUser(this.state);

    this.setState({
      email: "",
      password: "",
    });
    console.log(this.state);
  };
  render() {
    const { authError, token } = this.props;
    if (token) return <Navigate to='/' />;
    return (
      <div class='entry'>
        <div class='entry__wrapper'>
          <div class='h2 entry__title text-center font-bold py-2 px-4'>Sign in</div>
          {authError ? (
            <div class='entry__note text-white py-2 px-2 rounded-md bg-red-500 !my-2'>
              {authError}
            </div>
          ) : null}

          <form className='entry__fieldset form' onSubmit={this.handleSubmit}>
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
              Sign In
            </button>
            <p class="message font-bold text-color font-bold py-2 px-4">Not registered?<Link to='/sign-up'> Create an account</Link></p>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.userReducer.authError,
    token: state.userReducer.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userObj) => dispatch(loginUser(userObj)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewLogin);
