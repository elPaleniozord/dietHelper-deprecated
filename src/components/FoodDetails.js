import React from 'react';
import Macros from './Macros'

class FoodDetails extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      item_1: {
        name: 'bannana',
        amount: 1,
        kcal: 100,
        prot: 7,
        carb: 20,
        fats: 1
      },
      item_2: {
        name: 'yoghurt',
        amount: 250,
        kcal: 100,
        prot: 20,
        carb: 20,
        fats: 5
      }
    }
  }
  render(){
    const rows = Object.keys(this.state).map(i=><Macros key={i} item={this.state[i]}/>)

    return (
      <div className="meal-planner__details">
        {rows}
      </div>
    )
  }
}

export default FoodDetails;