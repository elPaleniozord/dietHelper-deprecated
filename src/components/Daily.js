import React from 'react';
import Meal from './Meal';

const meals = ['Breakfast', 'Snack', 'Dinner', 'Shake', 'Supper'];
let meal = [];
for(let i=0; i<meals.length; i++){
  meal.push(<Meal key={i} meal={meals[i]}/>)
}

const Daily = ({day}) => (
  <div className="meal-planner__daily">
    <h2>{day}</h2>
    <div className="meal-planner__labels">
      <div>Meal</div>
      <div>Food</div>
      <div>kCal</div>
      <div>Protein</div>
      <div>Carbs</div>
      <div>Fats</div>
    </div> 
    {meal}
  </div>
)

export default Daily;