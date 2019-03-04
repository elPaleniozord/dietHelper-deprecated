import React from 'react';
import {connect} from 'react-redux';
import {startUpdateUser} from '../actions/users';

class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: props.user ? props.user.username : 'Anon',
      kcal: props.user ? props.user.kcal : 0,
      goal: props.user ? props.user.goal : '',
      meals: props.user ? props.user.meals : 5
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSelect = event => {
    this.setState({goal: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.startUpdateUser(this.state)
  }

  render(){
    return (
      <div className="content-container">
        <h1>Account</h1>
        <h2>Hello, {this.state.username}</h2>
        <form onSubmit={this.onSubmit}>
          <label>Username:</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            placeholder="Username"
          />

          <label>Calorie Target:</label>
          <input
            name="kcal"
            value={this.state.kcal}
            onChange={this.onChange}
            type="text"
            placeholder="2000 kcal"
          />

          <label>Goal:</label>
          <select value={this.state.goal.value} onChange={this.onSelect}>
            <option value="bulk">Bulk Up</option>
            <option value="main">Maintenance</option>
            <option value="loss">Weight Loss</option>
          </select>

          <label>Meals per Day:</label>
          <input
            name="meals"
            value={this.state.meal}
            onChange={this.onChange}
            type="text"
            placeholder="5"
          />
          <button>Update</button>
        </form>
        <div>
          Your current meal plan
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.uid,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    startUpdateUser: (user) => dispatch(startUpdateUser(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);