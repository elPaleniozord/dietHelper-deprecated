import React from 'react';
import FoodDetails from './FoodDetails';
import { connect } from 'react-redux';

const Meal = ({meal}) => (
  <div className="meal-planner meal-planner__meal">
    <div>{meal}</div>
    <FoodDetails />
    <div className="meal-planner meal-planner__footer">
      Total
      <button>Reroll</button>
    </div>    
  </div>
)

// const mapStateToProps = (state) => {
//   return {
//     meal: state.meal,
//   }
// }

//export default connect(mapStateToProps, null)(Meal);
export default Meal;