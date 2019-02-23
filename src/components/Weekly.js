import React from 'react';
import Daily from './Daily';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let week = [];
for(let i=0; i<days.length; i++){
  week.push(<Daily key={i} day={days[i]}/>)
}

const Weekly = () => (
  <div className="meal-planner">
    {week}
  </div>
)

export default Weekly