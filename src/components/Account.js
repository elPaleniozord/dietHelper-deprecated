import React from 'react';
import {connect} from 'react-redux';

const Account = ({auth}) => (
  <div>
    <h1>Account</h1>
    <h2>{auth}</h2>
    <form>
      
    </form>
  </div>
);

const mapStateToProps = (state) => {
  return {
    auth: state.auth.uid
  }
}

export default connect(mapStateToProps)(Account);