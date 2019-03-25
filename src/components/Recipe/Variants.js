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
      variants: []
    }
  }
  addVariant = event => {    
    const newVar = {
      name: this.state.varId,
      items: this.state.items
    }
    console.log(newVar)
    this.setState({
      variants: [...this.state.variants, newVar]
    }, ()=>this.props.addNewVariant(newVar))
  }
  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  getItems = (item, value) => {
    this.setState({
      items: {[item]: value}
    })
  }

  render(){
    return (
      <div>
        Variants (optional):
        <label>Name:</label>
        <input 
          name='varId'
          value={this.state.varId}
          onChange={this.onChange}
          type='text'
          placeholder='Variant Name'
        />
        <Ingredients getItems={this.getItems}/>
        <button onClick={this.addVariant}>Add Variant</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewVariant: (variants) => dispatch(addNewVariant(variants))
})

export default connect(undefined, mapDispatchToProps)(Variants)