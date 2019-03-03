import React from 'react';
import Meal from './Meal';

const meals = ['Breakfast', 'Snack', 'Dinner', 'Shake', 'Supper'];
let meal = [];
for(let i=0; i<meals.length; i++){
  meal.push(<Meal key={i} meal={meals[i]}/>)
}

class Daily extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      day: props.day,
      display: false
    }
  }
  
  onClick = () => {
    this.setState(prevState => ({
      display: !prevState.display
    }))
  }

  render(){
    return (
      <div className="meal-planner__table">
        <h2 onClick={this.onClick}>{this.state.day}</h2>
        {this.state.display?
          <div>
            <div className="meal-planner__labels">
              <div>Meal</div>
              <div>Food</div>
              <div>kCal</div>
              <div>Protein</div>
              <div>Carbs</div>
              <div>Fats</div>
            </div>
            <div className="meal-planner__main">
              {meal}
            </div>
            <div className="meal-planner__labels">
              <div>Total</div>
              <button>Reroll</button>
              <div>x</div>
              <div>x</div>
              <div>x</div>
              <div>x</div>
            </div>
          </div>
          :
          null} 
      </div>
    )
  }
}

export default Daily;