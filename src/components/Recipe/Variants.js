import React from 'react';
import Ingredients from './Ingredients';

class Variants extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      varId: '',
      items: {},
      variants: {}
    }
    //this.getIngredients = this.props.getIngredients.bind(this)
    this.getVariants = this.props.getVariants.bind(this)
  }

  addVariant = event => {
    const newVariant = {
      [this.state.varId]: this.state.items
    }
    this.getVariants(newVariant)
    this.setState({
      varId: '',
      items: {},  
      variants: {}
    })
  }
  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  getItems = (ingredients) => {
    this.setState({
      items: ingredients
    })
  }

  render(){

    return (
      <div className="variant-container">
        New Variant (optional):
        <label>Name:</label>
        <input 
          name='varId'
          value={this.state.varId}
          onChange={this.onChange}
          type='text'
          placeholder='Variant Name'
        />
        <Ingredients getIngredients={this.getItems}/>
        <button onClick={this.addVariant}>Add Variant</button>
      </div>
    )
  }
}


export default Variants