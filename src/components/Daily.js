import React from 'react';
import Meal from './Meal';

const Daily = ({day}) => (
  <div className="day-container">
    {day}
    <Meal />
  </div>
)

export default Daily;