import React from 'react';

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
    Object.keys(this.state).map(i=>console.log(this.state[i]))
    
    return (
      <div className="food-details-container">
        <div className="food-details-labels">
          <span>Food</span>
          <span>kCal</span>
          <span>Protein</span>
          <span>Carbs</span>
          <span>Fats</span>
        </div>
        <div className="food-details-items">
          
        </div>
        <div className="food-details-summary">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}

export default FoodDetails;