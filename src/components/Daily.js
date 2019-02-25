import React from 'react';
import Meal from './Meal';

const meals = ['Breakfast', 'Snack', 'Dinner', 'Shake', 'Supper'];
let meal = [];
for(let i=0; i<meals.length; i++){
  meal.push(<Meal key={i} meal={meals[i]}/>)
}
const Daily = ({day}) => (
  <div className="meal-planner__table">
    <h2>{day}</h2>
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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    
  </div>
)

export default Daily;