import React from 'react';
import FoodDetails from './FoodDetails';
import { connect } from 'react-redux';

const Meal = ({meal}) => (
  <div className="table-container">
    <div>{meal}</div>
    <FoodDetails />
    <div>Total</div>
    <button>Reroll</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    meal: state.meal,
  }
}

export default connect(mapStateToProps, null)(Meal);