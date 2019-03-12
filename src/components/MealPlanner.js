import React from 'react';
import Weekly from './Weekly';
import { connect } from 'react-redux';
//import {generateMealPlan} from '../actions/food';

class MealPlanner extends React.Component {
  constructor(props){
    super(props)
    //this.generateMealPlan = props.generateMealPlan
  }

  render(){
    return (
      <div className="content-container">
        <h1>Meal Planner</h1>
        <Weekly/>
        <button>Create New Meal Plan</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    //generateMealPlan: () => dispatch(generateMealPlan())
  })
}

export default connect(undefined, mapDispatchToProps)(MealPlanner);