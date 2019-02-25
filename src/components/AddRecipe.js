import React from 'react';

class AddRecipe extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      recipe: '',
      menu: '',
      kcal: '2000',
      prot: '',
      fats: '',
      carb: '',
      ingredients: []
    }
  }

  onSubmit = event => {

  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return (
      <div>
        Add New Recipe
        <form onSubmit={this.onSubmit}>
          <input 
            name='recipe'
            value={this.state.recipe}
            onChange={this.onChange}
            type="text"
            placeholder="Recipe Name"
          />

          <label>Menu:</label>
          <select>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="shake">Breakfast</option>
            <option value="supper">Breakfast</option>
          </select>

          <label>Macros:</label>
          <input 
            name='kcal'
            value={this.state.kcal}
            onChange={this.onChange}
            type="text"
            placeholder="kCal/100g"
          />
          <input 
            name='prot'
            value={this.state.prot}
            onChange={this.onChange}
            type="text"
            placeholder="protein/100g"
          />
          <input 
            name='carb'
            value={this.state.carb}
            onChange={this.onChange}
            type="text"
            placeholder="carbs/100g"
          />
          <input 
            name='fats'
            value={this.state.fats}
            onChange={this.onChange}
            type="text"
            placeholder="fats/100g"
          />
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default AddRecipe;