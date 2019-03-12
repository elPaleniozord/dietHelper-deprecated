import React from 'react';
import TagInput from './TagInput';
import { connect } from 'react-redux';
import { startAddNewRecipe } from '../actions/recipes';

class AddRecipe extends React.Component{
  constructor(props){
    super(props)

    this.ingredientsRef = React.createRef();

    this.state = {
      id: '',
      menu: '',
      kcal: '',
      prot: '',
      fats: '',
      carb: '',
      ingredients: []
    }
  }
  getIngredients = (items, value) => {
    this.setState({ingredients: [...items, value]})
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
        <h1>Add New Recipe</h1>
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
            <option value="shake">Shake</option>
            <option value="supper">Supper</option>
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

          Ingredients: <TagInput ref={this.ingredientsRef} getIngredients={this.getIngredients}/>
          <button>Send</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addNewRecipe: (recipe) => dispatch(startAddNewRecipe(recipe))
  })
}

export default connect(undefined, mapDispatchToProps)(AddRecipe);