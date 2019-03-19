import React from 'react';
import TagInput from './TagInput';
import Variant from './Variant';
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
      kcal: '',
      prot: '',
      fats: '',
      carb: '',
      variant: {},
      ingredients: []
    }
  }
  getIngredients = (items, value) => {
    this.setState({ingredients: [...items, value]})
  }
  getVariant = (item) => {
    this.setState({variant: {
      name: item.name,
      macros: {
        kcal: item.kcal,
        prot: item.prot,
        carb: item.carb,
        fats: item.fats
      }
    }})
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

        <Ingredients />
        <Variants />

        <label>Recipe:</label>
        <input 
          name='recipe'
          value={this.state.recipe}
          onChange={this.onChange}
          type='text'
          placeholder='Enter recipe here'
        />

        <button>Add New Recipe</button>
        {/* <form className="recipe-form" onSubmit={this.onSubmit}>
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
          Variants: <Variant getVariant={this.getVariant}/>
          Ingredients: <TagInput getIngredients={this.getIngredients}/>
          <button>Send</button>
        </form> */}
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