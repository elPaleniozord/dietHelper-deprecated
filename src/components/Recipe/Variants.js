import React from 'react';
import Ingredients from './Ingredients';
import {connect} from 'react-redux';
import {addNewVariant} from '../../actions/recipes'

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
    this.setState({variants: {...newVariant, ...this.state.variants}}, ()=>this.getVariants(this.state.variants))
  }
  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  getItems = (ingredients) => {
    this.setState({
      items: ingredients
    }, ()=>console.log(this.state))
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