import React from 'react';
import FoodDetails from './FoodDetails';
//import { connect } from 'react-redux';

const Meal = ({meal}) => (
  <div className="meal-planner meal-planner__meal">
    <div className="meal-planner__name">{meal}</div>
    <FoodDetails />  
  </div>
)

// const mapStateToProps = (state) => {
//   return {
//     meal: state.meal,
//   }
// }

//export default connect(mapStateToProps, null)(Meal);
export default Meal;