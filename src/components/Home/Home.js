import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { signOut } from "../../store/actions/login.action";

const Home = (props) => {
  const { token } = props;
  if (!token) return <Navigate to='/login' />;
  return (
    <div>
      <div>Home</div> <div onClick={props.signOut}>Sign Out</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
