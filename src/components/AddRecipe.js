import React from 'react';
import TagInput from './TagInput';
import { connect } from 'react-redux';
import { addNewRecipe } from '../actions/recipes';

class AddRecipe extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      id: '',
      menu: '',
      kcal: '2000',
      prot: '',
      fats: '',
      carb: '',
      ingredients: []
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addNewRecipe(this.state)
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  onSelect = event => {
    this.setState({menu: event.target.value})
  }

  render(){
    return (
      <div className="content-container">
        Add New Recipe
        <form className="recipe-form" onSubmit={this.onSubmit}>
          <input 
            name='id'
            value={this.state.id}
            onChange={this.onChange}
            type="text"
            placeholder="Recipe Name"
          />

          <label>Menu:</label>
          <select value={this.state.menu.value} onChange={this.onSelect}>
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

          Ingredients: <TagInput/>
          <button>Send</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addNewRecipe: (recipe) => dispatch(addNewRecipe(recipe))
  })
}

export default connect(undefined, mapDispatchToProps)(AddRecipe);