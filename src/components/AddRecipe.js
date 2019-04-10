import React from 'react';
import { connect } from 'react-redux';
import { startAddNewRecipe } from '../actions/recipes';
import Ingredients from './Recipe/Ingredients';
import Variants from './Recipe/Variants';

class AddRecipe extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
      menu: 'breakfast',
      variants: {},
      ingredients: [],
      recipe: ''
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
  getIngredients = (item) => {
    this.setState({
      ingredients: [...this.state.ingredients, item]
    })
  }
  getVariants = (variant) => {
    this.setState({
      variants: {...this.state.variants, ...variant}
    })
  }

  render(){
    const variants = (
      <ul>
        {Object.keys(this.state.variants).map((variant, i)=>(
          <li key={i}>{variant}</li>
        ))}
      </ul>
    )

    return (
      <div className="content-container">
        <h1>Add New Recipe</h1>
        <label>Recipe Name:</label>
        <input 
          name='id'
          value={this.state.id}
          onChange={this.onChange}
          type='text'
          placeholder='Recipe Name'
        />

        <label>Menu:</label>
        <select value={this.state.menu.value} onChange={this.onSelect}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="shake">Shake</option>
          <option value="supper">Supper</option>
        </select>

        <Ingredients getIngredients={this.getIngredients}/>
        <h3>Variants:</h3>
        {Object.keys(this.state.variants).length > 0 ? variants : null}
        <Variants getVariants={this.getVariants}/>

        <label>Recipe:</label>
        <textarea 
          name='recipe'
          value={this.state.recipe}
          onChange={this.onChange}
          type='text'
          placeholder='Enter recipe here'
        />

        <button onClick={this.onSubmit}>Add New Recipe</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    newRecipe: state.recipes.newRecipe 
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addNewRecipe: (recipe) => dispatch(startAddNewRecipe(recipe))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);