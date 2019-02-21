import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startGoogleLogin } from '../../actions/auth';
import { Link } from 'react-router-dom';

export const LoginPage = ({ startLogin, startGoogleLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Diet-Helper</h1>
      <h2>Automatic Meal Plan Generator</h2>
      <LoginForm startLogin={startLogin}/>
      <button><Link to="/register">Register</Link></button>
      <button className="button" onClick={startGoogleLogin}>Login with Google</button>
    </div>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE};
    console.log(this)
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  onSubmit = event => {
    const {email, password, error} = this.state
    this.props.startLogin(email, password)
    event.preventDefault();
  }

  render(){
    const { email, password, error } = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: (email, password) => dispatch(startLogin(email, password)),
  startGoogleLogin: () => dispatch(startGoogleLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);