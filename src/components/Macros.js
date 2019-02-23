import React from 'react';

const Macros = ({item}) => (
  <div className="meal-planner meal-planner__macros">
    <div>{item.name} x {item.amount}</div>
    <div>{item.kcal}</div>
    <div>{item.prot}</div>
    <div>{item.carb}</div>
    <div>{item.fats}</div>
  </div>
)

export default Macros