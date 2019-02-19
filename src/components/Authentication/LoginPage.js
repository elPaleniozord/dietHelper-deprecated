import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Diet-Helper</h1>
      <h2>Automatic Meal Plan Generator</h2>
      <form>
          
          <button>Login</button>
          <button>Register</button>
      </form>
      <button className="button" onClick={startLogin}>Login with Google</button>
      <button className="button">Login with Facebook</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
