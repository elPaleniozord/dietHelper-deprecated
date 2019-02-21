import React from 'react';
import {connect} from 'react-redux';
import {registerNewUser} from '../../actions/auth';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class Register extends React.Component {
	constructor(props){
		super(props);
    this.state = {...INITIAL_STATE}
	}
	onSubmit = event => {
    const {username, email, passwordOne} = this.state;
    this.props.registerNewUser(email, passwordOne)
	}
	onChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}
	render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
		} = this.state;

		return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        
        <button type="submit">
          Register
        </button>
				</form>
				)
	}
}

const mapDispatchToProps = (dispatch) => ({
  registerNewUser: (email, password) => dispatch(registerNewUser(email, password))
});

export default connect(undefined, mapDispatchToProps)(Register)