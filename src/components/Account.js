import React from 'react';
import {connect} from 'react-redux';

class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'Anon',
      kcal: 0,
      goal: ''
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    return (
      <div>
        <h1>Account</h1>
        <h2>Hello, {this.state.username}</h2>
        <form>
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
          <select>
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
    auth: state.auth.uid
  }
}

export default connect(mapStateToProps)(Account);